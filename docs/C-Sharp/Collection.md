# C#
## Datentypen in C#
|Datentyp|Anwendung|Wertebereich|Speicherplatz|
|---|---|---|---|
|bool|Wahrheitswertes|True / False|1 Byte|
|byte|Speicherung Ganzzahl mit 8 Bit ohne Vorzeichen|kleinster Wert: 0 größter Wert: 255|1 Byte|
|short|Speicherung Ganzzahlen mit 16 Bit|kleinster Wert: - 32768 größter Wert: 32767|2 Byte|
|int|Speicherung Ganzzahl mit 32 Bit|kleinster Wert: -2147483648 größter Wert:2147483647 |4 Byte|
|long|Speicherung Ganzzahl mit 32 Bit|kleinster Wert: 922337203685475808 größter Wert: 922372036854775807|8 Byte|
|ushort|Ganzzahl ohne Vorzeichen 8 Bit|kleinster Wert: 0 größter Wert: 65535|2 Byte|
|uint|Ganzzahl ohne Vorzeichen, 64 Bit|kleinster Wert: 0 größter Wert: 4294967295|4 Byte|
|ulong|Ganzzahl ohne Vorzeichen, 64 Bit|kleinster Wert: 0 größter Wert: ca. 1,84467E+19|8 Byte|
|decimal|Dezimalzahl|kleinster Wert: ca. -7,9228E+28 größter Wert: ca. 7,928E+28|16 Byte|
|double|Speicherung einer Gleitkommazahl mit doppelter Genauigkeit (15 Stellen nach Komma)|kleinster Wert: ca. - 1,79769E+308 größter Wert: ca. 1,79769E+308|8 Byte|
|float|Speicherung eienr Gleitkommazahl mit einfacher Genauigkeit (7 Nachkommastellen)|kleinster Wert: ca. -3,403E+38 größter Wert: ca. 3,403E+38|4 Byte|
|char|Speicherung eines Zeichens|ein belibiges Zeichen der Tastatur|2 Byte|
|string|Speicherung einer Zeichenkette|ein beliebiger Text|abhängig von der Anzahl der Zeichen in der Zeichenkette|

## Eingabe in C#
|Entwurf|Umsetzung|
|---|---|
|bool variable;<br>Eingabe variable;| bool variable; <br>bool.TryParse(Console.ReadLine(), out variable);|
|byte variable;<br> Eingabe variable;|byte variable;<br> byte.TryParse(Console.ReadLine(), out variable);|
|short variable;<br>Eingabe variable;| short variable;<br> short.TryParse(Console.ReadLine(), out variable);|
|int variable; <br>Eingabe variable;|int variable;<br> int.TryParse(Console.ReadLine(), out variable);|
|long variable;<br> Eingabe variable;|long variable;<br> long.TryParse(Console.ReadLine(), out variable);|
|ushort variable;<br> Eingabe variable;|ushort variable;<br> ushort.TryParse(Console.ReadLine(), out variable);|
|uint variable;<br> Eingabe variable;|uint variable;<br> uint.TryParse(Console.ReadLine(), out variable);|
|ulong variable;<br>Eingabe ulong;|ulong variable;<br>ulong.TryParse(Console.ReadLine(), out variable);|
|decimal variable;<br> Eingabe variable;| decimal variable;<br> decimal.TryParse(Console.ReadLine(), out variable);|
|double variable;<br>Eingabe variable;|double variable;<br> double.TryParse(Console.ReadLine(), out variable);|
|float variable; Eingabe variable;<br>|float variable;<br> float.TryParse(Console.ReadLine(), out variable);|
|char variable;<br>Eingabe variable;|char variable;<br>char.TryParse(Console.ReadLine(), out variable);|
|string text;<br> Eingabe text;|string text;<br> text = Console.ReadLine();|

## Operatoren in C#
|Operator|Description|
|---|---|
|&&|Logical AND|
|!|Logical NOT|
|&|Binary AND|
|||

## Schleifen


## Datenspeicherung


## Schleifen
### Kopfgesteuerte Schleife
```c#
int index = 0;
while(index<4)
{
    Console.WriteLine()
}

```


### for
