import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

import * as _ from 'lodash';
declare var $: any;

@Component({
    selector: 'rb-blog',
    templateUrl: './blog.component.html',
    styles: []
})
export class BlogComponent implements OnInit {
    loadingPosts = false;
    posts = [];
    constructor(public blogService: BlogService) { }

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
        return $(description).text().substr(0, 150) + "...";
    }

}
