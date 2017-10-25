import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  user = new BehaviorSubject<any>(null);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(user) {
    this.http.post('http://localhost:3000/users/login', user).subscribe(
      user => {
        if (Object.keys(user).length === 1) {
          // data => localStorage.setItem('token', data['token']),
          //   error => console.log(error));
          // localStorage.setItem('loggedin', 'true');
          this.loggedIn.next(true);
          this.user.next(user[0]);
          // localStorage.setItem('token', user['token']);
          localStorage.setItem('token', "hero");
          this.router.navigate(['/dashboard']);
        } else {
          console.log('error');
        }

      },
      error => console.log(error)
    );
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
