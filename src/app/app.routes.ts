import { Routes } from '@angular/router';
import { CounterComponent } from './problems/counter/counter.component';
import { AccordionComponent } from './problems/accordion/accordion.component';
import { ContactComponent } from './problems/contact/contact.component';
import { HolyGrailComponent } from './problems/holy-grail/holy-grail.component';

export const routes: Routes = [
    {path: "counter", component: CounterComponent},
    {path: "accordion", component: AccordionComponent},
    {path: "contact", component: ContactComponent},
    { path: 'holy-grail', component: HolyGrailComponent }
];
