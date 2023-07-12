# JavaScript Hero Lösungen
## Aufgabe 1 Variablen
```JS
    let vorname ='Franz';
```
## Aufgabe 2 Was ist X?
```JS
    'Josefine'
```
## Aufgabe 3 Mehrere Variablen
```JS
    let blume ='Rose';
    let tier = 'Käfer';
```
## Aufgabe 4 Neuzuweisung
```JS
    'Gregor'
```
## Aufgabe 5 Variablen zuweisen:
```JS
'grün'
```
## Aufgabe 6 Funktionen
```JS
function hallo(){
    return 'Hallo Welt!';   
}
```
## Aufgabe 7 Mehrere Funktionen
```JS
function a(){
    return 'Hallo a!';
}
function b(){
    return 'Hallo b!'
}
```
## Aufgabe 8 Funktionsaufruf
```js
    function begruesse(){
        return 'Moin!';
    }
    let begruessung = begruesse();
```

## Aufgabe 9 Was ist x?
``` js
'Hi!'
```
## Aufgabe 10 Parameter
``` js
function echo(ton){
    return ton;
}
```
## Aufgabe 11 Was ist x?
```js
'How do you do?'
```
## Aufgabe 12 Parametername
```js
function ping(pong){
    return pong;
}
```
## Aufgabe 13 Strings
```js
function welcome(Ada){
    return 'Hallo ' + Ada + '!';
}
```
## Aufgabe 14 Was ist x?
```JS
'Wo ist Fred?'
```
## Aufgabe 15 Was ist x?
```js
'Hi Selva! Hi Pola!'
```
## Aufgabe 16 Logging
```js
function logge(){
    console.log('Hallo Konsole!');
}
```
## Aufgabe 17 Variablen loggen
```js
function logge(Pferd){
    console.log(Pferd);
}
```
## Aufgabe 18 Loggen und Strings
```js
function rufe(Werder){
    let ruf = Werder + Werder;
    console.log(ruf);
    return ruf;
}
```
## Aufgabe 19 Silent Teacher
```js
'Mainz bleibt Mainz'
```
## Aufgabe 20 String: length
```JS
function laenge(Franz){
return Franz.length
}
```
## Aufgabe 21 String: toUpperCase()
```JS
function toCase(ida){
let klein = ida.toLowerCase();
let gross = ida.toUpperCase();
return klein + '-' + gross;
}
```
## Aufgabe 22 String: charAt()
```JS
function abkuerzung(Hansestadt, Bremen){
 let erste = Hansestadt.charAt(0);
 let zweite = Bremen.charAt(0);
return erste + zweite;
}
```
## Aufgabe 23 String: trim()
```JS
function firstChar(Rosa){
let trim = Rosa.trim();
return trim.charAt(0);
}
```
## Aufgabe 25 String: indexOf(), 2. Parameter
```JS
function secondIndexOf(eins, zwei){
 let n1 = eins.indexOf(zwei);

return eins.indexOf(zwei, n1 +1);
}
```
## Aufgabe 26 String: substr()
```JS
function firstWord(der){
 let fred = der.indexOf(' ');
 return der.substr(0, fred);
}
```
## Aufgabe 27 String: replace()
```JS
function convert(DatumEnglisch) {
 let DatumDeutsch = DatumEnglisch.replace('-', '.');
 DatumDeutsch = DatumDeutsch.replace('-', '.');
 DatumDeutsch = DatumDeutsch.replace('/', '.');
 DatumDeutsch = DatumDeutsch.replace('/', '.');
 return DatumDeutsch;
}
```
## Aufgabe 28 Zahlen
```JS
function add(eins, zwei){
return eins + zwei;
}
```
## Aufgabe 29 Inkrement
```JS
7
```
## Aufgabe 30 Fahrenheit
```JS
function toFahrenheit(celsius){
return 1.8 * celsius + 32;
}
```
## Aufgabe 31 Modulo
```JS
function einer(plus){
   return plus % 10;
}
```
## Aufgabe 32 Klammern
```JS 
function mittelwert(eins, zwei){
return (eins+zwei)/2
}
```
## Aufgabe 33 Math
```JS
function hypotenuse(cola, bier){
let quadrat = Math.pow(cola, 2) + Math.pow(bier, 2);
return Math.sqrt(quadrat);
}
```
## Aufgabe 34 Min und Max
```JS
function bereichsmittel(eins, zwei, molle){
    let min = Math.min(eins, zwei, molle);
    let max = Math.max(eins, zwei, molle);
    return (min+max)/2;
}
```
## Aufgabe 35 Math.PI
```JS
function flaeche(leti){
let rquadrat = leti * leti;
return rquadrat * Math.PI;
}
```
## Aufgabe 36 Runden
```JS
function round100(eins){
    return Math.round(eins / 100)*100
}
```
## Aufgabe 37 Zufallszahlen
```JS
function dice(){
    return Math.ceil(Math.random()*6);
}
```
## Aufgabe 38 parseInt()
```JS
function add(mal){
let n1 = parseInt(mal, 10);
let plus= mal.indexOf('+');
let after = mal.substr(plus + 1);
let summe = parseInt(after, 10);
let test = n1 + summe;
return test;
}
```
## Aufgabe 39 Number: toString() 
```JS
function digitLength(zahl){
str = zahl.toString();
number = str.replace('.',',');
return number.length;
}
```
## Aufgabe 40 Number: toFixed()
```JS
function toEuro(money){
    kommaStelle = money.toFixed(2);
    numberInGerman = kommaStelle.replace('.',',');
    return numberInGerman + ' €';
}
```
## Aufgabe 41 Warheitswerte
```JS
function nand(idk, kp){
 let und = idk && kp;
 return !und;
}
```
## Aufgabe 42 NOR
```JS
function nor(a, b){
    return !(a||b)
}
```
## Aufgabe 43 XOR
```JS
function xor(h, c){
  return h && !c || !h && c;
}
```
## Aufgabe 44 Strikte Gleichheit
```JS
function gleich(eins, zwei){
    return eins === zwei;
}
```
## Aufgabe 45 Drei gleiche Werte
```JS
function equals(a,b,c){
    let eins = a === b;
    let zwei = b === c;
    return eins && zwei;
}
```
## Aufgabe 46 Gerade Zahlen
```JS
function isEven(eins){
    return eins % 2 === 0;
}
```
## Aufgabe 47 Strikte Ungleichheit
```JS
function unequal(a, b, c){
 let eins= a !== b;
 let zwei= a !== c;
 let drei= b !== c;
 return eins && zwei && drei;
}
```

