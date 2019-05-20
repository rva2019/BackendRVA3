import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VoziloComponent } from './components/primer-components/vozilo/vozilo.component';
import { AutomobilComponent } from './components/primer-components/automobil/automobil.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatButtonModule, 
          MatIconModule, 
          MatSidenavModule, 
          MatListModule, 
          MatExpansionModule, 
          MatGridListModule, 
          MatTableModule,
          MatToolbarModule,
          MatSelectModule,
          MatOptionModule,
          MatDialogModule,
          MatInputModule,
          MatSnackBarModule} 
from '@angular/material';

import { AboutComponent } from './components/core/about/about.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './components/stavka-porudzbine/stavka-porudzbine.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtiklService } from './services/artikl.service';
import { ArtiklDialogComponent } from './components/dialogs/artikl-dialog/artikl-dialog.component';
import { FormsModule } from '@angular/forms';
import { DobavljacDialogComponent } from './components/dialogs/dobavljac-dialog/dobavljac-dialog.component';
import { DobavljacService } from './services/dobavljac.service';


const Routes = [
  { path: 'artikl', component: ArtiklComponent},
  { path: 'dobavljac', component: DobavljacComponent },
  { path: 'porudzbina', component: PorudzbinaComponent },
  { path: 'stavkaPorudzbine', component: StavkaPorudzbineComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
 ];
 

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
    StavkaPorudzbineComponent,
    ArtiklDialogComponent,
    DobavljacDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routes),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule, 
    MatToolbarModule, 
    MatSelectModule, 
    MatOptionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [
    ArtiklDialogComponent,
    DobavljacDialogComponent
  ],
  providers: [ArtiklService, DobavljacService],
  bootstrap: [AppComponent]
})
export class AppModule { }
