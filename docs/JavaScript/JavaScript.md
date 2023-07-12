# JavaScript
## Unit-Tests
Unit-Test, auch Modultest oder Komponententest, ist ein Softwareentwicklungsprozess, bei dem die kleinsten prüfbaren Teile oder Einheiten einer Anwendung, die so genannten Units, einzeln und unabhängig voneinender auf ihren Ordnungsgemäßen Betrieb hin untersucht werden.  

Die Idee ist, bei einer gegebenen Anforderung zuerst entsprechende Tests zu schreiben und anschließend das geforderte Programm. Dies hat den Vorteil, dass man jederzeit anhand der Tests überprüfen kann ob die Anforderung erfüllt oder nicht erfüllt ist.

## JavaScript-Programme
JavaScript- Programme bestehen aus einer Reihe von ANweisungen. Jede ANweisung führt eine **elementare Operation** durch. Durch das Ausführen vieler Anweisungen kann man schließlich komplexe Aufgaben lösen. Jede Anweisung schreibt man in eine Zeile und schließt sie mit einem Semikolon ab.


## Variablen

Eine elementare Anweisung ist die Deklaration und Initialisierung einer Variablen. In der Programmierung ist eine Variable ein Behälter für einen Wert. Mit der Anweisung  

    let stadt = 'Prag';
deklariert man eine Variable mit dem Namen stadt und initialisiert sie mit dem Wert 'Prag'. Mit dem Schlüsselwort **let** wird die Variable deklariert. Mit dem Gleichheitszeichen, dem Zuweisungsoperator, weist man der Variablen einen Wert zu. 

Beachte: JavaScript unterscheidet in Groß- und Kleinbuchstaben. stadt und Stadt sind zwei verschiedene Variablen. Man sagt auch: *JavaScript ist case sensitive*.

## Funktionen

Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgeführt werden kann. Eine Funktion kann Parameter entgegennehmen und eine Funktion kann einen Wert zurückgeben. Funktionen kann man in JavaScript auf verschiedene Weisen definieren. Die vielleicht gebräuchlichste ist die sogenannte Funktionsdeklaration. Sie wird mit dem Schlüsselwort *function* eingeleitet. Es folgen:
+ der Name der Funktion,
+ die Parameter eingeschlossen in runde Klammern,
+ die Anweisungen eingeschlossen in geschweiften Klammern.

Mit dem Schlüsselwort *return* kann ein Wert zurückgegeben werden. Gleichzeitig beendet *return* die Funktion. Anweisungen nach einem return werden nicht mehr ausgeführt. Mit

    function farbe(){
        return 'grün';
    }
definieren wir eine Funktion mit Namen farbe, die 'grün' zurückgibt. Die Funktion nimmt keine Parameter entgegen (die runde Klammer ist leer) und sie enthält genau eine Anweisung, die Rückgabe. *Die Funktion wird nicht mit einem Semikolon abgeschlossen.*

Über ihren Namen wird die Funktion aufgerufen:

    let ergebnis = farbe();
Jetzt wird die Funktion ausgeführt. Ihre Rückgabe wird der Variablen ergebnis zugewiesen. ergebnis hat dann den Wert 'grün'.
### Funktionsaufruf
Wichtig ist der Unterscheid zwischen der Definition und dem Aufruf einer Funktion. Mit der Definition, z.B.

    function f() {
        return 'hallo';
    }
wird festgelegt, was die Funktion machen soll. Sie wird dabei nicht ausgeführt. Sie wird ledigleich zur Ausführung bereitgestellt. Erst mit dem Aufruf 

    let x = f();
wird die Funktion ausgeführt. Dann werden die Anweisungen im Funktionsblock der Reihe nach abgearbeitet. Die Rückgabe der Funktion wird in diesem Beispiel der Variablen *x* zugewiesen. *x* erhält den Wert *'hallo'*. Definiert wurde die Funktion mit dem Schlüsselwort *function*. Aufgerufen werden die Funktionen über ihren Namen.

### Funktionen mit Parameter
Funktionen mit Parametern. Mit 
``` js
function gebe(eingabe) {
    return eingabe;
}
```
definieren wir eine Funktion, die den übergebenen Parameter **eingabe** einfach wieder zurückgibt. Parameter sind VAriablen. Sie stehen in der runden Klammer und benötigen nicht das Schlüsselwort **let** zu ihrer Deklaration. Mit
``` js
let ergebnis =gelbe('Apfel');
```
wird die Funktion mit dem Argument **'Apfel'** aufgerufen. 

## Strings
Eine Variable ist ein Behälter für einen Wert. Ein Wert kann ein Text wie **'Hallo Welt!** sein. Werte besitzen dabei einen Typ. Der Typ von **'Hallo Welt'** ist string. Um aus einem Text einen String zu machen, kann man einfache oder doppelte Anführungszeichen verwenden. So ist **'Hallo Welt!'** derselbe String wie **"Hallo Welt!"**.

Mit Strings kann man arbeiten. Man kann sie zum Beispiel verketten. Dies macht man mit dem **+** Zeichen. **'Blau'**+**'meier'** ergibt den String **'Blaumeier'**.

Die folgende Funktion hängt an dem übergebenem Parameter einen Text an und gibt den zusammengesetzten Text zurück:

```js
function praise(name) {
    return name+ ' ist toll!'; 
}
```
So liefert **praise('JavaScript')** den Wert Wert **'JavaScript ist toll!'**.

### String: length
Strings besitzen die 

## Logging
Programmieren beinhaltet immer auch die Suche nach Fehlern. Eine Möglichkeit Fehler zu finden ist das **Loggen**. Man macht während der Programmausführung geziehlte Ausgaben. In JavaScript verwendet man dafür die Function **console.log**:

```js
console.log('Hallo Konsole!');
```
Hier wird der String **'Hallo Konsole!'** ,it **console.log** ausgegeben.

## Arrays
Arrays sind Objekte zur Speicherung vieler, meist ähnlicher Werte. Diese sogenannten Elemente werden in einem Array der Reihe nach abgelegt. Arrays erzeugt man am besten mit eckigen Klammern.

```JS
let sprachen = ['C', 'C++', 'Java', 'JavaScript'];
let primzahlen = [2, 3, 5, 7, 11];
let leeresArray = [];
let a = 'Douglas';
let b = 12;
let c = true;
let allesMoegliche = [a, b, c];
```
Die Elemente eines Arrays können alle einen anderen Datentyp besitzen.