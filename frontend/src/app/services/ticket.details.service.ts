import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TicketDetails {
  public hideOption: Subject<boolean> = new Subject();
  public hideOption$ = this.hideOption.asObservable();

  public emitHideOption() {
    this.hideOption.next(true);
  }
}
