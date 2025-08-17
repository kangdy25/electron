import { useState } from 'react'
import './App.css'

function App() {
  const [fileContent, setFileContent] = useState("");
  const [message, setMessage] = useState("");
  const [pingpong, setPingpong] = useState("");

  const handleOpenFile = async () => {
    const content = await window.electronAPI.openFile();
    if (content) setFileContent(content);
  }

  const handleMessage = async () => {
    const response = await window.electronAPI.sendMessage('안녕, 메인!!');
    setMessage(response);
  }

  const handlePingpong = async () => {
    const response = await window.versions.ping();
    setPingpong(response);
  }

  return (
    <div>
      <section>
        <h1>안녕하세요, Electron!</h1>
        <h3>이것은 Electron으로 만든 첫 번째 데스크톱 앱입니다.</h3>
        <p>{`This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`}</p>
        <div>
          <button onClick={handlePingpong}>핑퐁???</button>
          <p>{pingpong}</p>
        </div>
      </section>
      <section>
        <h2>프로세스간 통신을 구현해볼까요?</h2>
        <button onClick={handleMessage}>메인 프로세스에게 메시지 보내기</button>
        <p>메인 프로세스의 응답: <strong>{message}</strong></p>
      </section>
      <section>
        <h2>파일 시스템 접근하기</h2>
        <button onClick={handleOpenFile}>파일 열기</button>
        <br/>
        <textarea 
          id="file-content" 
          rows="10" cols="50" 
          placeholder="여기에 파일 내용이 표시됩니다."
          value={fileContent} readOnly></textarea>
      </section>
    </div>
  )
}

export default App
