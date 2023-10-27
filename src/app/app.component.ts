import { Component } from '@angular/core';
import { CarService } from './carservice';
import { Car } from './car';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TableData } from './Model/Data';
import { TableDataService } from './Services/table-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  columns: any[] = [];
  showTable = false
  Response: TableData;
  virtualData: TableData[];
  FirstHit: Boolean = false;

  skip: number = 0;
  limit: number = 40
  totalRecords: number = 0;

  constructor(public dataService: TableDataService) { }

  async ngOnInit() {
    this.columns = [
      { field: 'id', header: 'Id', frozen: true, allign: "left" },
      { field: 'title', header: 'Title', frozen: true, allign: "left" },
      { field: 'userId', header: 'UserId', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId1', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId2', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId3', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId3', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId5', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId6', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId7', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId8', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId9', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId10', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId11', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId12', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId13', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId14', frozen: false, allign: "left" },
      { field: 'userId', header: 'UserId15', frozen: false, allign: "left" },
    ];
    this.Response = await this.dataService.GetTableData(this.skip, this.limit);
    this.virtualData = Array.from({ length: this.Response.total }); //We should pass total data count here
    this.showTable = true;
  }


  async loadCarsLazy(event: any) {
    if ((event.first == 0 && this.FirstHit == false) || event.first != 0) {
      this.FirstHit = true;
      this.Response = await this.dataService.GetTableData(event.first, this.limit);
      Array.prototype.splice.apply(this.virtualData, [...[event.first, event.rows], ...this.Response.posts])
      this.virtualData = [...this.virtualData];
      event.forceUpdate();
    }
  }
}
