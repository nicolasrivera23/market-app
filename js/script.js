//Easy Mode

//Obtener los productos/items / Crear los productos de forma manual(hardcodear)
//mostrar por consola los objetos / atributos
let productos = [
  {
    "id" : 1111,
    "name" : "Monitor 24 FHD",
    "price" : 50.99,
    "description" : "Esta es una descripción extensa del producto",
  },
  {
    "id" : 2222,
    "name" : "Memoria RAM 32GB",
    "price" : 30.99,
    "description" : "Esta es una descripción extensa del producto"
  },
  {
    "id" : 3333,
    "name" : "Placa de Video 1gb",
    "price" : 32.99,
    "description" : "Esta es una descripción extensa del producto"
  },
  {
    "id" : 4444,
    "name" : "Ryzen 7 8500",
    "price" : 50.99,
    "description" : "Esta es una descripción extensa del producto"
  }
];

function showProducts() {
  for(let i = 0; i < productos.length; i++) {
    console.log("Name:", productos[i].name);
  }
}



//Insertar dentro del DOM los productos como cards (FlexBox)
//selecciono el elemento con el id "productos"
let contenedorProductos = document.getElementById('productos');

//creo un elemento div(todavia no lo insertamos)
let contenedorIndividual = document.createElement('div');

//le asigno la clase "card_container" a el div creado con anterioridad.
contenedorIndividual.classList.add('card_container');


//Creamos divs con la clase card y los insertamos dentro del container.
function insertDOM() {
  //itero todos los items/productos, creo un div card por c/u, agrego los
  // atributos(name, price,etc) y por ultimo agrego la card al container
  productos.forEach(producto => {
    contenedorIndividual.innerHTML += `
      <div class="card">
      <form onsubmit="addProduct()">
        <div>
          <h5 id="nombre" class="card-title">${producto.name}</h5>
          <h5 id="precio" class="card-title">${producto.price} $</h5>
          <div id="botonera">
            <input class="button" type="submit" value="Comprar">
          </div>  
          <p id="description">
            ${producto.description}
          </p>
        </div>
      </div>
    `;
    contenedorProductos.append(contenedorIndividual);
  });
}




/* Crear un botón o similar , que permita a nuestro producto 
mostrar el atributo description (por defecto viene oculto)
*/


/*
Integrar un carrito de compras donde a través de un botón
ubicado en la card , me permita agregar ese producto/item
a una lista de productos deseados / compra.
Utilizando LocalStorage
*/


