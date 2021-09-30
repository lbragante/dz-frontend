import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = '';

  formRegister: FormGroup = this.formBuilder.group({
    'firstName': ['', Validators.required],
    'lastName': ['', Validators.required],
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

  registerUser(): void {
    let user: User = {
      ...this.formRegister.value,
      password: this.formRegister.value.password
    }
    this.authService.registerUser(user).subscribe(
      (user) => {
        console.log('Usuário cadastrado com sucesso!', user);
        this.router.navigateByUrl('/auth/login');
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.error(this.errorMessage);
      }
    )
  }

}
