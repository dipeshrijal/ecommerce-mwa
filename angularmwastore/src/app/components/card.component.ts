import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="col s12 m3"
         *ngFor="let image of images">
      <div class="card">
        <div class="card-image">
          <img src="{{image}}">
          <span class="card-title">{{title}}</span>
          <a href="#modal1"
             class="edit btn-floating halfway-fab waves-effect waves-light blue darken-3 modal-trigger">
            <i class="material-icons">create</i>
          </a>
          <a href="#"
             class="btn-floating halfway-fab waves-effect waves-light red darken-3">
            <i class="material-icons">delete</i>
          </a>
        </div>
        <div class="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of information. I am convenient because I
            require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../app.component.css']

})
export class CardComponent {
  title = 'title';
  images = [
    '../../assets/cover1.jpg',
    '../../assets/cover2.jpg',
    '../../assets/cover3.jpg',
    '../../assets/cover4.jpg',
    '../../assets/cover5.jpg',
    '../../assets/cover6.jpg',
    '../../assets/cover7.jpg',
    '../../assets/cover.jpg',
  ];
}
