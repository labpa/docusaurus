# Typescript

## Tuttorial
Link zum Tutorial:  
https://reactjs.de/artikel/react-tutorial-deutsch/

## Online-Editor
Link zum Online-editor:  
https://codesandbox.io/s/

## Anbindung
### HTML
Die index.html Datei enthält ein div mit der id root. Später ist das der gesamte HTML-Code der React App.
```html
<div id = "root">
```

### React TypeScript
Zugriff auf das Element mit der id root im Beispiel über src/index.tsx:
```js
const rootElement = document.getElementById("root");
```

## React-Elemente und JSX
h1, div etc. sind bei React TypeScript React-Elemente. Jedes React-Element ist ein JavaScript Objekt, das ein bestimmtes HTML Element, wie es im DOM erscheint beschreibt.
Aus:  
```js
const Title = <h1>Hello world.</h1>;
```
wird von React die JSX Syntax eine Funktion namens _jsx aufgerufen.
```js
const Title = _jsx("h1", { children: "Hello world."});
```

## React Komponente
Eine Funktion, die ein React-Element zurück gibt, ist eine React Komponente. Bei Komponenten handelt es sich in React um wiederverwendbare Bausteine eines User-Interfaces.  
Das HTML-Gerüst kann in React direkt in JavaScript geschrieben werden.
Aus:  
```html
<div class="App">
    <h1>React Tutorial</h1>
    <h2>Ein Untertitel</h2>
</div>
```
wird:  
```js
const App = () => (
    <div ClassName="App">
        <h1>React Tutorial</h1>
        <h1>Ein Untertitel</h2>
    </div>
);
```


## Code
### App.tsx
```js
import "./styles.css";

const LoadingText = () =>{
  const isLoading = false;
return <div>{isLoading ? <p>Loading ...</p> : <h2>Fertig geladen</h2>}</div>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Time now: {new Date().toISOString()}</h2>
      <LoadingText />
    </div>
  );
}
```