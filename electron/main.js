import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import { pingPong } from './main/pingPong.js';
import { helloLeeyoung } from './main/helloLeeyoung.js';
import { fileRead } from './main/fileRead.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VITE_DEV_SERVER_URL = 'http://localhost:5173';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    // 개발 모드 → Vite dev server 사용
    win.loadURL(VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    // 배포 모드 → 빌드된 dist/index.html 사용
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
};

app.whenReady().then(() => {
  pingPong();
  helloLeeyoung();
  fileRead();
  
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