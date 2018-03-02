import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'rb-intro',
    templateUrl: './intro.component.html',
    styles: []
})
export class IntroComponent implements OnInit {

    constructor(public appService: AppService) { }

    ngOnInit() {
    }

}
