# Weeks Calculator

A modern web application and desktop app to calculate years and weeks between two dates. Built with Next.js, React, TypeScript, and Electron.

## ✨ Features

- 🎨 Beautiful, modern UI with responsive design
- 📅 Calculate years and weeks between any two dates
- 💻 Available as both web app and desktop application (Electron)
- 🐍 Includes Python script for command-line usage
- ⚡ Fast and lightweight
- 📱 Mobile-friendly interface

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.7+ (for Python script)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lostan/weeks-calculator.git
cd weeks-calculator
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the Next.js application:

```bash
npm run build
npm start
```

### Desktop Application (Electron)

Run Electron app in development mode:

```bash
npm run electron:dev
```

Build Electron desktop application:

```bash
npm run electron:build
```

This will create distributable packages in the `dist/` folder.

## 📖 Usage

### Web Application

1. Open the application in your browser
2. Enter a start date (defaults to 1983-12-23)
3. Enter an end date
4. Click "Calculate" to see the results
5. View the calculated years, weeks, and formatted output (Row: X Week: Y)

### Python Script

Run the Python calculator script:

```bash
python calculator.py
```

Enter the end date when prompted (format: YYYY-MM-DD).

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Desktop**: Electron
- **State Management**: React Hooks
- **URL State**: nuqs
- **Build Tool**: electron-builder

## 📁 Project Structure

```
weeks-calculator/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── utils/
│       └── calculator.ts  # Calculation logic
├── electron/              # Electron main process
│   └── main.js           # Electron entry point
├── calculator.py          # Python CLI calculator
├── package.json           # Node.js dependencies
└── README.md             # This file
```

## 🧮 Calculation Logic

The calculator:
1. Calculates the difference in days between two dates
2. Converts days to years (using 365 days per year)
3. Calculates remaining weeks from the fractional year part
4. Displays results as "Row: {years+1} Week: {weeks}"

## 📝 Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js app for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run electron` - Run Electron app (development)
- `npm run electron:dev` - Run Electron app (development)
- `npm run electron:build` - Build Electron desktop app
- `npm run electron:pack` - Package Electron app without installer

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with modern web technologies for a simple and efficient date calculation experience.
