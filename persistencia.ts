import { isUtf8 } from 'node:buffer';
import * as fs from 'node:fs';
//let contenido:string ="nuevo contenido";

//fs.writeFileSync('./test.txt', contenido);

const nombres: string[] = ["Juan", "amalia", "nicolas"];
let contenido:string= "";

for(let i:number=0; i<nombres.length; i++){
    contenido += `${nombres[i]} `
}

fs.writeFileSync ('./test.txt', contenido)

const datos: string= fs.readFileSync('./test.txt', 'utf8');
const datos2:string = datos.trim();
const nuevoArray:string[]=datos2.split(" "); 
console.log (nuevoArray)