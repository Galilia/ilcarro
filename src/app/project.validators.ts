import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

// async Validator check equivalence email on server
export class ProjectValidators {
  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'iliagalperin@gmail.com') {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
