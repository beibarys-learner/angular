import { Routes } from '@angular/router';
import { CounterComponent } from './problems/counter/counter.component';
import { AccordionComponent } from './problems/accordion/accordion.component';

export const routes: Routes = [
    {path: "counter", component: CounterComponent},
    {path: "accordion", component: AccordionComponent}
];
