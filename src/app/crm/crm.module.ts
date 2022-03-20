import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';
import { CustomersComponent } from './customers/customers.component';
import { AngularMaterialModule } from 'src/components/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
// ngModel kullanmak istiyorsak bu modülü aktif hale getirmeliyiz.
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CrmComponent, CustomersComponent],
  imports: [
    CommonModule,
    CrmRoutingModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
})
export class CrmModule {}
