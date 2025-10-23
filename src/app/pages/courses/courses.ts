/*
Författare: Leander Norberg
Projektnamn: Moment 5
Beskrivning: Slutprojekt utvecklat i samband med kursen 
Programmering i TypeScript (DT208G ) vid mittuniversitetet, VT2025 
*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../services/courses-service';
import { Course } from '../../models/course';
import { ScheduleService } from '../../services/schedule-service';

@Component({
    selector: 'app-courses',
    imports: [CommonModule, FormsModule],
    templateUrl: './courses.html',
    styleUrls: ['./courses.css']
})

export class Courses {
    allCourses: Course[] = [];
    courses: Course[] = [];
    subjects: string[] = [];
    searchTerm = '';
    selectedSubject = '';
    totalCourses = 0;

    sortColumn: keyof Course | '' = '';
    sortDirection: 'asc' | 'desc' = 'asc';

    constructor(
        private coursesService: CoursesService,
        private scheduleService: ScheduleService
    ) {}

    //Metod för att hämta data om kurser 
    ngOnInit() {
        this.coursesService.getCourses().subscribe((data) => {
            this.allCourses = data;
            this.courses = data;
            this.totalCourses = this.courses.length;
            //Hämtar, utesluter dubletter och sorterar en lista på ämnen från JSON-filen
            this.subjects = Array.from(new Set(data.map(course => course.subject))).sort();
        });
    }

    //Metod för att filtrera litan på kurser
    filterCourses() {
        const term = this.searchTerm.toLowerCase();
        const subject = this.selectedSubject;

        this.courses = this.allCourses.filter(course =>
            (course.courseCode.toLowerCase().includes(term) ||
            course.courseName.toLowerCase().includes(term)) &&
            (subject === '' || course.subject === subject)
        );

        this.totalCourses = this.courses.length;
    }

    //Metod som kallar på schema-servicen för att lagra en kurs
    addToSchedule(course: Course) {
        this.scheduleService.addCourse(course);
    }

    //Metod för att sortera kolumnerna i tabellen
    sortBy(column: keyof Course) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }

        this.courses.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return this.sortDirection === 'asc'
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
            return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        }
        return 0;
        });
    }
}
