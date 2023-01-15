import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioWebAngular';



  constructor(public OpenEditExp: MatDialog){    
      window.onscroll = function(){
        scrollFunction()
      };
      function scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
          document.getElementById('navbar')?.classList.remove('none-full-lg-screen');
        }
        else{
          document.getElementById('navbar')?.classList.add('none-full-lg-screen');
        }
      function tohome(){
        document.location.href = '#';
      }  
      const $tothetop = document.getElementById('tothetop');
      if ($tothetop != undefined){
        $tothetop.onclick = tohome;
          }
      }
    }
    
 

}
