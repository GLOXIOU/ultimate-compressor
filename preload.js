const { contextBridge, ipcRenderer, shell } = require('electron');

contextBridge.exposeInMainWorld("electronAPI", {
  compressFile: (input, output) => ipcRenderer.invoke('compress-file', input, output),
});

contextBridge.exposeInMainWorld("electronAPI", {
  openExternal: (url) => shell.openExternal(url)
})