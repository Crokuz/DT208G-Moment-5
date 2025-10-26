# Moment 5, DT208G

Detta projekt är utvecklat med [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

Projektet är utvecklat i samband med kursen "Programmering i TypeScript” vid ­Mittuniversitetet i Sundsvall. Syftet med projektet är att ge ytterligare färdigheter inom utveckling av angular-applikationer genom att omsätta kunskaper från de tidigare moment i praktiken. 

Uppgiften går ut att skapa en webbplats för ett fiktigt lärosäte, där det ska gå att lista tillgängliga kurser samt att skapa eget ramschema av en upppsättning kurser. Webbplatsen består av en starsida som är tänkt att fungera som ansiktet utåt för lärosätet, en unersida där kurserna presenteras samt en undersida för ett personligt ramschema. I kurslistan kan man söka och filtrera bland kurserna. Kurser som ska sparas till schemat kan läggas till genom en knapp, längst till höger i respektive rad. I ramschemat kan man ta bort kurser och se den totala summan högskolepoäng som schemat representerar. 

Webbapplikationen består av tre huvudkomponenter som representerar webbplatsens undersidor, ett interface som fungerar som mall hur nya kurser ska struktureras samt två service-filer som hanterar inläsningen av kurser och lagring av data i ramschemat. På starsidan inkluderas en delkomponent för att generera ett citat från en lagrad lista. Applikationen innehåller även en delkomponent för en navigeringsmeny som inlkluderas på samtliga uundersidor.

Målet med projektet är att uppnå grundkraven.