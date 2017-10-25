import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(user) {

    this.http.post('http://localhost:3000/users/login', user).subscribe(
      result => console.log(result)
    );


    // if (user.userName !== '' && user.password != '') { // {3}
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/']);
    // }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
