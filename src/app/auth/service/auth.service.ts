import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../shared/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseUrl: string = 'http://localhost:3001/api';

  private subjectUser$: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjectloggedIn$: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/auth/register`, user);
  }

  login(credentials: {email: string, password: string}): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/auth/login`, credentials).pipe(
      tap((data) => {
        localStorage.setItem('token', data.token);
        this.subjectloggedIn$.next(true);
        this.subjectUser$.next(data);
      })
    )
  }

  isAuthenticated(): Observable<boolean> {
    return this.subjectloggedIn$.asObservable();
  }

  getUserLogged(): Observable<User> {
    return this.subjectUser$.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
    this.subjectloggedIn$.next(false);
    this.subjectUser$.next(null);
  }
}
