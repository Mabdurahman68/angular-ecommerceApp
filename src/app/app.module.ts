import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavComponent } from './nav/nav.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandComponent } from './brand/brand.component';
import { BannerComponent } from './banner/banner.component';
import { FeatureComponent } from './feature/feature.component';
import { CategoryComponent } from './category/category.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { RecentProductComponent } from './recent-product/recent-product.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavComponent,
    BottomBarComponent,
    MainBannerComponent,
    NavbarComponent,
    BrandComponent,
    BannerComponent,
    FeatureComponent,
    CategoryComponent,
    CallToActionComponent,
    FeaturedProductComponent,
    RecentProductComponent,
    NewsletterComponent,
    ReviewComponent,
    FooterComponent,
    FooterBottomComponent,
    BestSellingComponent,
    NewArrivalsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    MyaccountComponent,
    WishListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
