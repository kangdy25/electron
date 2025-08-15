import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // path.join 대신 path.join을 사용하도록 수정
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOS에서 Dock 아이콘을 클릭했을 때 창이 없으면 새 창을 생성합니다.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // macOS가 아닌 다른 플랫폼에서는 모든 창이 닫히면 애플리케이션을 종료합니다.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});