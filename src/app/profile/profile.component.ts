import {Component, OnInit, ViewChild} from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;

  constructor() { }

  ngOnInit() {


    const body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
  }
  ngAfterViewInit() {
    const target = this.typewriterElement.nativeElement;
    const target2 = this.typewriterElement2.nativeElement;
    const writer = new Typewriter(target, {
      typeColor: 'white',
      typeSpeed: 80,
      deleteSpeed: 80,
      cursorColor: 'white'
    })
    const writer2 = new Typewriter(target2, {
      typeColor: '#f9D349',
      typeSpeed: 80,
      deleteSpeed: 80,
      cursorColor: 'white'
    })
    writer
        .type('Developper')
        .removeCursor()
        .then(writer2.start.bind(writer2))
        .start()

    writer2
        .type('Front ')
        .rest(1500)
        .clear()
        .type('Back ')
        .rest(1500)
        .clear()
        .type('Full Stack ')
        .rest(1500)
        .clear()
        .then(writer.start.bind(writer))
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
