# Datenbank

## Aufgabe 1
### Datenbanksystem (DBS)
+ Ein Datenbanksystem dient zur elektronischen Verwaltung von Informationen.
+ Speichert Daten effizient und strukturiert
+ Ermöglicht es Informationen für eine effiktive Nutzung abzurufen
+ Besteht aus zwei Komponenten
    + Datenbankmanagementsystem
    + Datenbank

### Datenbankmanagementsystem (DBMS)
+ Software um eine Datenbank zu verwalten
+ Organisation und Strukturierung der Daten
+ Über das DBMS können Datenbanken erstellt und bearbeitet werden


### Datenbank (DB)
+ organisierte Sammlung von strukturierten Informationen oder Daten

+ Relationale Datenbanken
    + Daten werden in Tabellen gespeichert
    + Abfrage durch SQL
    + Basis von Business Software
+ Objektorientierte Datenbank
    + Informationen werden in Form von Objekten dargestellt
    + Ideal für die Kombination mit objektorientierter Programmierung
+ NoSQL
    + Speicherung von unstrukturierten und semistrukturierten Daten
    + Für das Management von Big Data geeignet


### Entity-Relationship-Diagramm (ER-Diagramm)
+ Grundlage für einen Datenbankentwurf
+ Planung für Aufbau und Funktionen der Datenbankstruktur
+ Standard für die Datenmodellierung
+ Typisierung von Objekten, ihrer relationalen Beziehungen untereinander und der über sie zu führenden Attribute

|Bezeichnung|Beschreibung|Typ|Darstellung|
|---|---|---|---|
|**Entitäten**|individuell identifizierbare Objekte der Wirklichkeit|**Entitätstyp:** Typisierung gleicher Entitäten|![Alt text](./img/Entit%C3%A4tstyp.png)|
|**Beziehungen**|Verknüpfungen / Zusammenhänge zwischen zwei oder mehreren Entitäten|**Beziehungstyp:** Typisierung gleichartiger Beziehungen|![Alt text](./img/Beziehungstyp.png)|
|**Eigenschaften / Attribute**|Merkmale, Kennzeichen, informationsdetail, dass einem konkreten Objekt zugeordnet ist|**Attribut:** Typisierung gleichartiger Eigenschaften|![Alt text](./img/Attribut.png)|

### SQL Structured Query Language

### Datenredundanz
+ Daten liegen Doppelt vor
+ Identische Daten sind an meheren Stellen in einer Tabelle gespeichert
+ Datenredundanz führt dazu, dass Abfragen einer Datenbank falsche Ergebnisse liefern.
+ Die Eindeutigkeit der Datenbankeinträge gehr verloren


### Datenintegrität bzw. Datenkonsistenz
+ Korrektheit, Vollständigkeit und Konsistenz der Daten
    + korrekt
    + einheitlich
    + aktuell

### Datensicherheit
+ Beschreibt die Sicherheit von Daten vor dem Zugriff unbefugter
+ Verschlüsselung
+ Passwörter Hashen
+ Zugangskontrolle

## Aufgabe 2
### Redundanzen
+ In der Tabelle gibt es eine Spalte für Vorname und Nachname und zusätzlich noch mal eine Spalte für Name. Die Spalte Name darf so nicht bestehe da er Redundant sprich doppelt vorkommt. 
### Inkonsistenz
+ Unter der Spalte Name werden Vorname und Nachname gespeichert.
+ Alle Informationen müssen Atomar in einer Tabelle vorliegen

### Datensicherheit
+ Passwörter dürfen niemals  in einer unverschlüsselten Tabelle gespeichert werd
+ Passwörter niemals ohne es zu hashen speichern


