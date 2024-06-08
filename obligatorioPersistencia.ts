import * as fs from 'node:fs';

//creo archivo txt con un array numerico
const precios:number []= [525, 3500, 400, 1999];
let preciosString:string=precios.toString()

fs.writeFileSync('./persistencia1.txt',preciosString);

//creo archivo txt con un array de string
const productos:string[]=["leche", "galletitas", "harina", "queso"];
let contenido: string= " ";

for(let i:number=0; i<productos.length; i++){
    contenido += `${productos[i]} `
}

fs.writeFileSync('./persistencia2.txt', contenido);
// recupero los datos de persistencia1.txt y los muestro como array de tipo string por consola
const datosPrecios: string= fs.readFileSync('./persistencia1.txt','utf8')
const datosPrecios2:string =datosPrecios.trim();
const nuevoArray:string[]=datosPrecios2.split(" ");
    console.log(nuevoArray)

// recupero datos de persistencia2.txt y los muestro en consola como un array
const datosProductos: string= fs.readFileSync('./persistencia2.txt','utf8')
const datosProductos2:string =datosProductos.trim();
const nuevoArreglo:string[]=datosProductos2.split(" ");
    console.log(nuevoArreglo) 