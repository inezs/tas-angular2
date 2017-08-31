import { Component, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

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
      width: '250px',
      // data: { trainingName: this.trainingName, startDate: this.startDate, endDate: this.endDate }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   console.log(result);
    // });
  }

}

@Component({
  templateUrl: 'add-period-dialog.html',
})
export class AddPeriodDialog {

  constructor(
    public dialogRef: MdDialogRef<AddPeriodDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
