const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const http = require('http');

let mainWindow;
let nextProcess;
const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
const PORT = 3000;

/**
 * Verifica se o servidor está rodando na porta especificada
 */
function checkServerReady(port, maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const check = () => {
      attempts++;
      const req = http.get(`http://localhost:${port}`, (res) => {
        resolve(true);
      });

      req.on('error', (err) => {
        if (attempts >= maxAttempts) {
          reject(new Error(`Servidor não iniciou após ${maxAttempts} tentativas`));
        } else {
          setTimeout(check, 500);
        }
      });
    };

    check();
  });
}

/**
 * Inicia o servidor Next.js
 */
function startNextServer() {
  const projectPath = path.join(__dirname, '..');

  let command, args;

  if (isDev) {
    // Modo desenvolvimento: usa npm run dev
    command = 'npm';
    args = ['run', 'dev'];
  } else {
    // Modo produção: usa npm run start (mais confiável em builds empacotados)
    command = 'npm';
    args = ['run', 'start'];
  }

  console.log(`Iniciando servidor Next.js: ${command} ${args.join(' ')}`);
  console.log(`Diretório: ${projectPath}`);

  nextProcess = spawn(command, args, {
    cwd: projectPath,
    shell: isDev || process.platform === 'win32',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  // Logs do servidor
  nextProcess.stdout.on('data', (data) => {
    console.log(`Next.js: ${data.toString()}`);
  });

  nextProcess.stderr.on('data', (data) => {
    console.error(`Next.js error: ${data.toString()}`);
  });

  nextProcess.on('error', (error) => {
    console.error('Erro ao iniciar servidor:', error);
    if (mainWindow) {
      mainWindow.loadURL(`data:text/html,<html><body style="font-family: Arial; padding: 20px; background: #f0f0f0;"><h1 style="color: #dc2626;">Erro ao iniciar servidor</h1><p>${error.message}</p><p>Verifique se o Next.js está instalado corretamente.</p></body></html>`);
      mainWindow.show();
    }
  });

  nextProcess.on('exit', (code) => {
    console.log(`Servidor Next.js encerrado com código ${code}`);
  });
}

/**
 * Cria a janela principal
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
    show: false, // Não mostrar até carregar
  });

  // Iniciar servidor
  startNextServer();

  // Aguardar servidor estar pronto e então carregar
  checkServerReady(PORT)
    .then(() => {
      console.log('Servidor pronto! Carregando aplicação...');
      mainWindow.loadURL(`http://localhost:${PORT}`);
      mainWindow.show();
    })
    .catch((error) => {
      console.error('Erro ao verificar servidor:', error);
      mainWindow.loadURL(`data:text/html,<html><body style="font-family: Arial; padding: 20px;"><h1>Erro ao conectar ao servidor</h1><p>${error.message}</p><p>Tente fechar e abrir novamente.</p></body></html>`);
      mainWindow.show();
    });

  // Abrir DevTools em desenvolvimento
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (nextProcess) {
    nextProcess.kill();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('before-quit', () => {
  if (nextProcess) {
    nextProcess.kill();
  }
});
