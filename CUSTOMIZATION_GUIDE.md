# Guia de Personalização - Weeks Calculator

Este guia mostra como personalizar os elementos da interface, especialmente as cores.

## 📍 Onde Editar

Todos os estilos estão no arquivo: `app/page.tsx`

## 🎨 Elementos Personalizáveis

### 1. Botão "Calculate" (linha 75-81)

**Localização atual:**
```78:78:app/page.tsx
className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
```

**Classes importantes:**
- `bg-indigo-600` - Cor de fundo do botão (ativa)
- `hover:bg-indigo-700` - Cor quando passa o mouse
- `disabled:bg-gray-300` - Cor quando desabilitado
- `text-white` - Cor do texto

**Exemplos de cores alternativas:**

**Verde:**
```
bg-green-600 hover:bg-green-700
```

**Azul:**
```
bg-blue-600 hover:bg-blue-700
```

**Roxo:**
```
bg-purple-600 hover:bg-purple-700
```

**Vermelho:**
```
bg-red-600 hover:bg-red-700
```

**Rosa:**
```
bg-pink-600 hover:bg-pink-700
```

**Laranja:**
```
bg-orange-600 hover:bg-orange-700
```

### 2. Fundo da Página (linha 43)

**Atual:**
```
bg-gradient-to-br from-blue-50 to-indigo-100
```

**Alternativas:**
- `bg-gradient-to-br from-green-50 to-emerald-100` (verde)
- `bg-gradient-to-br from-purple-50 to-pink-100` (roxo/rosa)
- `bg-gradient-to-br from-gray-50 to-gray-100` (cinza)
- `bg-gradient-to-r from-blue-400 to-purple-500` (gradiente vibrante)

### 3. Card Principal (linha 44)

**Atual:**
```
bg-white rounded-2xl shadow-xl
```

**Alternativas:**
- `bg-gray-50` - Fundo levemente cinza
- `bg-blue-50` - Fundo azul claro
- `rounded-lg` - Bordas menos arredondadas
- `shadow-2xl` - Sombra mais forte

### 4. Inputs de Data (linhas 58 e 71)

**Atual:**
```
border-gray-300 focus:ring-indigo-500
```

**Alternativas:**
- `border-blue-300 focus:ring-blue-500` (azul)
- `border-green-300 focus:ring-green-500` (verde)
- `border-purple-300 focus:ring-purple-500` (roxo)

### 5. Card de Resultados (linha 90)

**Atual:**
```
bg-indigo-50 border-indigo-200
```

**Alternativas:**
- `bg-green-50 border-green-200` (verde)
- `bg-blue-50 border-blue-200` (azul)
- `bg-purple-50 border-purple-200` (roxo)

### 6. Mensagem de Erro (linha 84)

**Atual:**
```
bg-red-50 border-red-200 text-red-700
```

**Alternativas:**
- `bg-orange-50 border-orange-200 text-orange-700` (laranja)
- `bg-yellow-50 border-yellow-200 text-yellow-700` (amarelo)

## 🎯 Exemplo Prático: Mudar Botão para Verde

Substitua a linha 78 por:

```tsx
className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
```

## 📚 Referência de Cores Tailwind

Tailwind usa uma escala de 50-900 para cada cor:
- `50` - Mais claro
- `100-200` - Claro
- `300-400` - Médio-claro
- `500` - Médio (padrão)
- `600-700` - Médio-escuro
- `800-900` - Escuro

**Cores disponíveis:**
- `slate`, `gray`, `zinc`, `neutral`, `stone`
- `red`, `orange`, `amber`, `yellow`
- `lime`, `green`, `emerald`, `teal`, `cyan`
- `sky`, `blue`, `indigo`, `violet`, `purple`
- `fuchsia`, `pink`, `rose`

## 💡 Dica

Após fazer alterações, o Next.js recarrega automaticamente. Basta salvar o arquivo!

