# Java Syntax
## Eclipse
### Erstellen eines neuen Projektes
File -> new -> JavaProject
### Erstellen Package
src -> new -> Package
### Erstellen Klasse

## Main
```java
package start; //
import inhalt.Funki; //import von inhalt.Funki


public class Programm {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		
		Funki.beispiel4(); //Funktion 4 wird ausgeführt
		
	}

}

```


## Syntaxregeln
+ Klassennamen, Enum und Schnittstellen beginnen mit einem Großbuchstaben
+ Namen von Variablen, Methoden und Parametern beginnen mit einem Kleinbuchstaben
+ Konstante ausschließlich Großbuchstaben




## Funktion
```java
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

## enum
```java
package inhalt;

public enum Art {
	
	HORROR, ROMAN, KRIMI

}
```
## Paket Buch 

```java
package inhalt;

public class Buch {
	//eine Klassenvariable für das Zählen aller Objekte
	private static int anzahl = 0;
	
	//Objekteigenschaften
	private String nummer;
	private String titel;
	private double preis;
	private Art kategorie;
	
	//Konstruktoren
	public Buch(String titel, Art kategorie)
	{
		this.titel = titel;
		this.kategorie = kategorie;
		this.preis = 10.00; //Standardpreis
		
		//Buchnummer festlegen
		anzahl++;
		this.nummer = "B" + anzahl;
	}
	
	public Buch(String titel, Art kategorie, double preis)
	{
		this(titel, kategorie); //anderen Konstruktor der gleichen Klasse aufrufen
		this.preis = preis ;
	}

	
	//Lese- und Schreibzugriff für Eigenschaften 
	public double getPreis() {
		return preis;
	}

	public void setPreis(double preis) {
		this.preis = preis;
	}

	public static int getAnzahl() {
		return anzahl;
	}

	public String getNummer() {
		return nummer;
	}

	public String getTitel() {
		return titel;
	}

	public Art getKategorie() {
		return kategorie;
	}
	
	
	@Override	//-> Annotation -> nicht zwingend notwendig
	public String toString() {
		return "Buch [nummer=" + nummer + ", titel=" + titel + ", preis=" + preis + ", kategorie=" + kategorie + "]";
	}

}
```

## Programm
- Klasse Programm als Main 

```java
package start;

import inhalt.*; //gibt alles von inhalt aus

public class Programm {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//eine Tabelle mit 4 Büchern -- ein Array
		Buch tabelle[] = new Buch[4];
		tabelle[0] = new Buch("Der rote Luftballon", Art.HORROR, 59.99);
		tabelle[1] = new Buch("Fledermaus auf Abwegen", Art.HORROR, 49.89);
		tabelle[2] = new Buch("Rosenduft in der Luft", Art.ROMAN, 39.99);
		tabelle[3] = new Buch("Blut am Fenster", Art.KRIMI, 39.89);
		
		//Ausgabe aller Bücher in der Tabelle
		int anzahl = tabelle.length; //Anzahl der Zeilen in Tabelle
		for(int i = 0; i < anzahl; i++)
		{
			//Ausgabe eines Buches -- verwenden von tostring() [überschrieben]
			System.out.println( tabelle[i]);
		}
	}
}

```
### Tabelle mit vier Büchern erstellen
```java
		Buch tabelle[] = new Buch[4];
		tabelle[0] = new Buch("Der rote Luftballon", Art.HORROR, 59.99);
		tabelle[1] = new Buch("Fledermaus auf Abwegen", Art.HORROR, 49.89);
		tabelle[2] = new Buch("Rosenduft in der Luft", Art.ROMAN, 39.99);
		tabelle[3] = new Buch("Blut am Fenster", Art.KRIMI, 39.89);
```

### Erste möglichkeit for-Schleife
```java
		int anzahl = tabelle.length; //Anzahl der Zeilen in Tabelle
		for(int i = 0; i < anzahl; i++)
		{
			//Ausgabe eines Buches -- verwenden von tostring() [überschrieben]
			System.out.println( tabelle[i]);
		}
```

### Zweite möglichkeit for-Schleife
```java
		for(Buch zeile:tabelle)
		{
			System.out.println(zeile);
		}
```

## Datenstrom eingabe
- Datenstrom zu Standardeingabe
```java
	public static void eingabe()
	{
		System.out.println("Eingabe: ");
		Scanner cmd = new Scanner (System.in);
		 String beispiel = cmd.nextLine();
		 cmd.close();
		 System.out.println("Hier wird der eingegebene Text ausgegeben: " + beispiel);
	}
```

## Zählen
```java
		//Ausgabe der Anzahl aller Bücher mit Auflage >8000
		int count = 0;
		for(int i = 0; i < anzahl; i++)
		{
			if(tabelle[i].getAuflage() > 8000)
			{
				count++;
			}
		}
		System.out.println("Anzahl Auflage > 8000: " + count);
```

## Constructor chaining

```java
	public Artikel(int aid, String bezeichnung, double preis, int menge) 
	{
		this(bezeichnung, preis, menge);	//Constructor Chaining
		this.aid = aid;
	}
	
	public Artikel(String bezeichnung, double preis, int menge) 
	{
		this.bezeichnung = bezeichnung;
		this.preis = preis;
		this.menge = menge;
	}
``` 