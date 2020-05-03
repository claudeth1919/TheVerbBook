import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabRandomPageRoutingModule } from './tab-random-routing.module';

import { TabRandomPage } from './tab-random.page';

import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRandomPageRoutingModule
  ],
  declarations: [TabRandomPage],
  providers: [
    SQLite,
  ]
})
export class TabRandomPageModule {}
