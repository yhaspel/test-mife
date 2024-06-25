import { Routes } from '@angular/router';
import { TestInternalComponent } from '../test-internal/test-internal.component';
import { InteralTwoComponent } from '../interal-two/interal-two.component';

export const TEST_INTERNAL_ROUTES: Routes = [
  {
    path: 'one',
    component: TestInternalComponent,
    outlet: 'internalOutlet',
  },
  {
    path: 'two',
    component: InteralTwoComponent,
    outlet: 'internalOutlet',
  },
];
