-- Script AppleScript para criar aplicação macOS
-- Para usar: Abra o Script Editor, cole este código, salve como "Aplicação"

on run
	tell application "Terminal"
		activate
		set currentTab to do script "cd " & quoted form of POSIX path of (path to me as string) & " && if [ ! -d node_modules ]; then npm install; fi && npm run dev"
	end tell

	-- Aguardar e abrir navegador
	delay 3
	tell application "Safari"
		activate
		open location "http://localhost:3000"
	end tell
end run

