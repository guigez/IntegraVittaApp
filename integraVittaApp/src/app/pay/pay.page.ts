import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pay',
  templateUrl: 'pay.page.html',
  styleUrls: ['pay.page.scss']
})
export class PayPage implements OnInit{

  pagamento : number;
  /*1: Ok
   *2: Próximo
   *3: Atrasado*/

  constructor() {
    this.pagamento = 1;
  }
  
  ngOnInit() {
  }


}
