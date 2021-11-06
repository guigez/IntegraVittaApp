import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';


@Component({
  selector: 'app-pay',
  templateUrl: 'pay.page.html',
  styleUrls: ['pay.page.scss']
})
export class PayPage implements OnInit{

  status : number;
  pagamentos : Array<any> = new Array<any>()
  monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
  /*1: Ok
   *2: Próximo
   *3: Atrasado*/

  constructor(private restService: RestService) {
    this.status = 1;
  }
  
  ngOnInit() {
    this.restService.listarPagamentos().then(data => data.subscribe( res => {
      console.log

      res.data.pagamentos.forEach((e : any) => {
        this.pagamentos.push({
          datOper : e.datOper,
          mes : this.monthNames[new Date(e.datOper).getMonth()]
        })
      });
    }));
  }


}
