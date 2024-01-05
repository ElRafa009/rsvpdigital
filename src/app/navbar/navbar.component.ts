import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  toggleNavbar() {
    const navbar = this.el.nativeElement.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      this.renderer.removeClass(navbar, 'show');
    } else {
      this.renderer.addClass(navbar, 'show');
    }
  }

}
