export class CurrencyConversion {

    id:number;
      from: String;
      to: String;
      quantity: number;
      conversionMultiple: number;
      totalCalculatedAmount: number;
      environment: String;
  
  
  constructor(res:any){
      this.id=res.id;
      this.from=res.from;
      this.to=res.to;
      this.quantity=res.quantity;
      this.conversionMultiple=res.conversionMultiple;
      this.totalCalculatedAmount=res.totalCalculatedAmount;
      this.environment=res.environment;
  }
  }