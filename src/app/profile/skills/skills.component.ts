import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'rb-skills',
    templateUrl: './skills.component.html',
    styles: []
})
export class SkillsComponent implements OnInit {

    constructor(public appService: AppService) { }

    ngOnInit() {
    }

}
