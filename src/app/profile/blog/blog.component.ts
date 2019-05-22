import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

import * as _ from 'lodash';
import { AppService } from '../../app.service';
declare var $: any;

@Component({
    selector: 'rb-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    loadingPosts = false;
    posts = [];
    constructor(public blogService: BlogService, public appService: AppService) { }

    ngOnInit() {
        this.loadingPosts = true;
        this.blogService.getBlogPosts().subscribe((result) => {
            if (result && result.items) {
                this.posts = _.filter(result.items, { author: 'Rahul Bhooteshwar' });
                this.posts = _.sortBy(this.posts, ['pubDate']).reverse().slice(0, 5);
            }
            this.loadingPosts = false;
        }, () => {
            this.loadingPosts = false;
        });
    }

    getTrimmedDescription(description) {
        description = description.replace(/src/g, "title");
        description = description.replace(/img/g, "span");
        return $(description).text().substr(0, 150) + "...";
    }


}
