# SQL - Structured Query Language

## Erstellen einer Datenbank mit XAMPP und MYSQL
### Starten
+ Browser C -> XAMPP Starten -> Apache und MYSQL  
+ mysql -u root -p

### Datenbank erstellen
```sql
CREATE DATABASE [IF NOT EXIST] datenbankname;
```
Eckige Klammern werden nicht geschrieben. Ihr Inhalt ist Optional

### Datenbanken anzeigen
```sql
SHOW DATABASES;
```

### Datenbank auswählen
```sql
USE datenbankname;
```

### Datenbank löschen
```Sql
DROP DATABASE datenbankname;
```

### Tabelle anlegen

### Vorhandene Tabellen anzeigen
```sql
SHOW TABLES;
```