import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { GifsModule } from '../gifs/gifs.module';



@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    GifsModule,
    CommonModule,
  ],
  exports: [
    SidebarComponent
  ]

})
export class SharedModule { }