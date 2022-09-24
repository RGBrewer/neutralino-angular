
class NeutralinoApp {
  // Inject the Neutralino instance
  constructor(neutralino) {
    this.neutralino = neutralino;
    this.neutralino.init();
  }

  setTray = () => {
    if(NL_MODE != "window") {
      console.log("INFO: Tray menu is only available in the window mode.");
      return;
    }
    let tray = {
      icon: "/resources/assets/neutralino/icons/trayIcon.png",
      menuItems: [
        {id: "VERSION", text: "Get version"},
        {id: "SEP", text: "-"},
        {id: "QUIT", text: "Quit"}
      ]
    };
    this.neutralino.os.setTray(tray);
  }

  onTrayMenuItemClicked = (event) => {
    switch(event.detail.id) {
      case "VERSION":
        this.neutralino.os.showMessageBox("Version information",
          `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
        break;
      case "QUIT":
        this.onWindowClose();
        break;
    }
  }

  onWindowClose = () => {
    this.neutralino.app.exit()
  }
};

const myApp = new NeutralinoApp(Neutralino)
window.neutralino = Neutralino

console.log(`${NL_APPID} is running on port ${NL_PORT}  inside ${NL_OS} server: v${NL_VERSION} . client: v${NL_CVERSION}`)

Neutralino.events.on("trayMenuItemClicked", myApp.onTrayMenuItemClicked);
Neutralino.events.on("windowClose", myApp.onWindowClose);
Neutralino.events.on("ready", () => {
  if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    myApp.setTray()
  }
})
