import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class BlogService {

    constructor(public http: HttpClient) { }

    getBlogPosts(): Observable<any> {
        return this.http.get('https://api.rss2json.com/v1/api.json', { params: { rss_url: 'https://medium.com/feed/learnwithrahul' } });
    }

}
