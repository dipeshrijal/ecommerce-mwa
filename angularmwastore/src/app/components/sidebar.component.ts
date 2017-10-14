import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul id="slide-out"
        class="side-nav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="../../assets/cover4.jpg">
          </div>
          <a href="#"><img class="circle"
                           src="../../assets/profile.jpeg"></a>
          <a href="#"><span class="white-text name">Dipesh Rijal</span></a>
          <a href="#"><span class="white-text email">drijal@mum.edu</span></a>
        </div>
      </li>
      <li><a href="#"
             class="waves-effect"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#"
             class="waves-effect"><i class="material-icons">computer</i>Second Link</a></li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect"
             href="#">Third Link With Waves</a></li>
    </ul>

  `
})
export class SidebarComponent {

}
