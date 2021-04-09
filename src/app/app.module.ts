import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';

import { MaterialModule } from './shared/material/material.module';
import { AlunosModule } from './core/alunos/alunos.module';

import { AlertaComponent } from './shared/components/alerta/alerta.component';
import { Error404Component } from './core/components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AlertaComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AlunosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
