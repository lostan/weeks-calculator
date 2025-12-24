# 🔄 Instruções para Rebuild - Corrigir Tela em Branco

## ✅ Correções Aplicadas

O código do Electron foi corrigido com as seguintes melhorias:

1. ✅ Verificação inteligente do servidor (aguarda até estar pronto)
2. ✅ Uso correto de `npm run start` em produção
3. ✅ Logs detalhados para debug
4. ✅ Tratamento de erros melhorado
5. ✅ Mensagens de erro mais claras

## 🚀 Passos para Rebuild

### 1. Limpar Builds Anteriores

```bash
rm -rf .next dist
```

### 2. Rebuild do Next.js

```bash
npm run build
```

Isso criará a pasta `.next` com o build do Next.js.

### 3. Testar em Modo Desenvolvimento

```bash
npm run electron:dev
```

Se funcionar aqui, o problema estava no build de produção.

### 4. Criar Build de Produção

```bash
npm run electron:build
```

Isso criará a aplicação em `dist/Weeks Calculator.app`

### 5. Testar a Aplicação

```bash
open "dist/Weeks Calculator.app"
```

Ou navegue até a pasta `dist` e dê duplo clique na aplicação.

## 🔍 Verificar se Está Funcionando

### Em Desenvolvimento:
- Execute `npm run electron:dev`
- O DevTools abrirá automaticamente
- Verifique o console para logs

### Em Produção:
- Abra a aplicação
- Se ainda tiver problemas, verifique os logs:
  - Abra "Console.app" (aplicação do macOS)
  - Procure por "Weeks Calculator" ou "Electron"

## 📝 O Que Foi Corrigido

### Antes (Problema):
- Usava `npm run dev` mesmo em produção
- Timeout fixo de 3 segundos (pode não ser suficiente)
- Não verificava se servidor estava realmente rodando
- Sem tratamento de erros adequado

### Depois (Corrigido):
- Usa `npm run start` em produção (após build)
- Verifica servidor até 15 segundos (30 tentativas)
- Aguarda servidor estar realmente pronto antes de carregar
- Logs detalhados e mensagens de erro claras

## 🐛 Se Ainda Não Funcionar

1. **Verifique se o build do Next.js existe:**
   ```bash
   ls -la .next
   ```

2. **Verifique se a porta 3000 está livre:**
   ```bash
   lsof -i :3000
   ```

3. **Verifique os logs:**
   - Execute `npm run electron:dev` e veja o console
   - Ou abra Console.app e procure por erros

4. **Limpe tudo e recomece:**
   ```bash
   rm -rf .next dist node_modules
   npm install
   npm run build
   npm run electron:build
   ```

## 📦 Estrutura Esperada

Após o build, você deve ter:

```
weeks-calculator/
├── .next/                    # Build do Next.js ✅
│   ├── static/
│   └── server/
├── dist/                     # Build do Electron ✅
│   └── Weeks Calculator.app
├── electron/
│   └── main.js              # Código corrigido ✅
└── package.json
```

## 💡 Dica

Se quiser ver os logs em tempo real durante o desenvolvimento:

```bash
npm run electron:dev
```

O DevTools abrirá automaticamente e você verá todos os logs do servidor Next.js.

