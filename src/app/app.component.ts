import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConversion } from './CurrencyConversion';
import { HttpClient } from '@angular/common/http';

export interface Country {
  value: string;
  viewValue: string;
  symbol: string;
  img: string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isdisable:boolean=true;
  title = 'currencyconversion';
  currjson: any = [];
  convertval:number=0.0; 

  public quantity:number=0 ;
  
  ngOnInit(){
  }

  from = 'INR';
  to = 'USD';
  result: number =1;

  public selectedCountry1 = {value: 'USD', viewValue:'US Dollar',symbol:'$' ,img: './assets/flags/united-states-of-america-flag-png-large.png'};
  public selectedCountry2 = {value: 'USD', viewValue:'US Dollar',symbol:'$' ,img: './assets/flags/united-states-of-america-flag-png-large.png'};

  country: Country[] = [
    { value: 'INR', viewValue: ' Indian Rupee', symbol:'₹', img: './assets/flags/India.png' },
    { value: 'USD', viewValue: ' US Dollar', symbol:'$', img: './assets/flags/united-states-of-america-flag-png-large.png' },
    { value: 'EUR', viewValue: ' Euro', symbol:'€', img: './assets/flags//europe-flag-jpg-xl-1536x1024.jpg' },
    { value: 'AUD', viewValue: ' Australian Dollar',  symbol:'$', img: './assets/flags/Australian.jpg' },
    { value: 'GBP', viewValue: ' British Pound', symbol:'£', img: './assets/flags/united-kingdom-flag-png-large.png' },
    { value: 'CAD', viewValue: ' Canadian Dollar',symbol:'$', img: './assets/flags/canada-flag-png-large.png' },
    { value: 'JPY', viewValue: ' Japanese Yen',symbol:'¥', img: './assets/flags/japan-flag-png-large.png' },
    { value: 'NZD', viewValue: ' New Zealand Dollar',symbol:'$', img: './assets/flags/new-zealand-flag-png-large.png' },
    { value: 'CHF', viewValue: ' Swiss Franc',symbol:'CHF', img: './assets/flags/switzerland-flag-png-large.png' },
    { value: 'ZAR', viewValue: ' South African Rand',symbol:'R', img: './assets/flags/south-africa-flag-png-large.png' },
    { value: 'RUB', viewValue: ' Russian Ruble',symbol:'₽', img: './assets/flags/russia-flag-png-large.png' },
    { value: 'BGN', viewValue: ' Bulgarian Lev', symbol:'лв',img: './assets/flags/bulgaria-flag-png-large.png' },
    { value: 'SGD', viewValue: ' Singapore Dollar',symbol:'$', img: './assets/flags/singapore-flag-png-large.png' },
    { value: 'HKD', viewValue: ' Hong Kong Dollar',symbol:'$', img: './assets/flags/hongkong-flag-jpg-xl-1536x1024.jpg' },
    { value: 'SEK', viewValue: ' Swedish Krona', symbol:'kr',img: './assets/flags/sweden-flag-png-large.png' },
    { value: 'THB', viewValue: ' Thai Baht',symbol:'฿', img: './assets/flags/thailand-flag-png-large.png' },
    { value: 'HUF', viewValue: ' Hungarian Forint',symbol:'Ft', img: './assets/flags/hungary-flag-png-large.png' },
    { value: 'CNY', viewValue: ' Chinese Yuan Renminbi',symbol:'¥', img: './assets/flags/china-flag-png-large.png' },
    { value: 'NOK', viewValue: ' Norwegian Krone', symbol:'kr',img: './assets/flags/norway-flag-png-large.png' },
    { value: 'MXN', viewValue: ' Mexican Peso',symbol:'$', img: './assets/flags/mexico-flag-png-large.png' },
    { value: 'DKK', viewValue: ' Danish Krone', symbol:'kr',img: './assets/flags/denmark-flag-png-large.png' },
    { value: 'MYR', viewValue: ' Malaysian Ringgit',symbol:'RM', img: './assets/flags/malaysia-flag-png-large.png' },
  ];


