const information = document.getElementById('info');

if (information) {
  information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
} else {
  console.log("HTML에 'info' ID를 가진 엘리먼트를 찾을 수 없습니다.");
}

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func();

const $btn = document.getElementById('send-message-btn');
const $responseEl = document.getElementById('response');

$btn.addEventListener('click', async () => {
  // window.electronAPI를 통해 메인 프로세스에 접근
  const response = await window.electronAPI.sendMessage('안녕, 메인!');
  $responseEl.innerText = response;
});

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