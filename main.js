"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
function createWindow() {
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        height: 150,
        width: 200
    });
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
    mainWindow.webContents.openDevTools();
}
electron_1.app.on("ready", function () {
    createWindow();
    electron_1.app.on("activate", function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
