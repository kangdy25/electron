import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section>
        <h1>안녕하세요, Electron!</h1>
        <p>이것은 Electron으로 만든 첫 번째 데스크톱 앱입니다.</p>
      </section>
      <section>
        <button id="send-message-btn">메인 프로세스에게 메시지 보내기</button>
        <p>메인 프로세스의 응답: <strong id="response"></strong></p>
        <p id="info"></p>
      </section>
      <section>
        <h2>파일 시스템 접근하기</h2>
        <button id="open-file-btn">파일 열기</button>
        <br/>
        <textarea id="file-content" rows="10" cols="50" placeholder="여기에 파일 내용이 표시됩니다."></textarea>
      </section>
    </div>
  )
}

export default App
