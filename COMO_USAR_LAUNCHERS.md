# 🚀 Como Usar os Launchers

## Opção 1: Script .command (JÁ CRIADO ✅)

### Como usar:
1. **Localize o arquivo** `Launch Calculator.command` na pasta do projeto
2. **Duplo clique** no arquivo
3. O terminal abrirá e iniciará o servidor
4. O navegador abrirá automaticamente em `http://localhost:3000`

### Personalizar ícone:
1. Clique com botão direito no arquivo `.command`
2. Selecione "Obter Informações"
3. Clique no ícone no topo
4. Cole um ícone personalizado (⌘+V)

### Mover para área de trabalho:
1. Arraste o arquivo `Launch Calculator.command` para a área de trabalho
2. Ou criar um alias (⌥+⌘ enquanto arrasta)

---

## Opção 2: Criar Aplicação macOS com Automator

### Passo a passo:

1. **Abrir Automator**
   - Abra o Spotlight (⌘+Espaço)
   - Digite "Automator" e pressione Enter

2. **Criar nova aplicação**
   - Clique em "Novo Documento"
   - Selecione "Aplicação"
   - Clique em "Escolher"

3. **Adicionar ação**
   - No lado esquerdo, procure "Executar Script Shell"
   - Arraste para a área de trabalho à direita

4. **Configurar script**
   - Cole o seguinte código no campo de script:

```bash
cd "/Users/leonardoostan/Documents/GitHub/weeks-calculator"
if [ ! -d node_modules ]; then
    npm install
fi
npm run dev &
sleep 3
open http://localhost:3000
```

5. **Salvar aplicação**
   - Arquivo → Salvar (⌘+S)
   - Nome: "Weeks Calculator"
   - Localização: Escolha "Área de Trabalho"
   - Formato: Aplicação

6. **Personalizar ícone** (opcional)
   - Clique com botão direito na aplicação
   - "Obter Informações"
   - Clique no ícone e cole um novo

---

## Opção 3: Aplicação Electron (Desktop App)

### Instalação:

```bash
# Executar script de setup
./scripts/create-electron-app.sh

# Ou manualmente:
npm install --save-dev electron electron-builder
```

### Executar:

```bash
npm run electron
```

### Criar aplicação instalável:
```bash
npm run electron:build
```

Isso criará um arquivo `.app` que pode ser instalado no macOS.

---

## Opção 4: Usar o Script AppleScript

### Como criar aplicação a partir do script:

1. **Abrir Script Editor**
   - Abra o Spotlight (⌘+Espaço)
   - Digite "Script Editor"

2. **Abrir o arquivo**
   - Arquivo → Abrir
   - Selecione `Launch Calculator.applescript`

3. **Salvar como aplicação**
   - Arquivo → Salvar (⌘+S)
   - Formato: Aplicação
   - Salve na área de trabalho

---

## 🎯 Recomendação

**Para uso imediato:** Use a **Opção 1** (Script .command) - já está pronta!

**Para experiência profissional:** Use a **Opção 3** (Electron) - requer setup inicial mas cria uma app desktop completa.

---

## 📝 Notas Importantes

- **Mantenha o terminal aberto** quando usar Opção 1 ou 2 (o servidor precisa estar rodando)
- **Para Electron:** O servidor roda internamente, não precisa manter terminal aberto
- **Porta 3000:** Certifique-se de que nenhum outro app está usando a porta 3000

