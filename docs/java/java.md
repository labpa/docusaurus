# JAVA

## Programme
- eclipse
- XAMPP
- SzeneBuilder
- jdk Java development kit
    - enthalten: java-API
    - enthalten: Compiler
    - linker
- cmd -> javac

## JAVA 
### Erstes Programm
- Ordner erstellen in C -> Dateien
- Notepad++

```Java
public class Programm
{
	public static void main(String... args)
	{
		System.out.println("Hallo Welt");
	}
}
```

![Alt text](./img/erstes.PNG)  
Alles in einer Klasse -> Klasse öffentlich

### Eingabeaufforderung cmd
![Alt text](./img/cmd.PNG)  
+ Compilieren über die Eingabeaufforderung (cmd)
```
javac Programm.java
```
+ Ausführen cmd
```
java Programm
```
+ alles anzeigen 
```
dir
```

## Konsolenanwendungen
+ Pakete
    + Klasse 
        + eine public class steht in einer Datei. Der name der Datei entspricht dem Namen der Klasse
        + Abstrakte Klassen / Oberklassen
    + Interfaces / functional Interfaces

## Arrays / Funktionen

start -> Programm -> +main()  
inhalt -> Funki -> alle Funktionen

## Code
### Steuerrechner
```java
package paket;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Programm {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Typ Zuweisung Variablen
		double netto,brutto;
		String wahl;
		
		//Ausgabe
		System.out.println("Netto: ");
		
		//Eingabe -- wir wrappen den Eingabestrom
		Scanner cmd = new Scanner(System.in);
		try
		{
			//die nächste Eingabe ist ein double
			netto = cmd.nextDouble();
			
			System.out.println("Wähle: 1 - 19%, 2 - 7%, 3 - 0%");
			wahl = cmd.next();
			cmd.close(); //Ressource schließen, wenn nicht mehr gebraucht
			switch(wahl)
			{
			case "1": brutto = netto * 1.19; break;
			case "2": brutto = netto * 1.07; break;
			case "3": brutto = netto * 0; break;
			default: throw new Exception("Falsche wahl"); // neue Ausnahme auswerfen wird mit catch abgefangen
			}
			
			//Ausgabe
			System.out.println("Brutto: " + brutto);
		
			//Formatierte Ausgabe
			System.out.printf("Brutto: %.2f", brutto);
		}
		catch(InputMismatchException ime) //Unterklasse
		{
			System.out.println("Sorry, das ist keine Zahl ");
		}
		catch(Exception e) //Oberklasse
		{
			System.out.println(e.getMessage());
		}
	}
}
```
