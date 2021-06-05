import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonaService } from './services/persona.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    HttpClientModule    
    
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
