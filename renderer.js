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

const btn = document.getElementById('send-message-btn');
const responseEl = document.getElementById('response');

btn.addEventListener('click', async () => {
  // window.electronAPI를 통해 메인 프로세스에 접근
  const response = await window.electronAPI.sendMessage('안녕, 메인!');
  responseEl.innerText = response;
});