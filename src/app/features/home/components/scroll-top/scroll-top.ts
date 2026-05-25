import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.scss',
})
export class ScrollTop {
  showButton=signal(false);
  
  @HostListener('window:scroll')

  onScroll(){
    this.showButton.set(window.screenY>100);
  }

  scrollTotop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }


}
