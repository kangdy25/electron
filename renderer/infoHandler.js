export const setupInfoHandler = () => {
    const information = document.getElementById('info');
    
    if (information) {
      information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
    } else {
      console.log("HTML에 'info' ID를 가진 엘리먼트를 찾을 수 없습니다.");
    }
}