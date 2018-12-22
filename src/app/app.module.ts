import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatGridListModule,
   MatCardModule,
   MatFormFieldModule,
   MatMenuModule,
   MatProgressSpinnerModule,
   MatInputModule,
   MatChipsModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SmsComponent } from './sms/sms.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HoldableDirective } from './holdable.directive';
import { HoldableComponent } from './holdable/holdable.component';
import { CustomerComponent } from './customer/customer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import { WeatherService } from './weather.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ContentfulService } from './contentful.service';
import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    ContactComponent,
    SmsComponent,
    GoogleMapComponent,
    HoldableDirective,
    HoldableComponent,
    CustomerComponent,
    LocalForecastComponent,
    BlogPostComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatChipsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: environment.googleMapsKey}),
    ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production })
  ],
  providers: [WeatherService, ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
