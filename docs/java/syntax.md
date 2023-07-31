# Java Syntax
## Eclipse
### Erstellen eines neuen Projektes
File -> new -> JavaProject
### Erstellen Package
src -> new -> Package
### Erstellen Klasse

## Main
```Java
package start; //
import inhalt.Funki; //import von inhalt.Funki


public class Programm {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		
		Funki.beispiel4(); //Funktion 4 wird ausgeführt
		
	}

}

```

## Funktion
```Java
public static void beispiel4() // Funktion
	{
		int stunden;
		double lohn;
		
		Scanner cmd = new Scanner(System.in); //Text 
		System.out.println("Anzahl Stunden: ");
		stunden = cmd.nextInt();
		cmd.close();
		lohn = stunden * 18.50;
		
		if(stunden > 170)
		{
			lohn = lohn + (stunden - 170) * 18.50 * 0.2;
		}
		
		System.out.println("Ihr Lohn: " + lohn); //Ausgabe höhe Lohn
	}
```