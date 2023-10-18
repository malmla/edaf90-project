This is the project repository for * insert våra namn + stil-id * Martin Larsson (dat14mla), in the module EDAF90 at LTH.

The project is to make a web application that utilises the [API](https://openlibrary.org/developers/api) from openlibrary. The planned features are: searching for authors, titles, genres, etc., managing lists of titles (eg. "books I have read" or "books I am want to read"), subscribing to updates to authors and titles, and to make the app a progressive web application.

The project will utilise pre-built react gui-components from https://react-bootstrap.netlify.app in accordance with the [instructions](/project.pdf) for the project.

TODO:
- landing page: se items man prenumererar på som har uppdateringar, visa de listor som finns
- subscribe-knapp-komponent och add-to-list-komponent? samma behaviour i authorview som i bookview? 
    - lägg till i lista, ta bort från lista, prenumerera: det här kan förmodligen vara context-reducer
- worksview (/works/:olid)
- sökning: (söka efter författare, lägre prio)
- progressive web app (lägre prio):
- localstorage? listor och prenumerationslistan
- You must use a global state: context and reducer for react, a service for angular. (Krav i projekt) Förmodligen mest lämpligt att använda listor till det eller?
- skriv rapporten, skapade ett [dokument](/report-notes.txt) att samla antecknigar inför rapporten


Time report done through a [Google Form](https://forms.gle/6WqwcB5QayWox6Qw8).
Results in [Google Sheets](https://docs.google.com/spreadsheets/d/1Ku0Buc6SBuxS5if3rjAR84lodWiAHW5GiwE0yiSYRoQ/edit?usp=sharing).

![alt text](/resources/plan.jpg)
