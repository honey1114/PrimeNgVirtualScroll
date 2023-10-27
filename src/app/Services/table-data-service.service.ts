import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableData } from '../Model/Data';

@Injectable()
export class TableDataService {
  constructor(private http: HttpClient) {}
  async GetTableData(skip: number, limit: number) {
    return this.http
      .get<Promise<TableData>>(
        'https://dummyjson.com/posts?skip=' + skip + '&limit=' + limit
      )
      .toPromise();
  }
}
