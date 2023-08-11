# Java-projekt
## Entwurf
![Alt text](./img/entwurf_personal.png)

## Anforderung
SQl-Datenbank
+ Erstellen einer Datenbank personal
+ Erstellen einer Tabelle Mitarbeiter
    + id als Primärschlüssel
    + nachname varchar(50)
    + gehalt decimal(6,2)
    + anmerkung varchar(200)
+ Eintragen von 5 Datensätzen     

## SQL-Datenbank
### Erstellen der Datenbank
```sql
create database personal;
```
### Benutzen der Datenbank
```sql
use database personal;
```
### Erstellen Tabelle Mitarbeiter
```sql
create table mitarbeiter;
```
### Werte festlegen
```sql
create table Mitarbeiter( id int auto_increment primary key, nachname varchar(50), gehalt decimal(6,2), anmerkung varchar(200));
```
### Tabelle beschreiben lassen
```sql
describe mitarbeiter;
```
### Datensätze eintragen
```sql
insert into mitarbeiter (nachname, gehalt, anmerkung) values ("Berger", 4950.20, "Statistiker");
```
### Alles anzeigen lassen
```sql
select * from mitarbeiter;
```