import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoziloComponent } from './components/vozilo.component';
import { AutomobilComponent } from './components/automobil/automobil.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatButtonModule, 
          MatIconModule, 
          MatSidenavModule, 
          MatListModule, 
          MatExpansionModule, 
          MatGridListModule } from '@angular/material';
import { AboutComponent } from './components/core/about/about.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { StavkaPorduzbineComponent } from './components/stavka-porduzbine/stavka-porduzbine.component';

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    AboutComponent,
    HomeComponent,
    AuthorComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorduzbineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
