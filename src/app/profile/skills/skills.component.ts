import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../app.service';

declare var TweenMax: any;
declare var Sine: any;
declare var Linear: any;
@Component({
    selector: 'rb-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

    constructor(public appService: AppService) { }

    ngOnInit() {
    }
    ngAfterViewInit() {
      // tslint:disable-block
      window['flow'] = function() {
        const sizes = ['s', 'm', 'l'];
        const container = document.getElementById('integration-list');
        const icons = document.querySelectorAll('#integration-list span');
        let resizeTimer;
        let w;
        let h;
        // debounce the re-init so it doesn't totally freak out while draging
        window.addEventListener('resize', resizeDebounce);
        function resizeDebounce() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(init, 100);
        }
        function init() {
          w = container.offsetWidth;
          h = container.offsetHeight;
          icons.forEach(function(icon, i) {
            let size = sizes[Math.ceil(Math.random() * 3) - 1];
            TweenMax.set(
              icon, {
                // attr: { class: size},
                y: R(50, h - 150),
                x: R(w, w + 50)
              }
            );
            animate(icon, i);
          });
        }
        // animate x and y values at different rates
        function animate(element, i) {
          TweenMax.to(
            element,
            R(110, 120),
            {
              x: -2000,
              ease: Linear.easeNone,
              repeat: -1,
              delay: -115 / icons.length * i
            }
          );
          TweenMax.to(
            element,
            R(3, 25),
            {
              y: '+=350',
              repeat: -1,
              yoyo: true,
              ease: Sine.easeInOut,
              delay: R(-25, -3)
            }
          );
        }
        function R(min, max) {
          return min + Math.random() * (max - min);
        }
        return {
          init
        };
// tslint:disable-next-line: align
      }().init();
    }

}
