import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaidDetailsPage } from './maid-details';

@NgModule({
  declarations: [
    MaidDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MaidDetailsPage),
  ],
})
export class MaidDetailsPageModule {}
