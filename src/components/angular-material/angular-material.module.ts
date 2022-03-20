import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule],
})
export class AngularMaterialModule {}
