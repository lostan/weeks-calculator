# 🔧 Troubleshooting Electron - Weeks Calculator

## Problema: Tela em Branco

### Solução 1: Rebuild da Aplicação

O código foi corrigido. Siga estes passos:

```bash
# 1. Limpar builds anteriores
rm -rf .next dist

# 2. Rebuild do Next.js
npm run build

# 3. Testar em modo desenvolvimento primeiro
npm run electron:dev

# 4. Se funcionar, criar build de produção
npm run electron:build
```

### Solução 2: Verificar Logs

Se ainda tiver problemas, abra o DevTools:

1. No código `electron/main.js`, a linha que abre DevTools está comentada apenas em produção
2. Ou adicione temporariamente: `mainWindow.webContents.openDevTools();`

### Solução 3: Verificar Porta

Certifique-se de que a porta 3000 está livre:

```bash
lsof -i :3000
# Se estiver em uso, mate o processo ou mude a porta
```

### Solução 4: Verificar Build do Next.js

Certifique-se de que o build do Next.js foi criado:

```bash
ls -la .next
# Deve mostrar a pasta .next com os arquivos compilados
```

## Melhorias Implementadas

✅ **Verificação de servidor**: Agora verifica se o servidor está realmente rodando antes de carregar
✅ **Logs melhorados**: Logs detalhados para debug
✅ **Tratamento de erros**: Mensagens de erro mais claras
✅ **Modo produção**: Usa `next start` em produção em vez de `npm run dev`
✅ **Timeout inteligente**: Aguarda até 15 segundos (30 tentativas × 500ms)

## Comandos Úteis

```bash
# Desenvolvimento (com DevTools)
npm run electron:dev

# Build de produção
npm run electron:build

# Apenas empacotar (sem criar instalador)
npm run electron:pack

# Limpar tudo e recomeçar
rm -rf .next dist node_modules
npm install
npm run build
npm run electron:build
```

## Estrutura Esperada Após Build

```
weeks-calculator/
├── .next/              # Build do Next.js (deve existir)
├── dist/               # Build do Electron (criado após electron:build)
│   └── Weeks Calculator.app
├── electron/
│   └── main.js         # Arquivo principal do Electron
└── package.json
```

## Verificar se Está Funcionando

1. **Em desenvolvimento**: Execute `npm run electron:dev` e verifique o console
2. **Em produção**: Execute a aplicação e verifique os logs no Console.app (macOS)

## Problemas Comuns

### "Cannot find module 'next'"
- Execute: `npm install`
- Verifique se `node_modules/.bin/next` existe

### "Port 3000 already in use"
- Mate o processo: `kill -9 $(lsof -t -i:3000)`
- Ou mude a porta no código

### "Servidor não iniciou"
- Verifique se o build do Next.js existe: `ls .next`
- Execute `npm run build` novamente
- Verifique os logs no terminal

