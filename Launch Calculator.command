#!/bin/bash

# Navegar para o diretório do projeto
cd "$(dirname "$0")"

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Verificar se o servidor já está rodando
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "✅ Servidor já está rodando em http://localhost:3000"
    open http://localhost:3000
else
    echo "🚀 Iniciando servidor..."
    # Abrir navegador após 3 segundos
    (sleep 3 && open http://localhost:3000) &
    # Iniciar servidor Next.js
    npm run dev
fi

