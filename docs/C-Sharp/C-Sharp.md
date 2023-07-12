# Objektorientierte Programmierung mit C#

+ Prezedurale Programmierung: 
    + Variablen für die Speicherung


+ Objektorientierte Programmierung:
    + Variablen und Prozeduren (Methoden) werden in Klassen zusammengefasst.
    
    |Bezeichnung|Preis|Menge|
    |---|---|---|
    ||||

Ausgangspunkt bei der Programmierung: Daten die gespeichert werden sollen.


1. Programmaufbau  
--> was gibt es im Programm

2. Programmablauf  
--> welche Artikel habe ich  
--> Auswahl Artikel für Verkauf  
--> Ausgabe ergebnis (Kann verkauft werden oder nicht)

## Erstellen eines Programms mit C#
--> Visual Studio 2022 --> Neues Projekt --> C# -->

Links: Programm  
Rechts: Bibliotheken / Verweise *.dll (dynamic link libraries)

Namensraum: jedes Projekt kann bestehen aus mehreren Klassen, die werden in Namensräumen / Paketen organisiert (Zusammengefasst)

ein Namensraum enthält eine Klasse

die Klasse enthält eine Methode, die bei Start des Programms ausgeführt wird

### Beispiel 1
Der Nutzer gibt eine ganze Zahl ein und das Programm gibt das Quadrat der Zahl aus.  
--> Wir orientieren und am EVA-Prinzip.  
Eingabe (eine ganze Zahl) Deklaration einer Variablen (1. Variablenname 2. Datentyp) --> Verarbeitung (quadrat = Zahl * Zahl) Wertzuweisung --> rechnen Zahl * Zahl und speichere in Variablen quadrat. Deklaration einer Variablen --> Ausgabe (das Quadrat)

Datentyp: int
--> was kann gespeichert werden
--> wie viel byte für die Speicherung

## Projekt Kontrollstrukturen
Kontrollstrukturen:  
Eingabe, Ausgabe, Deklaration von Variablen  
Verzweigung (if, switch)  
Wiederholungen (while, do...while, for)  
Array (foreach)

Aufrufen von Unterprogrammen


## Vererbung
Warum Vererbung?  
1. Überschreiben von Methoden aus Oberklasen --> 

### Bererbung Anwenden

### Vererbung, Überschreiben von Methoden und Polymorphismus 

## Suche

### Suchen in einer Liste
|Titel|
|---|
|Blumen im Sommerwind|
|Der rote Luftballon|
|Und der |
####  
Wir suchen "Und der Rabe lacht"

#### binäre Suche
Voraussetzung: Liste ist aufsteigend sortiert  
Ziel: wir halbieren die Anzahl der if() für die Suche
    1. Wir beginnen in der Mitte der Liste  
    --> wir prüfen, ob "und der Raabe lacht" vor oder nach dem Titel in der Mitte steht

#### LINQ