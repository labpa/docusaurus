# Git

## zurück zur letzten Repro
+ Auf welche Version soll gewechselt werden
    + `git reset --hard <version>`
+ Wechseln
    + `git push --force`

## push existing local project to Gitlab
+ Erstellen neues Repository auf Gitlab
+ URL kopieren 
+ Erstelle in Lokalem Projekt ein Git Ordner -> git init
+ `git remote add gitlab < Link einfügen > `
+ `git push -u -f gitlab master` 