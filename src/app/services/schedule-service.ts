import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {
    private storageKey = 'mySchedule';

    //Använder lagrad data från localStorage och håller innehållet uppdaterat
    private scheduleSubject = new BehaviorSubject<Course[]>(this.loadFromLocalStorage());
    schedule$ = this.scheduleSubject.asObservable();

    constructor() {}

    //Metod för att hämta information från local Storage 
    private loadFromLocalStorage(): Course[] {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    //Metod för att spara information från local Storage 
    private saveToLocalStorage(courses: Course[]): void {
        localStorage.setItem(this.storageKey, JSON.stringify(courses));
    }

    //Metod för att hämta schema
    getSchedule(): Course[] {
        return this.scheduleSubject.getValue();
    }

    //Metod för att lägga till och spara en kurs 
    addCourse(course: Course): void {
            const current = this.getSchedule();
            //Förebygger dubbletter
            if (!current.find(c => c.courseCode === course.courseCode)) {
                const updated = [...current, course];
                this.scheduleSubject.next(updated);
                this.saveToLocalStorage(updated);
            }
    }

    //Metod för att ta bort en kurs 
    removeCourse(courseCode: string): void {
            const updated = this.getSchedule().filter(c => c.courseCode !== courseCode);
            this.scheduleSubject.next(updated);
            this.saveToLocalStorage(updated);
    }
}