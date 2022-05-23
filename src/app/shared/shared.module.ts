import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent
  ],
  exports:[
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
