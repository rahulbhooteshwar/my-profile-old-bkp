import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../app.service';

declare var $: any;
declare var Typed: any;

@Component({
  selector: 'rb-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    function scroll() {
      const realHeight = $('.fakeScreen')[0].scrollHeight;
      $('.fakeScreen').scrollTop(realHeight);
    }
    const followMe = {
      email: 'rahul.bhooteshwar@gmail.com',
      medium: 'https://medium.com/@rahul.bhooteshwar',
      linkedIn: 'https://www.linkedin.com/in/rahul-bhooteshwar-29600179/',
      gitHub: 'https://github.com/rahulbhooteshwar'
    };
    const skills = {
      Interfacing: ['HTML5', 'CSS3', 'Bootstrap'],
      Programming: ['JS', 'TS', 'Java'],
      Frameworks: ['Angular', 'React', 'Vue', 'NodeJS', 'ExpressJS', 'Spring Boot'],
      Databases: ['MongoDB', 'MySQL'],
      Build: ['Gulp', 'Webpack'],
      'Version Control': ['Git', 'Github', 'GitLab', 'BitBucket'],
      'CI/CD': ['Bamboo', 'Jenkins'],
      'Cloud/Servers': ['AWS', 'Apache2', 'Nginx', 'Ubuntu', 'PCF']
    };
    // tslint:disable-next-line: no-unused-expression
    new Typed('.typed', {
      strings: [
        `
        \`<span class='command-pre'>Geeks-PC:~ Rahul$</span>\`
        profile display <span class='command-arg'>--name</span>
        \`<br/><span class='command-result name'>Rahul Bhooteshwar</span>\`
        \`<br/><span class='command-pre'>Geeks-PC:~ Rahul$</span>\`
        profile display <span class='command-arg'>--aboutme</span>
        \`<br/><em class='command-result about'>Full Stack Software Engineer<br/>Programming enthusiast, <br/>Technical Blogger, <br/>learning the concepts of cutting-edge technologies in Software Development.</em>\`
        \`<br/><span class='command-pre'>Geeks-PC:~ Rahul$</span>\`
        profile display <span class='command-arg'>--followme</span>
        \`<br/>
        <span class='command-result data'>
          <pre>${JSON.stringify(followMe, null, 4)}</pre>
        </span>
        \`
        \`<br/><span class='command-pre'>Geeks-PC:~ Rahul$</span>\`
        profile display <span class='command-arg'>--skills</span>
        \`<br/>
        <span class='command-result data'>
          <pre>${JSON.stringify(skills, null, 4)}</pre>
        </span>
        \`
        \`<br/><span class='command-pre'>Geeks-PC:~ Rahul$</span>\`
        `
      ],
      typeSpeed: 50,
      fadeOut: true,
      fadeOutDelay: 1000,
      loop: true,
      onStringTyped: () => {
        scroll();
      }
    });
  }

}
