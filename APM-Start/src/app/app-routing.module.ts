import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
        { path: 'home', component: WelcomeComponent },
        { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { 
            path: 'products', 
            canActivate: [AuthGuard],
            data: { preload: false },
            loadChildren: './products/product.module#ProductModule'
        },
        { path: '**', component: PageNotFoundComponent }
        ], { preloadingStrategy: SelectiveStrategy }
      )],
      exports: [RouterModule]
})
export class AppRoutingModule { }