const { contextBridge, ipcRenderer } = require("electron");

const exposeVersions = () => {
    contextBridge.exposeInMainWorld('versions', {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron,
        ping: () => ipcRenderer.invoke('ping')
        // we can also expose variables, not just functions
    });
}

module.exports = { exposeVersions };