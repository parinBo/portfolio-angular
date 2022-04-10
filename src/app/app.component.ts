import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100px)',opacity:0 }),
        animate('1s'),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'myPort-angular';
  constructor(){
    window.addEventListener("scroll", (event)=>{
      const sec1 = document.querySelector('#sec1');
      const sec2 = document.querySelector('#sec2');
      const sec3 = document.querySelector('#sec3');
      console.log(window.pageYOffset,sec2!.clientHeight,sec2!.scrollHeight)

      // if (window.pageYOffset < 300 ) {
      //   document.querySelector('.fade-X')?.classList.add('is-visible')
      // } else {
      //   document.querySelector('.fade-X')?.classList.remove('is-visible')
      // }
      if (window.pageYOffset > 300 && window.pageYOffset < 700 ) {
        sec2!.classList.add('is-visible');
      } else {
        sec2!.classList.remove('is-visible');
      }
      if (window.pageYOffset > 670 ) {
        sec3!.classList.add('is-visible');
      } else {
        sec3!.classList.remove('is-visible');
      }
    });
  }

  sec(){
    document.querySelector('#sec4')?.scrollIntoView()
  }
}
