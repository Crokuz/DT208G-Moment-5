/*
Författare: Leander Norberg
Projektnamn: Moment 5
Beskrivning: Slutprojekt utvecklat i samband med kursen 
Programmering i TypeScript (DT208G ) vid mittuniversitetet, VT2025 
*/

import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-quoter',
    imports: [],
    templateUrl: './quoter.html',
    styleUrl: './quoter.css'
})
export class Quoter {
    //Array som innehåller citat och vem som citeras
    quotes = [
        { text: "Utbildningen gav mig inte bara teoretisk kunskap, utan också modet att ta initiativ och skapa min egen väg i karriären.", author: "Sara Lindqvist, alumn från Kandidatprogrammet i Företagsekonomi" },
        { text: "Det bästa var gemenskapen och hur nära vi kom våra lärare. Det skapade en miljö där man verkligen kunde växa.", author: "Ingrid Ekström, alumn från Civilingenjörsprogrammet i Datateknik" },
        { text: "Att studera här lärde mig att tänka kritiskt, samarbeta med människor från hela världen och våga utmana mig själv.", author: "Leila Karim, alumn från Masterprogrammet i Globala Studier" }
    ];

    //Deklarering av signal som dynamiskt ändrar innehåll
    randomQuote = signal(this.getRandomQuote());

    //Metod för att hämta ett slumpmässigt citat
    private getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    }
}