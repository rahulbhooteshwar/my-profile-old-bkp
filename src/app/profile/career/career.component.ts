import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'rb-career',
    templateUrl: './career.component.html',
    styles: []
})
export class CareerComponent implements OnInit {

    constructor(public appService: AppService) { }

    ngOnInit() {
    }

}
