# Zusammenfassung

## Netzwerk



## Datenbank / SQL
### Relationale Datenbank Normalformen
#### Normalieierung
Ziel der Normalisierung:  
gewährleistung perfekte Balance aus Redundanz, Perfoamance und Flexibilität für eine Datenbank 

+ 1 Normalform  
    + Jedes Attribut der Relation hat einen atomaren Wertebereich und ist frei von wiederholungsgruppen
+ 2 Normalform  
    + Die Punkte der ersten Normalform sind erfüllt.
    + jedes Nichtschlüsselattribut von jedem Schlüsselkandidaten voll funktional abhängig ist.
    + jede Relation modelliert nur einen Sachverhalt
+ 3 Normalform
    + Die Punkte der 2. Normalform müssen erfüllt sein.
    + Kein Nichtschlüsselattribut ist von einem anderen Nichtschlüsselattribut abhängig


## Software
### Softwarequalität ISO 9126
+ Funktionalität -> Software soll sich Ihrer anforderung entsprechend verhalten
    + Angemessenheit -> Wie schnell/langsam ist die Software, nicht unnötig schwierig
    + Interoperabilität -> Software soll kompatibel zu anderer Software sein -schnittstellen
    + Ordnungsmäßigkeit -> Sachlioch korrekt arbeiten -> Rechtliche Vorgaben einhalten
    + Sicherheit -> Software muss sicher sein. Konzept mit Berechtigungsrollen. Einhaltung Datenschutz
+ Benutzbarkeit -> Usability zusammengesetzt aus:
    + Attraktivität -> Software soll gut/ansprechend/modern aussehen. Ansprechend für den Endkunden. Das nutzen der Software soll spaß machen
    + Bedienbarkeit -> Barrierefreiheit. Mitdenken von verschiedenem Vorwissen. Anfänger/Fortgeschrittene/Profi -> Hilfe für Anfänger, dadurch nicht nervig für Profi werden
    + Erlernbarkeit -> Hilfe für Einsteiger. Gute Dokumentation für einen ersten positiven Eindruck
    + Verständlichkeit -> Texte müssen Verständlich sein. Abkürzungen vermeiden. Wörter lieber ausschreiben
+ Änderbarkeit -> Anforderung auf Technischer Ebene. Weiterentwickeln, Pflegen, Warten auch längerfristig
    + Analysierbarkeit -> Lässt sich im Code herausfinden wann und warum Fehler auftreten? Schreiben von Loggdateien um mögliche Fehler zu finden.
    + Modifizierbarkeit -> Code so schreiben, dass später leicht anpassbar. Design Pattern -> Entwurfsmuster. Open / Close Prinzip -> Offen für Erweiterungen, geschlossen für Änderungen. -> Hinzufügen neuer Klassen anstelle ändern aller alten Klassen. Solid Prinzip
    + Testbarkeit -> Testbaren Code erzeugen. Abhängigkeiten vermeiden. In Isolation testen. Bsp. Verwenden einer Test Datenbank und nicht die Originale. Dependency Injection = Abhängigkeitsinjektion
    + Stabilität -> Software darf nicht bei einer kleinen Änderung kaputt gehen. Abhängigkeiten / Vererbung beachten. Rekrosionstest / Rekrosion verhindern (Rekrosion = unendlicher Vorgang)
+ Effizienz -> Auf Ressourcen achten. Ressourcen sparsam verwenden
    + Verbrauchsverhalten -> entweder schneller Code oder Ressourcen sparen. Schnelle Anwendungen verbrauchen mehr Speicher. Notwendigkeit prüfen
    + Zeitverhalten -> Anforderungen im Kontext betrachten -> Viele Ressourcen in Verwendung = hoher Stromverbrauch. Optimierung Speicher / Laufzeitverhalten
+ Übertragbarkeit -> Software soll auf unterschiedlichen Umgebungen laufen. Datentransfer zwischen unterschiedlichen Betriebssystemen.
    + Anpassbarkeit -> Software sollte sich an unterschiedliche Betriebssysteme entsprechend anpassen. CPU verändert sich entsprechend. Anpassbar an die Umgebung. Idiomatisch funktionieren
    + Austauschbarkeit -> alte Software durch neue ersetzen. Daten von alter Software in neue Übertragen. Export Funktion bedenken.
    + Installierbarkeit -> Wie lässt sich die Software installieren? Sind anpassungen an die Umgebung möglich? Datenbankverbindung einrichten. Vernünftige Dokumentation -> Anleitung
    + Koexistenz -> Software kann eventuell nicht gleichzeitig mit anderer Software installiert werden. Ports blockieren sich oder Schreiben in die Selbe Datei. Standards nutzen und die Anwendung konfigurierbar machen. Ports lassen sich anpassen etc.
