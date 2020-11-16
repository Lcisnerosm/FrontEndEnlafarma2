import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearCostumerPage } from './crear-costumer.page';

describe('CrearCostumerPage', () => {
  let component: CrearCostumerPage;
  let fixture: ComponentFixture<CrearCostumerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCostumerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearCostumerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
