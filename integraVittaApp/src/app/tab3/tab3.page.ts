import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pagamento : number;
  /*1: Ok
   *2: Próximo
   *3: Atrasado*/

  constructor() {
    this.pagamento = 1;
  }

}
