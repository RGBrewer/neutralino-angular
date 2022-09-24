import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { NeutralinoService } from './services/neutralino.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(
    private neutralinoService: NeutralinoService) {
  }

  ngOnInit() {
    // Two ways of interacting with the Neutralino API ...

    // A. use the service to access the underlying api directly
    this.neutralinoService.api.window.setTitle('Hello World!')

    // B. Wrap functionality within the service
    this.neutralinoService.maximize()
  }
}
