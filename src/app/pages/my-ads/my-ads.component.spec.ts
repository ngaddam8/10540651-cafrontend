import { ComponentFixture, TestBed, ɵTestingCompiler } from '@angular/core/testing';

import { MyAdsComponent } from './my-ads.component';
 //adding
import { AdvertsComponent } from '../adverts/adverts.component';
import { AppComponent} from "../../app.component";
import { UserService } from 'src/app/services/user-service/user.service';
import { FormsModule } from '@angular/forms';

import * as $ from "jquery";
import { AppRoutingModule } from 'src/app/app-routing.module';
//Testing
import { NgModel } from '@angular/forms';
//


describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdsComponent ],
      //testing
      providers:[AppComponent, NgModel],
      imports: [AppRoutingModule]
      //testing
        })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
