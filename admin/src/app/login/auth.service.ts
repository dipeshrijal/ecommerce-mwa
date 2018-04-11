import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  loggedIn = new BehaviorSubject<boolean>(false);
  user = new BehaviorSubject<any>(null);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(user) {
    // console.log(user);
    // this.http.post('http://localhost:3000/authenticate', user).subscribe(
    //   user => {
    //     console.log(user);
    //   }
    //
    // );
    return this.http.post('http://localhost:3000/authenticate', user).subscribe(
      user => {
        if (user['token']) {
          this.loggedIn.next(true);
          this.user.next(user['user']);
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', user['token']);
          this.router.navigate(['/dashboard']);
        } else {
          return "Invalid username or password";
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
