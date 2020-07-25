import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import { AppService } from '../../app.service';
import { posts } from './post-list';
declare var $: any;

@Component({
    selector: 'rb-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
    posts = posts;
    constructor(public appService: AppService) { }

    getTrimmedDescription(description) {
        description = description.replace(/src/g, 'title');
        description = description.replace(/img/g, 'span');
        return $(description).text().substr(0, 150) + '...';
    }

}
