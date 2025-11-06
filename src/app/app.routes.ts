import { Routes } from '@angular/router';
import { CounterComponent } from './problems/counter/counter.component';
import { AccordionComponent } from './problems/accordion/accordion.component';
import { ContactComponent } from './problems/contact/contact.component';

export const routes: Routes = [
    {path: "counter", component: CounterComponent},
    {path: "accordion", component: AccordionComponent},
    {path: "contact", component: ContactComponent}
];
