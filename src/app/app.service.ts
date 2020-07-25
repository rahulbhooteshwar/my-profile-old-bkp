import { Injectable } from '@angular/core';

declare var ga;
@Injectable()
export class AppService {

    constructor() { }

    animate(event) {
        event.target.classList.add('pulse');
        setTimeout(() => {
            event.target.classList.remove('pulse');
        }, 1000);
    }
    emitAnalyticsEvent(eventObject) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'link',
            eventAction: 'click',
            ...eventObject
        });
    }

}
