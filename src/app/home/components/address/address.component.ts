import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/shared/models/Address.model';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  errorMessage: string = '';
  successMessage: string = '';

  formAddress: FormGroup = this.formBuilder.group({
    'zip': ['', Validators.required],
    'street': ['', Validators.required],
    'number': ['', [Validators.required]],
    'complement': [''],
    'district': ['', [Validators.required]],
    'city': ['', [Validators.required]],
    'state': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveAddress(): void {
    let address: Address = {
      ...this.formAddress.value
    }
    this.addressService.saveAddress(address).subscribe(
      (address) => {
        this.successMessage = 'Endereço cadastrado com sucesso'
        console.log(this.successMessage);
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.error(this.errorMessage);
      }
    )
  }

}
