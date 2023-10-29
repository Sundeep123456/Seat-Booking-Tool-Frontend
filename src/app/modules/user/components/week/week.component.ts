import { NgClass, NgFor } from '@angular/common';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SearchFilter } from 'src/app/models/SearchFilter';




@Component({
  selector: 'week-component',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  imports: [
    NgFor,
    NgClass
  ],
  standalone: true
})
export class WeekComponent implements OnInit {

@Output() filterChanged: EventEmitter<SearchFilter> = new EventEmitter();
    
  currentWeek: string[] = [];
  currentWeekHeader: string[] = [];

  searchFilter: SearchFilter = {
    0: {
        "date": 0,
        "AM": false,
        "PM": false 
    },
    1: {
        "date": 0,
        "AM": false,
        "PM": false 
    },
    2: {
        "date": 0,
        "AM": false,
        "PM": false 
    },
    3: {
        "date": 0,
        "AM": false,
        "PM": false 
    },
    4: {
        "date": 0,
        "AM": false,
        "PM": false 
    },
    5: {
        "date": 0,
        "AM": false,
        "PM": false 
    },
    6: {
        "date": 0,
        "AM": false,
        "PM": false 
    }
  }

    getMonth(mon: number): string {
        return [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
    ][mon]
    }

    setDateString(offset: number) {
        let today = new Date();
        let offsetDate = new Date((new Date()).setDate(today.getDate()+offset));
        this.currentWeek.push(`${offsetDate.getDate()} ${this.getMonth(offsetDate.getMonth())}`);
        this.currentWeekHeader.push([
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
        ][offsetDate.getDay()])
        this.searchFilter[offset-1]["date"] = offsetDate.getTime();
    }

    toggleFilterItem(i: number, shift: string): void {
        (this.searchFilter[i] as any)[shift] = !(this.searchFilter[i] as any)[shift];
        this.filterChanged.emit(this.searchFilter);
    }



    constructor() {
        this.currentWeek = []
        this.currentWeekHeader = []
        for(let i=1; i<=7; i+=1) {
            this.setDateString(i);
        }
        // console.log(this.currentWeek, this.currentWeekHeader)
        // console.log(this.searchFilter)
    }

  ngOnInit(): void {}
}
