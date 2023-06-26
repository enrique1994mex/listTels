import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tels: string[] = ['9991009980', '9993265580', '9991526620'];
  newTel: string = '';
  deleteTel: string = '';
  updateTel: string = '';
  newUpdateTel: string = '';

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onAdd() {
    if (this.tels.length < 3) {
      this.tels.push(this.newTel);
    }
    this.newTel = '';
    this.modalService.dismissAll();
  }

  onAddDelete(tel: string) {
    this.deleteTel = tel;
  }

  onDelete() {
    this.tels = this.tels.filter((tel) => tel !== this.deleteTel);
    this.modalService.dismissAll();
    this.deleteTel = '';
  }

  onAddUpdate(tel: string) {
    this.updateTel = tel;
    this.newUpdateTel = tel;
  }

  onUpdate() {
    this.tels = this.tels.map((tel) => {
      if (tel === this.updateTel) {
        return this.newUpdateTel;
      } else {
        return tel;
      }
    });
    this.modalService.dismissAll();
    this.updateTel = '';
  }
}
