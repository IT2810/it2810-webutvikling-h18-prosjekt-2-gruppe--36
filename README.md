# Prosjekt 2: Galleri
Dette er en nettside skrevet i react som viser et galleri av bilder, tekst og lyd.

Laget av Tinus Flagstad, Martin Bondkall Gjerde & Jon Ryfetten

Se nettsiden på http://it2810-36.idi.ntnu.no/prosjekt2/


# Funksjonalitet og krav til teknologi

Nettsiden er bygget opp av en “container” komponent, som inneholder alle andre komponenter. Denne heter App og vi implementerte en global state løsning inni denne. State’en denne inneholder blir sendt videre til andre komponenter gjennom “props” (data/funksjoner som sendes til andre komponenter).

TabController holder styr på fanene. Den tar inn som parameter navn på alle faner som skal vises, faneindeks til den fanen som vises nå samt en funksjon til å endre fane som vises.

GalleryView inneholder selve innholdet til nettsiden (bilde, lyd og tekst). Til enhver tid finnes det kun en forekomst av denne komponenten. Når valgene til brukeren blir endret, blir props som kommer fra App komponenten endret. GalleryView må derfor spørre App om å laste ned ny data gjennom metoden “fetchData”. Denne metoden sørger for caching av data. Siden denne komponenten blir instansiert kun en gang, kunne egentlig fetchData metoden ligget i dette objektet. Det er egentlig få fordeler med å plassere den i App komponenten.

CategoryController inneholder hamburgermeny funksjonalitet, og fungerer som en proxy mellom App og CategorySelector komponentene. Mellom disse to komponentene utveksles state informasjon. State informasjonen lagres i App komponenten, men behandles i CategorySelcotor komponentene.



### Hvordan vi løste caching
Caching er løst gjennom at all data som blir lastet ned lagres i et objekt, med nøkkel lik url’en. Denne dataen lagres i App komponenten, originalt tiltenkt for å kunne vises i flere forekomster av GalleryView komponenten. Siden vi kun har en forekomst av GalleryView komponenten kunne vi lagret denne komponenten som en del av staten til GalleryView.

### Hvordan vi håndterte og lagret data uten bruk av redux

Vi lagret all data i App komponentet, med små untakk av data som har blitt lagret i sitt eget komponent. I steden for å bruke redux til å håndtere en global state for programmet, brukte vi App som en global state. State fra App ble sendt gjennom props til de andre komponentene. Funksjoner for å kunne endre state’en til App ble også sendt som props til de andre komponentene.


### Ajax
Vi brukte ```fetch``` for å hente bilder og tekst med ajax. Grunnen til at vi valgte ```fetch``` var for å slippe å laste ned enda flere npm pakker, og det virket lettvindt å bruke. For å vise bildet brukte vi ```dangerouslySetInnerHTML```, noe som vi ikke hadde brukt om det ikke var et krav at vi ikke fikk lov å bruke ```<img>``` taggen.


### Responsivt webdesing

Etter tips fra forelesningen valgte vi å designe nettsiden for mobil og liten skjerm først. I index.css begynte vi dermed å skrive css ment for liten skjerm, så la vi til en media-querie for min-width: 768px senere. Likevel måtte vi gjøre endringer i mobil designet senere i utviklingen. Den største forskjell fra liten og stor skjerm er hamburgermenyen som dukker opp på liten skjerm. Hamburgermenyen gir deg muligheten til å åpne og lukke radioknappene for endring av kategorier. Vi valgte å inkludere denne menyen for å gjør det mer brukervennlig å velge kategorier på en liten skjerm. En annen forskjell er fanene ligger over hverandre med to faner i bredden på liten skjerm. Da beholder fanene en stor størrelse og har stor tekst som gjør det enkelt å lese og trykke på en liten skjerm. På stor skjerm ligger alle fanene ved siden hverandre. 


### git

Vår bruk av git baserte seg på Git Workflow. Etter vi hadde satt opp prosjektet på github lagde vi en dev branch. Denne branchen funket som vår hoved utviklings branch hvor vi merget inn ny funksjonalitet. Dette er ønskelig fordi man skal være helt sikker på at koden som ligger i master fungerer. Vi lagde utviklingsoppgaver (issues) på github som ga oss en god oversikt over hvilke oppgaver som gjenstod. Vi lagde en ny branch for hver utviklingsoppgave som vi merget tilbake til dev når utviklingsoppgavene var fulført. Vi har også lagt til IDen til oppgaven i commit-meldingen for å gi en god oversikt over hvilke oppgaver hver commit hører til. Noen av disse oppgavene endte opp med å være større enn andre. For eksempel hadde vi en utviklingsoppgave for styling av siden. Det endte opp med at alle tre jobbet på samme branch i samme fil som kunne føre til noen problemer som vi vil prøve å unngå i de neste prosjektene. på den andre siden hindrer det mye merging fram og tilbake. Vi har ikke vært så aktive på å kommentere og diskutere utviklingsoppgaver på github fordi vi har for det meste utført kodingen fysisk sammen.

# Testing

Vårt mål var at nettsiden skulle se og oppføre seg lik på alle plattformene vi testet for. Alle i gruppen bruker forskjellig operativsystemer og forskjellige nettlesere som førte til at vi fikk kontinuerlig testet forskjellen mellom Safari, Firefox og Chrome på henholdsvis Mac, Linux og Windows. Et eksempel er at vi tidlig oppdaget at den fjerde fanen la seg under de andre, mens Chrome og Firefox hadde tiltenkt virkemåteligger hvor alle fanene ligger vedsiden av hverandre. Dette løste vi ved på å endre flex-basis til 24% istedenfor 25%. Vi har også testet nettsiden på Chrome og Firefox med android telefoner. Her testet vi både vertikal og horisontal orientering. Metoder vi brukte for å teste oppførsel og utseende av nettsiden på forskjellige plattformer var å endre vindustørrelsen og sammenligne utseende ved siden av hverandre. Vi har også testet at all interaktivitet på nettsiden har tiltenkt virkemåte på alle de tidligere nevnte plattformene. Dette inkluderer for eksempel lasting og chaching av data, endring av faner og avspilling av lyd.


![Mobil versjon av siden](http://folk.ntnu.no/tinussf/it2810/a1/mobile.jpg)
Over ser man en skjermdump fra Chrome på Android telefon
![Desktop versjon av siden](http://folk.ntnu.no/tinussf/it2810/a1/desktop.png)
Over ser man en skjermdump fra Firefox på Linux


Alle lydfiler er lastet ned fra https://freesound.org/, alle bilder er lastet ned fra https://openclipart.org/ og alle tekstfilene er lastet ned fra https://www.wikipedia.org/.
