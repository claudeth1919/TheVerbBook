import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabRandomPage } from './tab-random.page';

describe('TabRandomPage', () => {
  let component: TabRandomPage;
  let fixture: ComponentFixture<TabRandomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRandomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRandomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
