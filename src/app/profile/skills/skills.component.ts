import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../app.service';

declare var TweenMax: any;
declare var Sine: any;
declare var Linear: any;
@Component({
    selector: 'rb-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    constructor(public appService: AppService) { }
}
