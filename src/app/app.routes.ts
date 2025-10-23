import { Routes } from '@angular/router';
import { Courses } from './pages/courses/courses';
import { Schedule } from './pages/schedule/schedule';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: "courses", component: Courses},
    {path: "schedule", component: Schedule},
    {path: "home", component: Home},
    {path: "", redirectTo: "home", pathMatch: "full"}
];
