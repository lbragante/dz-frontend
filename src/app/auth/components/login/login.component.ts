import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  formLogin: FormGroup = this.formBuilder.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(): void {
    const credentials = this.formLogin.value;
    this.authService.login(credentials).subscribe(
      (data) => {
        console.log('Usuário logado: ', data.user);
        console.log('Usuário logado com sucesso!');
        this.router.navigateByUrl('/');
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.error(this.errorMessage);
      }
    )
  }

}
