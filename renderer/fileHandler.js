export const setupFileHandler = () => {
    const $openFileBtn = document.getElementById('open-file-btn');
    const $fileContent = document.getElementById('file-content');

    $openFileBtn.addEventListener('click', async () => {
        // 메인 프로세스에 파일 열기 요청을 보냅니다.
        // ipcRenderer.invoke 대신, 미리 정의한 electronAPI를 사용합니다.
        const content = await window.electronAPI.openFile();
        if (content) {
            $fileContent.value = content;
        }
    });
}