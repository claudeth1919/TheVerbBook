import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabRandomPage } from './tab-random.page';

const routes: Routes = [
  {
    path: '',
    component: TabRandomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRandomPageRoutingModule {}
