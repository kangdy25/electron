export const setupMessageHanlder = () => {
    const $btn = document.getElementById('send-message-btn');
    const $responseEl = document.getElementById('response');

    $btn.addEventListener('click', async () => {
        // window.electronAPI를 통해 메인 프로세스에 접근
        const response = await window.electronAPI.sendMessage('안녕, 메인!');
        $responseEl.innerText = response;
    });
}