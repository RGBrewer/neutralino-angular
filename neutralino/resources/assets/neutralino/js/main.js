

Neutralino.init();

myApp = {
  setTray: () => {
    if(NL_MODE != "window") {
      console.log("INFO: Tray menu is only available in the window mode.");
      return;
    }
    let tray = {
      icon: "/resources/icons/trayIcon.png",
      menuItems: [
        {id: "VERSION", text: "Get version"},
        {id: "SEP", text: "-"},
        {id: "QUIT", text: "Quit"}
      ]
    };
    Neutralino.os.setTray(tray);
  },
  onTrayMenuItemClicked: (event) => {
    switch(event.detail.id) {
      case "VERSION":
        Neutralino.os.showMessageBox("Version information",
          `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
        break;
      case "QUIT":
        Neutralino.app.exit();
        break;
    }
  },
  onWindowClose: () => {
    Neutralino.app.exit();
  }
};

console.log(`${NL_APPID} is running on port ${NL_PORT}  inside ${NL_OS} server: v${NL_VERSION} . client: v${NL_CVERSION}`)

// Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
// Neutralino.events.on("windowClose", onWindowClose);

Neutralino.events.on("trayMenuItemClicked", myApp.onTrayMenuItemClicked);
Neutralino.events.on("windowClose", myApp.onWindowClose);
Neutralino.events.on("ready", () => {
  if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    window.myApp.setTray();
  }
})
