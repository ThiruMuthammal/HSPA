import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar/nav-bar.component";
import { HousingService } from "./services/housing.service";
import { AddPropertyComponent } from "./property/add-property/add-property.component";
import { PropertyDetailComponent } from "./property/property-detail/property-detail.component";
import { PageNotfoundComponent } from "./property/page-notfound/page-notfound.component";

const appRoutes: Routes = [
  {
    path: "",
    component: PropertyListComponent,
  },
  {
    path: "rent-property",
    component: PropertyListComponent,
  },
  {
    path: "add-property",
    component: AddPropertyComponent,
  },
  {
    path: "property-detail/:id",
    component: PropertyDetailComponent,
  },
  {
    path: "**",
    component: PageNotfoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PageNotfoundComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
