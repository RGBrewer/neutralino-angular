import { Injectable } from '@angular/core';

@Injectable()
export class NeutralinoService {

  private get neutralino() : any {
    return window.neutralino;
  }

  public close() {
    this.neutralino.app.exit()
  }
}
