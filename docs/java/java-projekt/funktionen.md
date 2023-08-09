# Funktionen

## Eingabe von Text
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
