# Logische Funktionen
## UND / AND / Konjunktion
Das UNS ist eine Grundverknüpfung, die nach dem Prinzip arbeitet, wenn zwei Zustände oder Aussagen zutreffen, dann ist das Ergebniss wahr. Wenn A und B, dann ...  
Der Ausgang Q ist immer dann 1, wenn die Eingänge A und B gleich 1 sind.   
Das UND wird als Konjunktion bezeichnet und im englischen als AND benannt.
### UND Wahrheitstabelle
|A|B|Q|
|---|---|---|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|
### AND JavaScript
```JS
&&
```

## ODER / OR / Disjunktion
Das ODER ist eine Grundverknüpfung, die nach dem Prinzip arbeitet, wenn der eine oder der andere Zustand oder die eine oder die andere Aussage zutrifft, dann ist das Ergebnis wahr: Wenn A oder B, dann ...  
Der Ausgang Q ist immer dann 1, wenn die Eingänge A oder B gleich 1 sind.  
Das ODER wird als Disjunktion bezeichnet und im Englischen als OR benannt.
### ODER Wahrheitstabelle
|A|B|Q|
|---|---|---|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|
### OR JavaScript
```JS
||
```

## NICHT / NOT / Negation
Das NICHT ist eine Grundverknüpfung, die nach dem Prinzip arbeitet, wenn ein Zustand oder eine Aussage wahr ist, dann ist das Ergebnis unwahr. Oder umgekehrt, wenn ein 
Zustand oder eine Aussage unwahr ist, dann ist das Ergebnis wahr. Das NICHT wird als Negation bezeichnet und im englischen als NOT benannt. Im allgemeinen Sprachgebrauch würde man es als Verneinung bezeichnen.
### NICHT Wahrheitstabelle
|A|Q|
|---|---|
|1|0|
|0|1|
### NOT JavaScript
```JS
!
```

## NAND / NICHT-UND / NUND
Das NAND ist ein aus UND und NICHT zusammengeschaltetes Element. Es arbeitet wie ein UND, dessen Aussage negiert ist.   
Der Ausgang Q ist gleich 1, wenn Ausgang A oder B gleich 0 sind.
### NICHT-UND Wahrheitstabelle
|A|B|Q|
|---|---|---|
|0|0|1|
|0|1|1|
|1|0|1|
|1|1|0|
### NAND JavaScript
```JS
function nand(a, b) {
  return !(a && b);
}
```

## NOR / NICHT-ODER / NODER
Das NOR ist ein aus ODER und NICHT zusammengeschaltetes Element. Es arbeitet wie ein ODER, dessen Aussage negiert ist.  
Der Ausgang Q ist immer dann 1, wenn die Eingänge A und B gleich 0 sind.
### NICHT-ODER Wahrheitstabelle
|A|B|Q|
|---|---|---|
|0|0|1|
|0|1|0|
|1|0|0|
|1|1|1|
### NOR JavaScript
```JS
function nor(a, b){
    return !(a || b);
}
```
## XNOR / Exklusiv-NICHT-ODER / Äquivalenz
Für die logische Verknüpfung XNOR gilt, dass der Ausgang Q immer dann 1 ist, wenn die Eingänge A und B gleich sind. Also wenn beide gleich 1 oder gleich 0 sind.
Es gelten folgende Regeln:  
+ Der Ausgang Q ist 0, wenn alle Eingänge unterscheidlich sind.
+ Der Ausgang Q ist 1, wenn alle Eingänge gleich sind.
### Exklusiv-NICHT-ODER Wahrheitstabelle
|A|B|Q|
|---|---|---|
|0|0|1|
|0|1|0|
|1|0|0|
|1|1|1|
### XNOR JavaScript
```JS
function xnor(a,b){
    return a === b; 
}
```

