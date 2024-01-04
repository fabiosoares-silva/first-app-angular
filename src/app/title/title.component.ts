import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {
nome: any;
  

  constructor(){
    console.log("Construtor")
  }
  ngOnChanges(): void {
    console.log("OnChange")
    }

  ngOnInit(): void {  
    console.log("OnInit")
  }
}
