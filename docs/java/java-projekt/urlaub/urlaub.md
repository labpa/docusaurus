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

## Daten eintragen
### Tabelle Hotel
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

### Tabelle Zimmer
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
