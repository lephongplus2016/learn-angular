import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

//su dung cho two way biding
import { FormsModule } from '@angular/forms';
import { StructualComponent } from './structual/structual.component';
import { WordsComponent } from './words/words.component';
import { InputPersonComponent } from './input-person/input-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip/ip.component';
import { IpService } from './ip.service';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    TwowayBindingComponent,
    StructualComponent,
    WordsComponent,
    InputPersonComponent,
    ListPersonComponent,
    OutputParentComponent,
    OutputChildComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
