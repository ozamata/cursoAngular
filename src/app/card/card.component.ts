import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  public image:string="https://i.ytimg.com/vi/4R1zGii3LW0/maxresdefault.jpg";
  public Titulo:string= "curso de angular con interpolacion";
  constructor(){}
  ngOnInit(): void {
      
  }

}
