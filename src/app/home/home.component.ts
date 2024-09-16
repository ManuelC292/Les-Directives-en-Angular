import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

  error:boolean= false
  isDisplayBox: boolean = true
  items: string[] = ['Home', 'Products', 'Blog', 'Contact']

  ngOnInit(): void {
  }

  hideBox(){
    this.isDisplayBox = !this.isDisplayBox
  }

}
