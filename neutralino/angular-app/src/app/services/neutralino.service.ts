import { Injectable } from '@angular/core';

@Injectable()
export class NeutralinoService {

  // The Neutralino api is attached to the window via main.js
  public get api() : any {
    return window.neutralino;
  }

  public maximize() {
    this.api.window.maximize()
  }
}
