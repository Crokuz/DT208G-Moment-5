/*
Författare: Leander Norberg
Projektnamn: Moment 5
Beskrivning: Slutprojekt utvecklat i samband med kursen 
Programmering i TypeScript (DT208G ) vid mittuniversitetet, VT2025 
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleService } from '../../services/schedule-service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule.html',
  styleUrls: ['./schedule.css']
})

export class Schedule {
    schedule: Course[] = [];
    totalPoints: number = 0;

    constructor(private scheduleService: ScheduleService) {
        this.scheduleService.schedule$.subscribe(data => {
        this.schedule = data;
        this.updateTotalPoints();
        });
    }

    //Metod som kallar på schema-servicen för att ta bort en kurs
    removeFromSchedule(courseCode: string) {
        this.scheduleService.removeCourse(courseCode);
    }

    //Metod som updaterar den samanlaggda mängden högskolepoäng i listan
    private updateTotalPoints() {
        this.totalPoints = this.schedule.reduce((sum, course) => sum + course.points, 0);
    }
}
