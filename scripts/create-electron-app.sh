#!/bin/bash

# Script para criar aplicação Electron
# Execute: ./scripts/create-electron-app.sh

echo "🚀 Criando aplicação Electron..."

# Instalar Electron e dependências
npm install --save-dev electron electron-builder

# Criar estrutura básica do Electron
mkdir -p electron

cat > electron/main.js << 'EOF'
const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

let mainWindow;
let nextProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, '../public/icon.png'), // Adicione um ícone depois
  });

  // Iniciar servidor Next.js
  const projectPath = path.join(__dirname, '..');
  nextProcess = spawn('npm', ['run', 'dev'], {
    cwd: projectPath,
    shell: true,
  });

  // Aguardar servidor iniciar e abrir
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:3000');
  }, 3000);

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
EOF

# Adicionar script ao package.json
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.main = 'electron/main.js';
pkg.scripts['electron'] = 'electron .';
pkg.scripts['electron:build'] = 'next build && electron-builder';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

echo "✅ Estrutura Electron criada!"
echo ""
echo "Para executar: npm run electron"
echo "Para build: npm run electron:build"