## Aufgabe 48 Zahlen vergleichen
```JS
function istDreistellig(zahl){
    return zahl >= 100 && zahl >1000;
}
```
## Aufgabe 49 if
```JS
function gleich(eins, zwei){
    let ergebnis ="UNGLEICH";
    if (eins===zwei){
        ergebnis = "GLEICH";
    }
    return ergebnis;
}
```
## Aufgabe 50 Zwei return-Anweisungen
```JS
function schnapszahl(zahl){
 let einerstelle = zahl % 10;
 let zehnerstelle = Math.floor(zahl /10);
if (einerstelle === zehnerstelle) {
 return "Schnaps!";
}
return "Kein Schnaps!";
}
```
## Aufgabe 51 if...else
```JS
function addiereMitZuschlag(eins, zwei){
   let zuschlag = 0;

   if (eins <= 10){
      zuschlag = zuschlag + 1;
   } else{
    zuschlag = zuschlag + 2;
   }

   if (zwei <= 10){
      zuschlag = zuschlag +1;
} else{
   zuschlag = zuschlag + 2;
}
return eins + zwei + zuschlag;
}
```

## Aufgabe 52 else if
```JS
function addiereMitZuschlag(eins, zwei){
let zuschlag = 0;

   if (eins <= 10){
      zuschlag = zuschlag + 1;
    } else if (eins >10 && eins <=20){
      zuschlag = zuschlag + 2; 
    } else {
    zuschlag = zuschlag + 3;
    }

   if (zwei <= 10){
      zuschlag = zuschlag + 1;
    } else if (zwei >10 && zwei <=20){
      zuschlag = zuschlag + 2; 
    } else {
    zuschlag = zuschlag + 3;
    }

return eins + zwei + zuschlag;
}
```
## Aufgabe 53 Arrays
```JS
function toArray(eins, zwei){
   return [eins, zwei];
}
```
## Aufgabe 54 Array-Elemente lesen
```JS
function getFirstElement([eins, zwei]){
    return eins;
}
```

## Aufgabe 55 Array-Elemente schreiben
```JS
function setFirstElement([eins, zwei],drei){
    return [drei, zwei];
}
```
## Aufgabe 56 Array: length
```JS
function getLastElement(eins){
    let letzter = eins.length -1;
    return eins[letzter];
}
```
## Aufgabe 57 Arrays sortieren
### Falsche Lösung, richtiges Ergebnis
```JS
function sortiere(eins){
   eins =[1,2,3];
   return eins;  
}
```
### zweiter Versuch
```js
function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else if (eins < zwei && zwei > drei){
        ausgabe = [eins, drei, zwei];
    }else if (zwei < eins && eins < drei){
        ausgabe = [zwei, eins, drei];
    }else if ( eins > drei && zwei < drei){
        ausgabe = [zwei, drei, eins];
    }
    return ausgabe;
}
```
### driter Versuch
![Alt text](./img/aufgabe57.PNG)
```JS
/* dritter Versuch */
function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else if (eins < zwei && zwei < drei){
        ausgabe = [eins, drei, zwei];
    }else if (zwei < eins && eins > drei){
        ausgabe = [zwei, eins, drei];
    }else if (zwei < eins && eins > drei){
        ausgabe = [zwei, drei, eins ];
    } else if (drei < zwei && zwei < eins){
        ausgabe = [ drei, zwei, eins];
    } else ausgabe = [drei, eins, zwei];
    return ausgabe;
}
```

### vierter Versuch
![Alt text](./img/zweitesStruktogramm.PNG)
```JS
/* vierter Versuch */
function sortiere([eins, zwei, drei]){
    ausgabe = [];
    if (eins < zwei && zwei < drei){
        ausgabe = [eins, zwei , drei];
    }else if (eins < zwei && zwei > drei){
        ausgabe = [eins, drei, zwei];
    }else if (zwei > eins && drei > eins){
        ausgabe = [zwei, eins, drei];
    }else if (zwei > eins && drei < eins){
        ausgabe = [zwei, drei, eins ];
    } else if (drei > zwei && zwei > eins){
        ausgabe = [ drei, zwei, eins];
    } else ausgabe = [drei, eins, zwei];
    return ausgabe;
}
```