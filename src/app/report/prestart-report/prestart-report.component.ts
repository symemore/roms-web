import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-prestart-report',
  templateUrl: './prestart-report.component.html',
  styleUrls: ['./prestart-report.component.scss']
})
export class PrestartReportComponent implements OnInit {
  // globals: Globals;
  submitted: boolean = false;
  displayedColumns: string[] = [
    'name',
    'status',
    'comment',
    'media',
    
  ];

  // convertedStartDate: convertedStartDate,
  // employeeName: employeeName,

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  panelOpenState = false;
  step = 0;

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }
  constructor(
    // breakpointObserver: BreakpointObserver,
    // public util: Utils,
    globals: Globals,
    // private fb: FormBuilder,
    // private alertService: AlertService,
    // private leaveService: LeaveService,
    // private datePipe: DatePipe,
    // private activatedRoute: ActivatedRoute,
    // private authService: AuthenticationService,
    // private employeeService: EmployeeService,
    // private router: Router,
    ) { }

  ngOnInit(): void {
  }

  // getDefaultOptions() {
  //   let obj = this.paginator;
  //   let sort = this.sort;
  //   let pageSize = obj != undefined ? (obj.pageIndex == null ? 1 : obj.pageIndex + 1) : 1;

  //   const options: ViewOptions = {
  //     sortField: sort !== undefined ? sort.active : 'fullName',
  //     sortDirection: sort !== undefined ? sort.direction : 'asc',
  //     // page: (obj != undefined ? (obj.pageIndex == null ? 1 : obj.pageIndex + 1) : 1),
  //     page: pageSize - 1,
  //     search: '',
  //     query: `empName=${this.search}`,
  //     pageSize:
  //       obj != undefined ? (obj.pageSize == null ? this.pageSize : obj.pageSize) : this.pageSize,
  //   };
  //   return options;
  // }

  // getStatus(status: any) {
  //   return this.globals.userApplicationStatus.find((elem: any) => {
  //     return elem.value == status;
  //   })?.name;
  // }

  // getStatusColor(status: any, isCheckbox: boolean = false) {
  //   let elem: any = this.globals.userApplicationStatus.find((elem: any) => {
  //     return elem.value == status;
  //   });
  //   return elem ? (isCheckbox == true ? elem.checkboxColorClass : elem.colorClass) : '';
  // }

  // applyFilter(isTextSearch: boolean = false): void {
  //   // console.log(this.search, 'search', this.startDate, 'startdate', this.endDate, 'enddate');
  //   this.search = this.search.trim(); // Remove whitespace
  //   this.search = this.search.toLowerCase(); // Datasource defaults to lowercase matches
  //   // this.dataSource.filter = this.search;
  //   if (isTextSearch) {
  //     this.pageNo = 0;
  //     this.totalRecords = 0;
  //     this.paginator.firstPage();
  //     // this.dataSource.paginator?.pageIndex[0]=;
  //   }
  //   // else {
  //   this.refresh(this.getDefaultOptions());
  //   // }
  // }

}
