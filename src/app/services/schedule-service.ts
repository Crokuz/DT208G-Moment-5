import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private storageKey = 'mySchedule';

  // BehaviorSubject to allow reactive updates
  private scheduleSubject = new BehaviorSubject<Course[]>(this.loadFromLocalStorage());
  schedule$ = this.scheduleSubject.asObservable();

  constructor() {}

  private loadFromLocalStorage(): Course[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  private saveToLocalStorage(courses: Course[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }

  getSchedule(): Course[] {
    return this.scheduleSubject.getValue();
  }

  addCourse(course: Course): void {
    const current = this.getSchedule();
    // Prevent duplicates
    if (!current.find(c => c.courseCode === course.courseCode)) {
      const updated = [...current, course];
      this.scheduleSubject.next(updated);
      this.saveToLocalStorage(updated);
    }
  }

  removeCourse(courseCode: string): void {
    const updated = this.getSchedule().filter(c => c.courseCode !== courseCode);
    this.scheduleSubject.next(updated);
    this.saveToLocalStorage(updated);
  }
}