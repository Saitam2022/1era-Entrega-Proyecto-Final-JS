"use strict";

/* Se muestra un mensaje de bienvenida */

function saludar() {
    console.log("Sean Bienvenidos a nuestra Web!");
}
saludar();

/* Se usa la clase DATE para generar la fecha */

const hoy = new Date("April 26, 2022")
console.log(hoy.toLocaleString())

/* Usando While, se repite el bucle hasta que el user escriba ESC o 123 */

let entrada = prompt("Ingrese un dato");
while (entrada != "ESC" && entrada != 123) {
    entrada = prompt("Ingrese otro dato");
}

/* Se usa una función con la propiedad lenght para recorrer los instrumentos musicales de una casa de venta de instrumentos iterando el array */

const instrumentos = ["Guitarra", "Bajo", "Batería", "Piano", "Saxo", "Trompeta", "Acordeón", "Violín", "Ukelele", "Congas", "Bandoneón"];
function recorrerArray(array) {
    let largoArray = array.length;
    for (let i = 0; i < largoArray; i++) {
        console.log(array[i]);
    }
}
recorrerArray(instrumentos);

/* Con el mismo ejemplo de arriba se usa una función con la propiedad unshift para agregar un instrumento musical (Armónica) al comienzo de la lista iterando el array */

instrumentos.unshift("Armónica");
console.log(instrumentos);

/* Con el mismo ejemplo se usa una función con la propiedad push para agregar un instrumento musical (Clarinete) al final de la lista iterando el array */

instrumentos.push("Clarinete");
console.log(instrumentos);

/* Con una lista de venta de instrumentos musicales , utilizo el método reduce para obtener un valor único al iterar sobre el array. (En este caso emulo una compra web sumando el precio de todos los productos elegidos). */

const misCompras = [
    { nombre: 'Armónica', precio: 10000 },
    { nombre: 'Ukelele', precio: 8700 },
    { nombre: 'Guitarra Acústica', precio: 55000 }
]

const total = misCompras.reduce((acc, el) => acc + el.precio, 0)
console.log(total)

/* Con una lista de accesorios de instrumentos musicales, utilizo el método map para crear un array con todos los elementos del array original. (En este caso para que me devuelva todos los accesorios que tenemos en stock). */

const stockAccesorios = [
    { nombre: 'Palillos Bateria Vic Firth 5a Punta Madera', precio: 2500 },
    { nombre: 'Pua Stagg Guitarra Pack 10 unidades', precio: 400 },
    { nombre: 'Encordado Guitarra Criolla Medium Magma', precio: 900 },
    { nombre: 'Micrófono Vocal Shure SM58', precio: 30000 },
    { nombre: 'Micrófono Shure SM57', precio: 27000 },
    { nombre: 'Cencerro Jam Block LP Medium Pitch Red', precio: 13900 },
    { nombre: 'Cencerro Jam Block LP High Pitch Blue', precio: 12000 },
    { nombre: 'Soporte de Micrófono Samson Bt4 pie reforzado', precio: 9050 },
    { nombre: 'Cable XLR (cannon) Micrófono profesional 10 Metros', precio: 1900 },
]

const nombres = stockAccesorios.map((el) => el.nombre)
console.log(nombres)

/* Con la misma lista de accesorios de instrumentos musicales, utilizo el método map y un return para, por ejemplo en este caso, aumentar el precio de todos los accesorios que tenemos en stock un 20%. */

const actualizado = stockAccesorios.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.2
    }
})

console.log(actualizado)

/* Con la misma lista de accesorios de instrumentos musicales, utilizo el método filter, en este caso, para que sólo me retorne un nuevo array con la palabra Cencerro. Si no hay coincidencias, retorne un array vacío. */

const resultado = stockAccesorios.filter((el) => el.nombre.includes('Cencerro'))
const resultado2 = stockAccesorios.filter((el) => el.precio < 300)

console.log(resultado)
console.log(resultado2)

/* Con una lista de compras del supermercado usando el método join para armar una lista de compras, creando una variable y también llamando directo al console.log */

const listaSupermercado = ["Aceite", "Leche", "Fideos", "Vino", "Gaseosa", "Yerba", "Café", "Manzana", "Banana", "Tomate", "Lechuga"];
let a = listaSupermercado.join(" - ");
console.log(a);
console.log(listaSupermercado);

/* Con esta misma lista de compras del supermercado usando el método includes, pregunto: la lista incluye comprar Café? */

console.log("Café? " + listaSupermercado.includes("Café"));

/* Con esta misma lista de compras del supermercado usando el método includes, pregunto: la lista incluye comprar Queso? */

console.log("Queso? " + listaSupermercado.includes("Queso"));

/* Con una lista de herramientas de obra, combino un array con objetos usando for...of (con id) */

const herramientas = [
    { id: 1, nombre: "Martillo" },
    { id: 2, nombre: "Masa" },
    { id: 3, nombre: "Pala" },
    { id: 4, nombre: "Pico" }
];
for (const item of herramientas) {
    console.log(item.id);
    console.log(item.nombre);
}

/* Con una lista de artículos de librería, combino un array con objetos y producto usando un booleano, también utilizando for...of y sumando el IVA al precio del artículo*/

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("Lapicera", "120"));
productos.push(new Producto("Lápiz", "100"));
productos.push(new Producto("Goma", "70"));
productos.push(new Producto("Hojas", "500"));
for (const producto of productos)
    producto.sumarIva();
console.log(productos);



