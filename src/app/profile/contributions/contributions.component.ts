import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

}
