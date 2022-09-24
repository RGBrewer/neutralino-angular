import { Injectable } from '@angular/core';

@Injectable()
export class NeutralinoService {

  // The Neutralino api is attached to the window via main.js
  private get neutralino() : any {
    return window.neutralino;
  }

  public close() {
    this.neutralino.app.exit()
  }

  public maximize() {
    this.neutralino.window.maximize()
  }
}
