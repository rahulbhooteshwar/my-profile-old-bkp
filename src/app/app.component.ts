import { Component, AfterViewInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'rb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit() {
        setTimeout(() => {
            window['initVendorFeature']();
        }, 1000);
    }
}
