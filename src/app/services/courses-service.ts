/*
Författare: Leander Norberg
Projektnamn: Moment 5
Beskrivning: Praktisk laboration utvecklat i samband med kursen 
Programmering i TypeScript (DT208G ) vid mittuniversitetet, VT2025 
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CoursesService {
    private url = 'miun_courses.json';

    constructor(private http: HttpClient) {}

    //Metod för att hämta kursdata med hjälp av ett interface för att säkerställa typsäkerhet
    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.url);
    }
}

