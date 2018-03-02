import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'rb-favorites',
    templateUrl: './favorites.component.html',
    styles: []
})
export class FavoritesComponent implements OnInit {

    constructor(public appService: AppService) { }

    ngOnInit() {
    }

}
