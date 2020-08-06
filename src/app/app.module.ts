import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FioInputComponent} from './fio-input/fio-input.component';
import {CvFormComponent} from './cv-form/cv-form.component';
import { GenderInputComponent } from './gender-input/gender-input.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { BirthdayInputComponent } from './birthday-input/birthday-input.component';
import { MaritalStatusInputComponent } from './marital-status-input/marital-status-input.component';
import { ChildrenCountInputComponent } from './children-count-input/children-count-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { CommentsInputComponent } from './comments-input/comments-input.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ResultViewComponent } from './result-view/result-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FioInputComponent,
    CvFormComponent,
    GenderInputComponent,
    BirthdayInputComponent,
    MaritalStatusInputComponent,
    ChildrenCountInputComponent,
    EmailInputComponent,
    CommentsInputComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
