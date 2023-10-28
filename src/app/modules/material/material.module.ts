import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
let components=[MatToolbarModule,MatIconModule,MatFormFieldModule,
  MatButtonModule,MatSidenavModule,MatDividerModule,MatGridListModule];
@NgModule({
  
  declarations: [],
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
