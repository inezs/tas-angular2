import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent {
  trainingName: string;
  startDate: string;
  endDate: string;
  

  constructor(public addPeriod: MdDialog) {}

  openDialog(): void {
    let dialogRef = this.addPeriod.open(AddPeriodDialog, {
      width: '40%',
      data: { trainingName: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.trainingName = result.trainingName;
      this.startDate = result.startDate;
      this.endDate = result.endDate;
    });
  }

}

@Component({
  templateUrl: 'add-period-dialog.html',
  styleUrls: ['./period.component.css']
})
export class AddPeriodDialog {
  addPeriodFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    public dialogRef: MdDialogRef<AddPeriodDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
