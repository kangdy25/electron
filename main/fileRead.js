import { ipcMain, dialog } from "electron";
import fs from "fs/promises"

export const fileRead = () => {
  // 'dialog:openFile' 채널의 메시지를 받으면
    ipcMain.handle('dialog:openFile', async () => {
      // 다이얼로그를 띄워 파일 선택을 요청합니다.
      const { canceled, filePaths } = await dialog.showOpenDialog();
      if (canceled) {
        return; // 사용자가 취소하면 종료
      } else {
        const filePath = filePaths[0];
        // Node.js의 'fs' 모듈을 사용해 파일을 읽습니다.
        const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
        return fileContent;
      }
    });
}