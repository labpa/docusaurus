# Urlaub
## SQL
### Datenbank erstellen
```sql
create database Urlaub;
```

### Tabellen erstellen
#### Tabelle hotel
```sql
create table hotel( hid int auto_increment primary key, titel varchar(50), land varchar(50));
```

#### Tabelle zimmer
```sql
create table zimmer( hid int, kategorie varchar(50), preis decimal(6,2), ausstattung varchar(200), primary key (hid, kategorie));
```

### Fremdschlüssel hinzufügen
+ referenzielle Integrität
+ Ich darf in tabelle zimmer nur hid eintragen, die in tabelle Hotel sind (Fremdschlüssel). Wird Hotel gelöscht, wird auch das Zimmer gelöscht
+ wenn hid in hotel update, dann auch Zimmer update
```sql
alter table zimmer add foreign key (hid) references hotel(hid) on delete cascade on update cascade;
```

### Daten eintragen
#### Tabelle Hotel
```sql
insert into hotel (titel, land) values ("Seeperle", "Deutschland");
```
#### Datensatz
|titel|land|
|---|---|
|Seeperle|Deutschland|
|Peachperl|Spanien|
|Baude auf der Alm|Schweiz|
|Die Bettenbox|Spanien|

#### alles Tabelle Hotel
```sql
select * from hotel;
```
![Alt text](./img/abfrageHotel.PNG)

#### Tabelle Zimmer
```sql
insert into zimmer values (1, "Standard", 69.99, "Bergblick, Fernseher, Safe");
```

#### Datensatz
|hid|kategorie|preis|ausstattung|
|---|---|---|---|
|1|Deluxe|89.99|Meerblick, Fernseher, Safe, Balkon|
|1|Standard|69.99|Bergblick, Fernseher, Safe|
|2|Deluxe|79.99|Meerblick, Fernseher, Safe|
|2|Standard|49.99|Straßenseite, Fernseher|
|3|Standard|99.99|Fernseher, Safe, Minibar|
|4|Standard|39.99|Fernseher|

#### alles Tabelle Zimmer
```sql
select * from zimmer;
```
![Alt text](./img/abfrageZimmer.PNG)

### Änderungen
#### Eintragen neues Hotel
+ Was brauchen wir?
    + Name
    + Land
+ Was ist Rückgabe?
    + eine Zahl (rows affected)

```sql
 insert into hotel (titel, land) values ("Adlon", "Deutschland");
```
#### Eintragen neues Zimmer
+ Was brauchen wir?
    + hid
    + kategorie
    + preis
    + ausstattung
+ Was ist Rückgabe?
    + eine Zahl

```sql
insert into zimmer (hid, kategorie, preis, ausstattung) values (5, "suite", 129.99, "Whirlpool, Fernseher, Konferenzraum, Balkon");
```

#### Aktualisieren Preis
+ Was brauchen wir?
    + hid
    + kategorie
+ Was ist Rückgabe?
    + eine Zahl

```sql
update zimmer set preis = 5500 where hid=5 and kategorie="suite";
```

#### Ausgabe alles Hotels
+ Was wir brauchen?
    + nix
+ Was ist Rückgabe?
    + eine Tabelle

```sql
select hid, titel, land from hotel;
```

#### Ausgabe aller Hotels inkl. Zimmer
+ Was brauchen wir?
    + nix
+ Was ist Rückgabe?
    + Tabelle

```sql
select hotel.hid, titel, land, kategorie, preis, ausstattung from hotel inner join zimmer on hotel.hid = zimmer.hid;
```
![Alt text](./img/innerJoin.PNG)

#### Ausgabe Hotel mit Suche nach Land
+ Was brauchen wir?
    + land
+ Was ist Rückgabe?
    + tabelle
    + hid 
    + titel 
    + land 

```sql
select hid, titel, land from hotel where land="Deutschland";
```