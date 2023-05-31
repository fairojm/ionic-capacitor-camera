import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ImagesPage } from './images.page';

describe('Tab1Page', () => {
  let component: ImagesPage;
  let fixture: ComponentFixture<ImagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
