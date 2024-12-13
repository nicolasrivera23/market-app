//Easy Mode

//Obtener los productos/items / Crear los productos de forma manual(hardcodear)
//mostrar por consola los objetos / atributos
let productos = [
  {
    "id" : 1111,
    "name" : "Monitor 24 FHD",
    "price" : 50.99,
    "description" : "El monitor ofrece una excelente resolución de imagen y calidad, siendo ideal para juegos gracias a su alta tasa de refresco. Su diseño robusto y minimalista, junto con la facilidad de ajuste de colores, mejora la experiencia visual."
  },
  {
    "id" : 2222,
    "name" : "Memoria RAM 32GB",
    "price" : 30.99,
    "description" : "Esta es una descripción extensa del producto"
  },
  {
    "id" : 3333,
    "imagen" : "img/foto.jpg",
    "name" : "Placa de Video 1gb",
    "price" : 32.99,
    "description" : "Esta es una descripción extensa del producto"
  },
  {
    "id" : 4444,
    "name" : "Ryzen 7 8500",
    "price" : 50.99,
    "description" : "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de rápida y volátil.Procesador gráfico AMD Radeon"
  }
];
//Insertar dentro del DOM los productos como cards (FlexBox)
//selecciono el elemento con el id "productos"
let contenedorProductos = document.getElementById('productos');

//creo un elemento div(todavia no lo insertamos)
let contenedorIndividual = document.createElement('div');

//le asigno la clase "card_container" a el div creado con anterioridad.
contenedorIndividual.classList.add('card_container');

//Cargar productos
document.addEventListener("DOMContentLoaded", (event) => {
  productos.forEach(producto => {
    contenedorIndividual.innerHTML += `
      <div class="card">
      <form id="my_form${producto.id}">
        <div>
          <output id="nombre" name="nombre">${producto.name}</output>
          <br>
          <output id="precio" name="precio">${producto.price}</output>
          <br>
          <button id="btnMasInfo${producto.id}" class="button" onclick="masInfo(${producto.id})">+ info</button>
          <div id="botonera${producto.id}">
            <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
          </div>  
          <div>
            <output id="description${producto.id}" class="description">
              ${producto.description}
              <br>
                <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
            </output>
          </div>
        </div>
      </div>
    `;
    contenedorProductos.append(contenedorIndividual);
  });
});


function masInfo(id) {
  event.preventDefault();
  let idx = id.toString();
  //seleccionamos los elementos, le damos un id unico
  //y los guardamos en una variable
  let param = 'description' + idx;
  let btnMasInfo = 'botonera' + idx;
  let btnComprar = 'btnMasInfo' + idx;
  let btnComprarDesc = 'comprar' + idx;

  //ocultamos o mostramos los elementos
  document.getElementById(param).style.display = "block";
  document.getElementById(btnComprar).style.display = "none";
  document.getElementById(btnMasInfo).style.display = "none";
}

function comprar(id) {
  //Extraigo los datos a guardar
  let idx = id.toString();
  let param = 'my_form' + idx;
  let form = document.getElementById(param);
  console.info('Tipo ' + typeof form);
  const nombre = form.elements['nombre'].value; // accessing element by name
  const precio = form.elements['precio'].value; // accessing element by name
  //const firstElement = form.elements[0]; // accessing first element by index no.
  console.log("Cantidad de elementos: "+ form.length);
  console.log("Nombre " + nombre);
  console.log("precio2 " + precio);

  //Armo el objeto a guardar
  let pedido = {
    "id" : Date.now(),
    "productoId" : idx,
    "name" : nombre,
    "price" : precio,
    "amount" : 1
  }
  //LocalStorage
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(pedido.id, JSON.stringify(pedido));
  } 
  
  return false;
}


//Creamos divs con la clase card y los insertamos dentro del container.
function insertDOM() {
  //itero todos los items/productos, creo un div card por c/u, agrego los
  // atributos(name, price,etc) y por ultimo agrego la card al container
  productos.forEach(producto => {
    contenedorIndividual.innerHTML += `
      <div class="card">
      <form id="my_form${producto.id}">
        <div>
          <output id="nombre" name="nombre">${producto.name}</output>
          <br>
          <output id="precio" name="precio">${producto.price}</output>
          <br>
          <button id="btnMasInfo${producto.id}" class="button" onclick="masInfo(${producto.id})">+ info</button>
          <div id="botonera${producto.id}">
            <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
          </div>  
          <div>
            <output id="description${producto.id}" class="description">
              ${producto.description}
              <br>
                <button id="comprar${producto.id}" class="button" type="submit" value="Comprar">
            </output>
          </div>
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


//crear sección para mostrar los productos
let lista = document.getElementById("listaDeseados");
Object.keys(localStorage).forEach(function(key){
  lista.innerHTML += localStorage.getItem(key);
});

function eliminarPedidos() {
  localStorage.clear();
}