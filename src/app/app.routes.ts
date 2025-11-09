import { Routes } from '@angular/router';
import { CounterComponent } from './problems/counter/counter.component';
import { AccordionComponent } from './problems/accordion/accordion.component';
import { ContactComponent } from './problems/contact/contact.component';
import { HolyGrailComponent } from './problems/holy-grail/holy-grail.component';
import { FlightBookerComponent } from './problems/flight-booker/flight-booker.component';
import { GenerateTableComponent } from './problems/generate-table/generate-table.component';
import { GenerateTable2Component } from './problems/generate-table2/generate-table2.component';
import { ProgressContainerComponent } from './problems/progress-container/progress-container.component';

export const routes: Routes = [
    {path: "counter", component: CounterComponent},
    {path: "accordion", component: AccordionComponent},
    {path: "contact", component: ContactComponent},
    {path: 'holy-grail', component: HolyGrailComponent},
    {path: 'booking', component: FlightBookerComponent},
    {path: 'table-1', component: GenerateTableComponent},
    {path: 'table-2', component: GenerateTable2Component},
    {path: 'progress', component: ProgressContainerComponent}
];
