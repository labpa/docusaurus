# Lotto Zahlen

## Code
### Main
```java
package programm;

import spielen.Play;

public class Start {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] geratenNummern = Play.Eingabe();
		System.out.print("Ihre Zahlen: ");
		Play.printArray(geratenNummern);
		
		int[] zufallLottoZahlen = Play.ZufallLottoZahlen();
		System.out.print("Die Lottozahlen: ");
		Play.printArray(zufallLottoZahlen );	
		
		int count = Play.vergleichen(geratenNummern, zufallLottoZahlen);
		System.out.println("Anzahl Richtige: "+ count);
		
		
		Play.printGewinne(count);
	}
}

```


### Eingabe Zahlen
```java
//Eingabe der Zahlen
	
	public static int[] Eingabe()
	{
		Scanner scn = new Scanner(System.in);
		int arrayGroesse = 6;
		int[] ergebnis1 = new int[arrayGroesse];
		for(int i = 0; i< ergebnis1.length; i++)
		{
			ergebnis1[i] = begrenzungEingabe(scn, i+1);
		}
		scn.close();
		return ergebnis1;
	}
```

### Zufall Lotto Zahlen
```java
	public static int[] ZufallLottoZahlen()
	{
		Random rnd = new Random();
		int arrayGroesse = 6;
		int[] ergebnis1 = new int[arrayGroesse];
		for(int i = 0; i< ergebnis1.length; i++)
		{
			ergebnis1[i] = rnd.nextInt(49)+1;
		}
	
		return ergebnis1;
	}
```

### begrenzung Eingabe
```java
	public static int begrenzungEingabe(Scanner scn, int zahl )
	{
		while(true)
		{
			System.out.println(zahl + " Zahl:");
			int eingabe = scn.nextInt();
			if(eingabe > 0 && eingabe < 50 )
			{
				return eingabe;
			}
		}
	}
```
### print Array
```java
	public static void printArray(int[] ergebnis1)
	{
		System.out.print("{ ");
		for(int nummer: ergebnis1)
		{
			System.out.print(nummer +  " ");
		}
		System.out.println("}");
	}
```

### Vergleichen Array
```java
	public static void vergleichen(int[] lottozahlen, int[] meinezahlen)
	{
		int count = 0;
		for(int i=0; i<=5; i++)
		{
			for (int j= 0; j<5; j++)
			{
				if(lottozahlen[i] == meinezahlen[j])
				{
					count ++;
				}
			}
		}
		System.out.println(count);
	}
```

### print Gewinne
```java
	public static void printGewinne(int count)
	{
		System.out.println(count);
		if(count < 3)
		{
			System.out.println("Kein Gewinn");
		}
		else if ( count == 3)
		{
			System.out.println("Gutschein für Baumarkt");
		}
		else if( count == 4)
		{
			System.out.println("kleine Topfpflanze");
		}
		else if( count == 5)
		{
			System.out.println("große Topfpflanze");
		}
		else
		{
			System.out.println("ein Eimer Kohle");
		}
	}
```