# Zahlensysteme
## Hexadezimalsystem
Das Hexadezimalsystem wird für die verkürzte Darstellung von Binätzahlen verwendet. Jeweils vier benachbarten Binärziffern werden in einer Hexadezimalziffer zusammengefasst.  
Hexadezimal hat die Basis 16.  
Ziffern: 0; 1; 2; 3; 4; 5; 6; 7; 8; 9; A; B; C; D; E; F
A = 10; B = 11; C = 12; D = 13; E = 14; E = 15; 
### Hilfstabelle: Vielfache von 16
|n|n * 16|
|---|---|
|1|16|  
|2|32|   
|3|48|
|4|64|
|5|80|
|6|96|
|7|112|
|8|128|
|9|144|
|10|162|
|11|176|
|12|192|
|13|208|
|14|224|
|15|240|
|16|256|

### Hilfstabelle: Sechzehnerpotenzen
|n|16^n|
|---|---|
|0|1|
|1|16|
|2|256|
|3|4 096|
|4|65 536|
|5|1 048 576|
|6|16 777 216|
|7|268 435 456|
|8|4 294 967 296|

## Binärzahlen
Binär steht für ein Zahlensystem bei dem es nur zwei Ziffern gibt. Die 0 und die 1. Der Begriff bezieht sich auf ein beliebiges Codier- und Decodiersystem, bei dem er nur zwei mögliche Zustände gibt.

## Umrechnung Binär -> Hexadezimal
+ Methode: 4er Gruppen von Binärzahlen bilden.
+ Die umzuwandelnde Binärzahl wird von rechts nachg links in 4er Bündel von Binärziffern gruppiert. Anschließend werden die Bündel in  die entsprechenden Hexadezimalziffern umgewandelt.
### Hilfstabelle: 4er-Bündel von Binärziffern und Hexadezimalziffern
|Dez|Hex|
|---|---|
|0000|0|
|0001|1|
|0010|2|
|0011|3|
|0100|4|
|0101|5|
|0110|6|
|0111|7|
|1000|8|
|1001|9|
|1010|A|
|1011|B|
|1100|C|
|1101|D|
|1110|E|
|1111|F|

## Überlauf und "Carry Flag"
Bei der Addition kann es zum Überlauf kommen, falls für das Ergebnis ein begrenzter Speicherplatz zur Verfügung steht.  
Der Prozessor merkt sich sieses Ereignis durch Setzen eines speziellen Status-Bits ("Carry Flag"). Dieses Bit kann im weiteren Programmverkauf abgefragt werden, falls auf den Überlauf reagiert werden muss.  


## Binärprefix
|||
|---|---|
|1024 Byte = 1 Ki Byte|1000 Byte = 1 KByte|
|1024 KiByte = 1 MiByte|1000 KByte = 1 MByte|
|1024 MyByte = 1 GiByte|1000 MByte = |
|1024 GiByte = 1 TiByte||
|1024 TiByte = 1 PiByte||
|1024 PiByte = 1 EiByte||
|||
