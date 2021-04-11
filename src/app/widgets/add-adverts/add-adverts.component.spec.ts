import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAdvertsComponent } from './add-adverts.component';
//tesing
import { NgModel } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
//testing
describe('AddAdvertsComponent', () => {
  let component: AddAdvertsComponent;
  let fixture: ComponentFixture<AddAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertsComponent ],
      //testing
      providers:[AppComponent, NgModel],
      imports: [AppRoutingModule]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    //$('.createad').click();
   // expect(component.error).toBe("All the fields are required to create an ad");
  });
});
