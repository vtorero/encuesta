import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './components/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    ComponentsModule,
    MatRadioModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
     EncuestaComponent
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
