import webbrowser
import pyautogui
import time
import webbrowser, os


webbrowser.open("https://ava.catolica.edu.br/d2l/login")
time.sleep(3)
pyautogui.press('Tab')
time.sleep(3)
pyautogui.press('enter')
time.sleep(5)   
webbrowser.open("https://cursos.alura.com.br/dashboard")

vscode ="D:\ARQUIVOS DE PROGRAMAS (X86)\Microsoft VS Code\code.exe"
webbrowser.open(os.path.realpath(vscode))
print("fim")
