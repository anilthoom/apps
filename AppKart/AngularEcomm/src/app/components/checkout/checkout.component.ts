import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/common/country';
import { State } from 'src/app/common/state';
import { UtilityService } from 'src/app/services/utility.service';
import { CustomValidator } from 'src/app/validators/custom-validator';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;
  
  totalPrice: number =0;
  totalQuantity: number =0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  countries: Country[] = [];

  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];


  constructor(private formBuilder: FormBuilder,
              private utilityService: UtilityService) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        city: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        state: new FormControl('', [Validators.required]),
        country:new FormControl('', [Validators.required]),
        zipCode:new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace])
      }),
      billingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        city: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        zipCode: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace])
      }),
      creditCard: this.formBuilder.group({
        cardType: new FormControl('', [Validators.required]),
        nameOnCard: new FormControl('', [Validators.required, Validators.minLength(2), CustomValidator.nonOnlyWhitespace]),
        cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
        securityCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
        expirationMonth:[''],
        expirationYear:['']
      })
    });

    //populate months 
    const startMonth: number = new Date().getMonth()+1;
    this.utilityService.getCreditCardMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data;
      }
    );
    //populate years
    this.utilityService.getCreditCardYears().subscribe(
      data => {
        this.creditCardYears = data;
      }
    );

    //populate countries
    this.utilityService.getCountries().subscribe(
      data => {
        this.countries = data;
      }
    );
  }
  onSubmit(){
    console.log("Check out triggered");
    console.log(this.checkoutFormGroup.get('customer').value);

    if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();
    }
  }
  
  get firstName(){return this.checkoutFormGroup.get('customer.firstName');}
  get lastName(){return this.checkoutFormGroup.get('customer.lastName');}
  get email(){return this.checkoutFormGroup.get('customer.email');}
  
  get shippingAddressStreet(){return this.checkoutFormGroup.get('shippingAddress.street');}
  get shippingAddressCity(){return this.checkoutFormGroup.get('shippingAddress.city');}
  get shippingAddressState(){return this.checkoutFormGroup.get('shippingAddress.state');}
  get shippingAddressCountry(){return this.checkoutFormGroup.get('shippingAddress.country');}
  get shippingAddressZipCode(){return this.checkoutFormGroup.get('shippingAddress.zipCode');}

  get billingAddressStreet(){return this.checkoutFormGroup.get('billingAddress.street');}
  get billingAddressCity(){return this.checkoutFormGroup.get('billingAddress.city');}
  get billingAddressState(){return this.checkoutFormGroup.get('billingAddress.state');}
  get billingAddressCountry(){return this.checkoutFormGroup.get('billingAddress.country');}
  get billingAddressZipCode(){return this.checkoutFormGroup.get('billingAddress.zipCode');}

  get creditCardType(){return this.checkoutFormGroup.get('creditCard.cardType');}
  get creditCardNameOnCard(){return this.checkoutFormGroup.get('creditCard.nameOnCard');}
  get creditCardNumber(){return this.checkoutFormGroup.get('creditCard.cardNumber');}
  get creditCardSecurityCode(){return this.checkoutFormGroup.get('creditCard.securityCode');}


  copyShippingAddToBillingAdd(event){
    if(event.target.checked){
      this.checkoutFormGroup.controls.billingAddress
            .setValue(this.checkoutFormGroup.controls.shippingAddress.value);

      this.billingAddressStates = this.shippingAddressStates;
    }
    else{
      this.checkoutFormGroup.controls.billingAddress.reset();
      this.billingAddressStates = [];
    }
  }

  handleMonthsAndYears(){
    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup.value.expirationYear)

    let startMonth: number;
    if(currentYear === selectedYear){
      startMonth = new Date().getMonth() + 1;
    }
    else{
      startMonth = 1;
    }

    this.utilityService.getCreditCardMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data;
      }
    )
  }

  getStates(formGroupName: string){
    const formGroup = this.checkoutFormGroup.get(formGroupName);

    const countryCode = formGroup.value.country.code;
    const countryName = formGroup.value.country.name;

    this.utilityService.getStates(countryCode).subscribe(
      data => {
        if( formGroupName === 'shippingAddress'){
          this.shippingAddressStates = data;
        }
        else{
          this.billingAddressStates = data;
        }

        formGroup.get('state').setValue(data[0]);
      }
    )
  }
}
