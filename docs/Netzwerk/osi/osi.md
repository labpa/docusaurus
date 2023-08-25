# OSI - Open Systems Interconnection
![Alt text](./img/osi-modell.png)

## 7. Anwendungsschicht - Application Layer
### Aufgabe
+ die Schicht, mit der der BEnutzer in Berührung kommt
+ Anwendungen werden Netzdienste zur Verfügung gestellt
+ reslisiert die Verfügbarkeit der Kommunikationspartnern
+ synchronisiert Prozeduren
+ Einigung auf Verfahren zur Fehlerbehebung und Steuerung der Datenintegrität

### Protokolle
+ Telnet
+ HTTP
+ FTP
+ Browser

## 6. Darstellungsschicht - Presentation Layer
### Aufgabe
+ Datenübersetzung
+ Komprimierung
+ Verschlüsselung

### Protokolle
+ ASCII
+ JPEG
+ MPEG
+ MIDI

## 5. Sitzungsschicht - Session Layer
### Aufgabe
+ Baut die Sitzung zwischen zwei kommunizierenden Hosts auf. Verwaltet und beendet diese Sitzung ebenfalls
+ Synchronisiert Dialoge zwischen den Darstellungsshcichten der beiden Hosts und verwaltet den stattfindenden Datenaustausch
+ bietet Möglichkeiten für die effiziente Datenübertragung und die Dienstgüte **(Quality of Service**)
### Protokolle
+ SOC
+ Niro
+ HEC

## 4. Transportschicht - Transport Layer
### Aufgabe
+ Segmentiert vom sendenden Host-System empfangene Daten und setzt dieße auf dem System des empfangenen Host wider zu einem Transport Datenstrom zusammen.
    + Realisierung eines zuverlässigen Datentransport zwischen zwei Hosts
+ Virtuelle Verbindungen werden aufgebaut, verwaltet und ordnungsgemäß beendet
+ Transportfehler werden erkannt und behoben
+ Datenfluss wird gesteuert

### Protokolle
+ **TCP**
+ **UDP**
+ SPX

## 3 Vermittlungsschicht - Network Layer
### Aufgabe
+ Verbindungsaufbau und Pfadauswahl (Routing) zwischen zwei Hostsystemen
+ Sicherstellung Adressierung der Zielsysteme (IP-Adressen)

### Protokolle
+ **IP**
+ **IP sec**
+ **ICMP**
+ IPX

## 2. Sicherungsschicht - Data Link Layer
### Aufgabe
+ Zuverlässige Übertragung der Daten über eine physikalische Verbindung
+ physikalische Adressierung (MAC Adressen)
+ Netztopologie
+ Netzzugang
+ benachrichtigung bei Fehlern
+ Übertragung der Frames in der richtigen Reihenfolge
+ Flusskontrolle

### Protokolle
+ **Ethernet**
+ IEEE 802.3 / 802.2
+ ATM
+ HDLC

## 1. Bitübertragungsschicht - Physical Layer
### Aufgabe
+ Definiert die elektrischen, mechanischen, prozeduralen und funktionalen Spezifikationen für die Aktivierung, Aufrechterhaltung und Deaktivierung der physikalischen Verbindungen zwischen End-systemen. 
+ Spannungspegel
+ Datenrate
+ Entfernung
+Anschlüsse

### Protokolle
+ EIA/TIA 232
+ RJ45
+ NRZ



## Tabelle
|Nr.|Schicht|Protokoll|Aufgabe|Kopplungselemente|
|---|---|---|---|---|
|7|Anwendungsschicht|HTTP, SMTP, FTP|Funktionen für -Anwendungen - Dateneingabe und Ausgabe|Gateway, Proxy, Content-Switch, Layer 4-7 Switch|
|6|Darstellungsschicht|HTTP, SMTP, FTP|Umwandlung der anforderungsabhängigen Daten in Standardformat|Gateway, Proxy, Content-Switch, Layer 4-7 Switch|
|5|Sitzungsschicht|HTTP, SMTP, FTP|Steuerung der Verbindungen und des Datenaustauschs|Gateway, Proxy, Content-Switch, Layer 4-7 Switch|
|4|Transportschicht|TCP, UDP, SPX|Zuordnung der Datenpakete zu einer Anwendung|Gateway, Proxy, Content-Switch, Layer 4-7 Switch|
|3|Vermittlungsschicht|ICMP, IP, IPsec, IPX|Routing der Datenpakete zum nächsten Knoten|Router, Layer-3-Switch|
|2|Sicherungsschicht|Ethernet, FDDI, MAC, ARCNET|Segmentierung der Pakete in Frames und Hinzufügen von Prüfsummen|Layer-2-Switch, Bridge|
|1|Bitübertragungsschicht|Ethernet, FDDI, MAC, ARCNET|Umwandlung der Bits in ein zum Übertragungsmedium passendes Signal und physikalische Übertragung|Netzwerkkabel, Repeater, Hub|