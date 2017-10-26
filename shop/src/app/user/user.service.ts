import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";

@Injectable()
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(true);
  user = new BehaviorSubject<any>(null);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private http: HttpClient,
              private router: Router) {
  }

  authenticate(user) {

    return this.http.post('http://localhost:3000/authenticate', user).subscribe(
      user => {
        if(user['token']) {
          this.loggedIn.next(true);
          // this.user.next(user);
          localStorage.setItem('token', user['token']);
          this.router.navigate(['/']);
        }
      }

    );
  }

  createUser(user) {
    return this.http.post('http://localhost:3000/users', user);
  }
}