+ Zuverlässigkeit -> Läuft die Software vernünftig oder stürzt sie ständig ab? Dauerhaftes zuverlässiges Arbeiten ermöglichen
    + Fehlertoleranz -> reagiert auf Fehler bei User eingabe. Stürzt nicht direkt bei Falscheingabe ab oder Schreibt die Falscheingabe direkt in die Datenbank. Auftreten von Fehlern durch eingeschränkte möglichkeiten / klare vorgaben vorbeugen.
    + Reife -> In welcher Version befindet sich die Software. Nur ausgereifte Software weitergeben. Keine Bananenprodukt = Nachreifen beim Kunden
    + Wiederherstellbarkeit -> Nicht greifbares Problem. Fehlerfreie Software ist nicht möglich, aber Zustände sollten wiederherstellbar sein. Bsp. Datenbank ausversehen gelöscht-> UNDO Rückgängig machen. Zwischenspeichern von Versionen um Datenverlust zu vermeiden.



## Cloud Computing
### Cloud Definition
+ Cloud Computing nutzt virtualisierte IT-Ressourcen. 
+ Ressourcen könnne gefühlt beliebig erweitert werden
+ Nutzung unabhängig von Endgerät und Ort -> BYOD = Bring your own device
+ Pay per use konzept
+ Bedarfsgesteuerte Netzwerkzugriffe auf einen gemeinsamen Pool von konfigurierbaren Ressourcen
+ Ist über eine Selbstbedienungsschnittstelle erreichbar

+ On-Premise -> Traditionelles lokales Hosting von Daten
+ On-Demand -> Ressourcen werden aus der Cloud bezogen

### Cloud Typen
+ Private Clouds -> On-Premise
    + eigene Hardware
    + wie eine klassische Cloud nutzbar
    + Investition von Hardware verursacht hohe Kosten in der Anschaffung
    + Volle Kostenkontrolle bei Hard und Software
    + größere Transparenz bei Sicherheit und Zugriffskontrolle
    + gesicherte Umsetzung gesetzlicher Vorgaben
    + Komplexität
    + geografische Verfügbarkeit
    + Eigene Verantwortung für Wartung und Upgrade etc.


+ Public Clouds
    + von Cloud Providern angeboten und gehostet
    + Gefühlt unbegrenzte Skallierungs und Ressourcenerweiterung
    + keine Eigene Administration benötigt
    + keine Vorabinvestitionen
    + keine fixen Kosten
    + Pay by Use
    + Ein Minus sind eventuelle Sicherheitsbedenken

+ Hybrid Clouds
    + Vorteile auf Privater und Public Cloud können kombiniert werden
    + Datenhoheit in eigener private Cloud 
    + Bei Lastspitzen temporäre Nutzung der public Cloud

+ Multi Clouds
    + Bezieht sich auf die Verwendung mehrere Cloud-Dienstanbieter für die Bereitstellung von IT-Ressourcen und Diensten.
    + Public Cloud, Hybrid Cloud und und Private Cloud werden kombiniert.
    + Workload wird je nach Bedarf auf die geeignetste Plattform verteilt 

### Typen von Cloud Services
+ IaaS  -> Infrastructure as a Service
    + komplette Hardware wird Virtualisiert
    + Eigene Installation von Betriebssystem und Anwendung
    + hohes Administratives vorwissen nötig

+ PaaS  -> Platform as a Service
    + fertig konfigurierte Systeme werden bereitgestellt
    + freie Verfügbarkeit über Anwendungen
    + Sicherer Betrieb in Eigenverantwortung
    + Anbieter sorgt für den sicheren Betrieb der Plattform

+ SaaS  -> Software as a Service
    + virtualisierte fertige Softwarelösungen werden bereitgestellt
    + Software muss nur noch mit eigenen Daten gefüllt werden
    + Cloudprovider administriert die gesamte Anwendung
    + teuerste Variante
    



### Virtuelle Maschinen VM
+ Virtueller Rechner / VM - Virtuelle Maschine
    + Programm, dass sich genau so verhält als wäre es ein physischer Computer
    + VM lässt sich wie ein Programm kopieren und kann so schnell eingesetzt werden
    + Bereitstellen virtueller, nicht physischer Ressourcen
    + Emuliert Hardware
    + virtuelle Netzwerke
    + virtuelle Bildschirme

+ Bare-Metal-Virtualisierung
    + direkter Zugriff auf physische Ressourcen ermöglichen eine optimale Leistung und skalierbarkeit
    + Isolation der VM gewährleistet erhöhte Sicherheit
    + geringe Latenzzeit
    + Spezifisches Fachwissen ist bei der Konfiguration erforderlich
    + hoher Ressourcenverbrauch
    + Ressourcenmanagement und Livemigration sind herausfordernd

+ Hosted Virtualisierung
    + Einfache Installation und Konfigaration
    + Flexibilität bei der Nutzung vorhandener Betriebssysteme
    + geringer Ressourcenbedarf
    + mehrere VMs könnne gleichzeitig auf einem Host betrieben werden
    + Abhängigkeit von Host-Betriebssystem 
    + Skalierbarkeit auf Host ebene begrenzt




## WISO



## Marketing

### AIDA Prinzip
+ A - Attention -> Aufmerksamkeit schaffen
+ I - Interest  -> Interesse des Kunden wecken
+ D - Desire    -> Wunsch des Kunden, dass Produkt besitzen zu wollen
+ A - Action    -> Auslösen Kaufhandlung


