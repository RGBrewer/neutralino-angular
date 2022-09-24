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
    this.neutralinoService.maximize()
  }
}