  tocountry(country:any){
    if(country == 'from'){
      this.from = this.selectedCountry1.value;
      
      console.log(this.from);
    }else{
      this.to = this.selectedCountry2.value;
      
      console.log(this.to);
    }
  }

constructor(private currency: CurrencyapidataService, private http: HttpClient){}

interchange(){
  let temp;
  temp = this.to;
  this.to = this.from;
  this.from = temp;
  this.convert();

  // console.log(this.selectedCountry1);
  // console.log(this.selectedCountry2);
}
convert(){
  console.log(this.quantity);
//  console.log(this.base)
//  console.log(this.cont2)
this.isdisable = false;
this.currency.getcurrencydata(this.quantity,this.from,this.to).subscribe(data => {
console.log(data)
let currencyConversion: CurrencyConversion = new CurrencyConversion(data);
 this.result=currencyConversion.totalCalculatedAmount;
   this.currjson = JSON.stringify(data);
   this.result=currencyConversion.totalCalculatedAmount;
   this.currjson = JSON.stringify(data);
   this.result = data;
  //console.log(this.currjson);
  this.currjson = JSON.parse(this.currjson)
    console.log(this.currjson);

    if (this.to == 'USD'){
    this.result = this.currjson.rates.USD 
    }

    if (this.to == 'INR'){
      this.result = this.currjson.rates.INR 
      }

      if (this.to == 'EUR'){
        this.result = this.currjson.rates.EUR * this.quantity
        }
        if (this.to == 'AUD'){
          this.result = this.currjson.rates.AUD * this.quantity
          }
          if (this.to == 'GBP'){
            this.result = this.currjson.rates.GBP * this.quantity
            }
            if (this.to == 'CAD'){
              this.result = this.currjson.rates.CAD * this.quantity
              }
              if (this.to == 'JPY'){
                this.result = this.currjson.rates.JPY * this.quantity
                }
                if (this.to == 'NZD'){
                  this.result = this.currjson.rates.NZD * this.quantity
                  }
                  if (this.to == 'CHF'){
                    this.result = this.currjson.rates.CHF * this.quantity
                    }
                    if (this.to == 'ZAR'){
                      this.result = this.currjson.rates.ZAR * this.quantity
                      }
                      if (this.to == 'RUB'){
                        this.result = this.currjson.rates.RUB * this.quantity
                        }

                        if (this.to == 'BGN'){
                          this.result = this.currjson.rates.BGN * this.quantity
                          }

                          if (this.to == 'SGD'){
                            this.result = this.currjson.rates.SGD * this.quantity
                            }
                            if (this.to == 'HKD'){
                              this.result = this.currjson.rates.HKD * this.quantity
                              }
                              if (this.to == 'SEK'){
                                this.result = this.currjson.rates.SEK * this.quantity
                                }
                                if (this.to == 'THB'){
                                  this.result = this.currjson.rates.THB * this.quantity
                                  }
                                  if (this.to == 'HUF'){
                                    this.result = this.currjson.rates.HUF * this.quantity
                                    }
                                    if (this.to == 'CNY'){
                                      this.result = this.currjson.rates.CNY * this.quantity
                                      }
                                      if (this.to == 'NOK'){
                                        this.result = this.currjson.rates.NOK * this.quantity
                                        }
                                        if (this.to == 'MXN'){
                                          this.result = this.currjson.rates.MXN * this.quantity
                                          }
                                          if (this.to == 'DKK'){
                                            this.result = this.currjson.rates.DKK * this.quantity
                                            }
                                            if (this.to == 'MYR'){
                                              this.result = this.currjson.rates.MYR * this.quantity
                                              }
                                                                                                                        
                                                                                                                                    
                                                                              
                                                       

})
}

}