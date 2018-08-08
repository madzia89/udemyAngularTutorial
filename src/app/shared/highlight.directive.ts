import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
  //selector mówi w jaki sposób odwoływac się do dyrektywy w szablonie
  //nawiasy kwadratowe mówią że jest to dyrektywa atrybutowa, 
  //czyli aby uzyc tej dyrektywy musimy ododać atrybut[appHighLight] do szablonu html
})
export class HighlightDirective {

  constructor(private element: ElementRef) { 
  }
 
  @HostListener('mouseenter') highlight(){
    this.element.nativeElement.style.backgroundColor = "red"
       //native element odowłuje się do faktycznego obiektu z drzewa html.
    //mając dostęp do tego obiektu możemy juz go np. stylować

  
    //tutaj potrzebne jest this.
    // W zasięgu konsturktora czyli w funkcji powyżej
    // mieliśmy bezpośredni dostępo do elementu, 
    // tutaj musimy wskazać o jaki kontekst nam chodzi
  }

  @HostListener('mouseleave') cancelHighlight(){
    this.element.nativeElement.style.backgroundColor = null
  }
}
