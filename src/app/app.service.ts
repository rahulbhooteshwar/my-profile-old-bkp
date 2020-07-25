import { Injectable } from '@angular/core';

declare var gtag;
@Injectable()
export class AppService {

    constructor() { }

    animate(event) {
        event.target.classList.add('pulse');
        setTimeout(() => {
            event.target.classList.remove('pulse');
        }, 1000);
    }
    emitAnalyticsEvent(data) {
        gtag('event', 'click', {
            event_category: data.eventCategory ? data.eventCategory : 'General',
            event_label: data.eventLabel
        });
    }

}
