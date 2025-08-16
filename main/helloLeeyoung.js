import { ipcMain } from 'electron';

// IPC 핸들러를 설정하는 함수
export const helloLeeyoung = () => {
  ipcMain.handle('send-main-message', (event, message) => {
    console.log(`렌더러로부터 받은 메시지: ${message}`);
    return '안녕 이영이😆😆';
  });
}