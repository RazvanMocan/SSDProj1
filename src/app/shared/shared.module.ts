import {NgModule} from '@angular/core';
import { MatToolbarModule} from '@angular/material'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
imports: [MatToolbarModule, MatButtonToggleModule, MatInputModule],
  exports : [
    MatToolbarModule, MatButtonToggleModule, MatInputModule,
    MatButtonModule, MatFormFieldModule, MatAutocompleteModule,
    MatSliderModule, MatIconModule, MatGridListModule, ReactiveFormsModule
  ]
})
export class SharedModule{}

