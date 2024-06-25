import { Routes } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { TestInternalComponent } from './components/test-internal/test-internal.component';
import { InteralTwoComponent } from './components/interal-two/interal-two.component';

export const TEST_MIFE_ROUTES: Routes = [
  {
    path: 'test',
    component: TestComponentComponent,
    children: [
      {
        path: 'one',
        component: TestInternalComponent,
      },
      {
        path: 'two',
        component: InteralTwoComponent,
      },
    ],
    // loadChildren: () => import('./components/test-component/test.routes').then(m => m.TEST_INTERNAL_ROUTES)
  },
];
