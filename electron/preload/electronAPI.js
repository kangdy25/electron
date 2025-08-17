const { contextBridge, ipcRenderer } = require("electron");

const exposeElectronAPI = () => {
    contextBridge.exposeInMainWorld('electronAPI', {
      sendMessage: (message) => ipcRenderer.invoke('send-main-message', message),
      openFile: () => ipcRenderer.invoke('dialog:openFile'),
    });
}

module.exports = { exposeElectronAPI };