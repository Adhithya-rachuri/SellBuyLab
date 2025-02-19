import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { SellComponent } from './sell/sell.component';
import { OrdersComponent } from './orders/orders.component';
import { FavouritesComponent } from './favourites/favourites.component';
import {Routes, RouterModule} from '@angular/router'


const appRoutes : Routes =[
{path : '',component : ContentComponent},
{path : 'sell_path',component : SellComponent},
{path : 'order_link',component : OrdersComponent},
{path : 'favourites',component : FavouritesComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AsideComponent,
    ContentComponent,
    ItemComponent,
    SellComponent,
    OrdersComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
