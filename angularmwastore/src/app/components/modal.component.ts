import {Component} from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <!-- Modal Structure -->
    <div id="modal1"
         class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Form</h4>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="first_name"
                     type="text"
                     class="validate">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="last_name"
                     type="text"
                     class="validate">
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">lock</i>
              <input id="password"
                     type="text"
                     class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input id="email"
                     type="text"
                     class="validate">
              <label for="email">Email</label>
            </div>
          </div>


        </form>
      </div>
      <div class="modal-footer">
        <button class="btn waves-effect waves-light right">Submit
          <i class="material-icons right">send</i>
        </button>
        <button class="modal-action modal-close btn-flat waves-effect waves-red right">close
          <i class="material-icons right">close</i>
        </button>
      </div>
    </div>

    <!--Modal Trigger-->
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large waves-effect waves-light red modal-trigger"
         href="#modal1">
        <i
          class="material-icons">add
        </i>
      </a>
    </div>
  `,
})
export class ModalComponent {
}
