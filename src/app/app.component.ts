import { Component, AfterViewInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
declare var fullpage: any;

@Component({
    selector: 'rb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit() {
// tslint:disable-next-line: no-unused-expression
      new fullpage('#fullpage', {
        scrollingSpeed: 800,
        scrollBar: true
      });
    }
}
