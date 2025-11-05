import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})

export class AccordionComponent {

  // create sections
  sections = [
    { id: 1, title: 'HTML', content: 'HyperText Markup Language...', isOpen: false },
    { id: 2, title: 'CSS', content: 'Cascading Style Sheets...', isOpen: false },
    { id: 3, title: 'JavaScript', content: 'Programming language...', isOpen: false }
  ]

  // toggle method
  toggle (id: number) {
    const section = this.sections.find(s => s.id === id );
    if(section) {
      section.isOpen = !section.isOpen;
    }
  }
}
