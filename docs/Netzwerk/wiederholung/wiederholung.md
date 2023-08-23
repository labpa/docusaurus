# Netzwerk Wiederholung

## DHCP
+ automatisches bereitstellen von IP-Adressen
+ IP-Grundkonfiguration
+ Port 67 & 68
+ Dora Prinzip  
+ Relay-Agent
+ DHCP-Option / APIPA (Automatic Private IP Addressing)

### DHCP-Dora
![Alt text](./img/DHCP-Dora.png)
+ 4 wichtige Schritte zum DHCP-Prozess
1. Discover - Anfrage per LAN-Broadcast nach DHCP-Server
    + Broadcast - 255.255.255.255
2. Offer - Server bietet IP-Adressen an
3. Request - Anfordern von einem Lease / der Information
4. Acknownledge

### DHCP - APIPA
+ Automatic Private IP-Adressing
+ IP-Bereich 169.254.0.1b- 169.254.255.254 /16
+ Bekommt der Client aus irgend welchen Gründen keine IP-Adresse vom DHCP-Server vergibt er sich selbst eine APIPA
+ Client selbst legt die APIPA selbst fest.
+ Client kontrolliert selbst, dass entsprechende APIPA nicht schon vergebn ist

### DHCP - Relay-Agent
+ zwischen verschiedenen Netzen DHCP Informationen auszutauschen
+ Wenn ein Router DHCP-Broadcast erhält 
    + -> wird es in der Regel  Verworfen
    + -> Relay-Agent: leitet es weiter
## Ports
|Portnummer| Protokoll|
|---|---|
|20|FTP-Daten|
|21|FTP-Steuerung|
|22|SSH|
|23|Telnet|
|25|SMTP - Simple Mail Transfer Protocol|
|33|DNS|
|67 / 68|DNS / DHCP|
|80|HTTP|
|443|HTTPs|
|110|Post Office Protocoll|

## Private IP-Bereiche
|A|B|C|
|---|---|---|
|10.0.0.0/8|172.16.0.0/12 - 172.31.255.255|192.168.0.0/16|

IPv4: 127.0.0.0/8
Ipv6: ::1

## DNS - Domain Name System
+ Namensauflösung von IP-Adressen <--> Domainname
+ DNS-Hierarchie
+ Lokal oder Internet
+ FQDN - Fully Qualified Domain Name
+ Top Level Domain (TLD)  

|Geo|Organisatorische|
|:---:|:---:|
|de|com|
|at|net|
|ch|biz|
|fr|org|
|us|net|
|tv|info|

## Kabel
|Lichtwellenleiter|Metallischeleiter|Freiraumübertragung|
|---|---|---|

Twisted Pair -> mindestens zwei isolierte adern umeinenader geschwungen werden. In modernen Kabeln verdrillt. Stecker RJ45

|Cat|Geschwindigkeit|Frequenz|Verwendung/Standard|
|---|---|---|---|
|3||||
|4||||
|5||||
|5e||||
|6||||
|6a||||
|7|||
|7a|||
|8|||

|Monomode / Singlemode| Multimode|
|---|---|
|Kern deutlich kleiner|Einsatz bis zum Host|
|Teurer|Kürzere Distanzen|
|Laser||
|Längere Distanz||