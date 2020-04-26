import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: '**', component: ProfileComponent },
    { path: '**', component: ProfileComponent },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
