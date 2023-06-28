# JS-Hero

## Aufgabe 27

```js
function convert(DatumEnglisch) {
 let DatumDeutsch = DatumEnglisch.replace('-', '.');
 DatumDeutsch = DatumDeutsch.replace('-', '.');
 DatumDeutsch = DatumDeutsch.replace('/', '.');
 DatumDeutsch = DatumDeutsch.replace('/', '.');
 return DatumDeutsch;
} 
```