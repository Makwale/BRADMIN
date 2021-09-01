import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotbookingPage } from './slotbooking.page';

const routes: Routes = [
  {
    path: '',
    component: SlotbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotbookingPageRoutingModule {}
