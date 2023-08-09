# Funktionen

## Eingabe von Text
+ Text wird eingegeben
+ Text wird in einer Variablen gespeichert
+ Text wird ausgegeben

```java
	//Eingabe und Ausgabe von Text
	public static void eingabe()
	{
		System.out.println("Eingabe: ");
		Scanner cmd = new Scanner (System.in);
		 String beispiel = cmd.nextLine();
		 cmd.close();
		 System.out.println("Hier wird der eingegebene Text ausgegeben: " + beispiel);
	}
```

## Fläche Rechteck
+ eingabe Länge, eingabe breite
+ rechnet Länge * Breite
Ausgabe Fläche Rechteck

```java
	//Fläche Rechteck
	public static void rechteck()
	{
		double laenge, breite, flaeche;
		System.out.println("Laenge? ");
		Scanner cmd = new Scanner(System.in);
		laenge = cmd.nextDouble();
		System.out.println("Breite? ");
		breite = cmd.nextDouble();
		cmd.close();
		flaeche = laenge * breite;
		System.out.println("Flaeche: " + flaeche + " m^2");
	}
```

## Fläche Quadrat
+ eingabe Länge
+ rechnet a * a
+ Ausgabe Fläche Quadrat

```java
	//Fläche Quadrat
	public static void quadrat()
	{
		double a, flaeche;
		System.out.println("Laenge? ");
		Scanner cmd = new Scanner(System.in);
		a = cmd.nextDouble();
		cmd.close();
		flaeche = a * a;
		System.out.println("Flaeche: " + flaeche + " m^2");
	}
```
## Gehaltsrechner
+ Stundeneingabe
+ Stundenlohn = 18.50
+ Bei mehr als 170 Stunden wird für die Mehrarbeitszeit ein Überstundenzuschlag von 20% gezahlt

```java
	//Gehaltsrechner
	public static void gehalt()
	{
		int stunde;
		double lohn;
		System.out.println("Anzahl Stunden: ");
		Scanner cmd = new Scanner(System.in);
		stunde = cmd.nextInt();
		cmd.close();
		lohn = stunde * 18.50;
		if(stunde > 170)
		{
			lohn = lohn + (stunde - 170) * 18.50 * 0.2;
		}
		System.out.println("Ihr Lohn: " + lohn + " Eur");
	}
```

## Summe - while
+ Bedingungsgesteuerte Schleife

```java
	//Summe aus 10 eingegebenen Zahlen wird gebildet
	public static void summe()
	{
		int zahl, anzahl = 0, summe = 0;
		
		while(anzahl < 10)
		{
			System.out.println("Zahl: ");
			Scanner cmd = new Scanner(System.in);
			zahl = cmd.nextInt();
			cmd.close();
			summe = summe + zahl;
			anzahl ++;
		}
		System.out.println("Summe: " + summe);
	}
```



