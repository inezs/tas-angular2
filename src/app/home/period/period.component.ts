import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdPaginator,MdSort } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


//Structure
@Component({
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent {
  displayedColumns = ['id','trainingName', 'activeStatus', 'coursesCount', 'startDate', 'endDate', 'createdBy', 'editedBy', 'action'];
  periodDatabase = new PeriodDatabase();
  dataSource: PeriodDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdSort) sort: MdSort;
  ngOnInit() {
    this.dataSource = new PeriodDataSource(this.periodDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }
  
  trainingName: string;
  startDate: string;
  endDate: string;
  

  constructor(public addPeriod: MdDialog) {}

  openDialog(): void {
    let dialogRef = this.addPeriod.open(AddPeriodDialog, {
      width: '40%',
      data: { trainingName: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.trainingName = result.trainingName;
      this.startDate = result.startDate;
      this.endDate = result.endDate;
    });
  }

}

//Add Period dialog
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

//table
export interface Period {
  id:number;
  trainingName: string;
  activeStatus: boolean;
  coursesCount: number;
  startDate: string;
  endDate: string;
  createdBy: string;
  editedBy: string;
}

export class PeriodDatabase {
  dataChange: BehaviorSubject<Period[]> = new BehaviorSubject<Period[]>([]);
  get data(): Period[] { return this.dataChange.value; }

  constructor() {
    this.dataChange.next([
      {id: 1,trainingName: 'ASP .NET', activeStatus: true , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Yuliawan Rizka", editedBy: "Yuliawan Rizka"},
      {id: 2,trainingName: 'ASP .NET', activeStatus: false , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Yuliawan Rizka", editedBy: "Lynx"},
      {id: 3,trainingName: 'Angular 2', activeStatus: true , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Lynx", editedBy: "Lynx"},
      {id: 4,trainingName: 'NodeJS', activeStatus: false , coursesCount: 8 , startDate:'10-11-2016', endDate:'20-10-2016', createdBy:"Yuliawan Rizka", editedBy: "Yuliawan Rizka"},
         {id: 5,trainingName: 'ASP .NET', activeStatus: true , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Yuliawan Rizka", editedBy: "Yuliawan Rizka"},
      {id: 6,trainingName: 'ASP .NET', activeStatus: false , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Yuliawan Rizka", editedBy: "Lynx"},
      {id: 7,trainingName: 'Angular 2', activeStatus: true , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Lynx", editedBy: "Lynx"},
      {id: 8,trainingName: 'NodeJS', activeStatus: false , coursesCount: 8 , startDate:'10-11-2016', endDate:'20-10-2016', createdBy:"Yuliawan Rizka", editedBy: "Yuliawan Rizka"},
      {id: 9,trainingName: 'ASP .NET', activeStatus: true , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Yuliawan Rizka", editedBy: "Yuliawan Rizka"},
      {id: 10,trainingName: 'ASP .NET', activeStatus: false , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Yuliawan Rizka", editedBy: "Lynx"},
      {id: 11,trainingName: 'Angular 2', activeStatus: true , coursesCount: 3 , startDate:'10-11-2017', endDate:'20-10-2017', createdBy:"Lynx", editedBy: "Lynx"},
      {id: 12,trainingName: 'NodeJS', activeStatus: false , coursesCount: 8 , startDate:'10-11-2016', endDate:'20-10-2016', createdBy:"Yuliawan Rizka", editedBy: "Yuliawan Rizka"}
      
    ]);
  }
}

export class PeriodDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  filteredData: Period[] = [];
  renderedData: Period[] = [];
  sortedData: Period[] = [];
  constructor(private _periodDatabase: PeriodDatabase, private _paginator: MdPaginator, private _sort: MdSort) {
    super();
  }
  connect(): Observable<Period[]> {
    const displayDataChanges = [
      this._periodDatabase.dataChange,
      this._filterChange,
      this._paginator.page,
      this._sort.mdSortChange,
    ];


    return Observable.merge(...displayDataChanges).map(() => {
      this.filteredData = this._periodDatabase.data.slice().filter((item: Period) => {
        let searchStr = (item.trainingName + item.startDate + item.endDate + item.createdBy + item.editedBy).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });


      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = this.filteredData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;

      //return this.getSortedData();

    });
  }

  disconnect() {}

  getSortedData(): Period[] {
    const data = this._periodDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}


