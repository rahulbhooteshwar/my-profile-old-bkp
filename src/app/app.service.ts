import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    constructor() { }

    animate(event) {
        event.target.classList.add('pulse');
        setTimeout(() => {
            event.target.classList.remove('pulse');
        }, 1000);
    }

}
