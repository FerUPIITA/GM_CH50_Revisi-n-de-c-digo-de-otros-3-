// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

// Seleccionamos elementos del DOM
const listaProductos = document.getElementById("lista-de-productos"); //Se le agrego una variable descritvivo, en este caso listaProductos, ademas e agrego una coma
const inputFiltro = document.querySelector('input');  //Se le agrego una variable descritvivo, en este caso inputFltro
const botonDeFiltro = document.querySelector("button"); //Se agregó esta linea para poder apicar acciones en el botton

// Se agregó una función flecha para mostrar productos en la lista
const displayProductos = (productos) => {
  listaProductos.innerHTML = "";  // Se agrega para poder limpia datos de la lista antes de agregar elementos


  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaProductos.appendChild(d); // Se corrigió el error de 'li'
  }
}; //Se agregó la ;

  displayProductos(productos); //Se agregó ;
  //const botonDeFiltro = document.querySelector("button");

  botonDeFiltro.onclick = function () {
    while (listaProductos.firstChild) {//Modifique el nombre del ID
      listaProductos.removeChild(listaProductos.firstChild);//Modifique el nombre del ID
    }

    const texto = inputFiltro.value.toLowerCase(); // Modificque para que sea el uso correcto de la variable
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto);

    for (let i = 0; i < productosFiltrados.length; i++) {
      var d = document.createElement("div"); //Se agregó la ;
      d.classList.add("producto"); //Se agregó la ;

      var ti = document.createElement("p"); //Se agregó la ;
      ti.classList.add("titulo"); //Se agregó la ;
      ti.textContent = productosFiltrados[i].nombre; //Se agregó la ;

      var imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);

      d.appendChild(ti); //Se agregó la ;
      d.appendChild(imagen); //Se agregó la ;

      listaProductos.appendChild(d); //Se agregó la ;
    }
  };  //Se agregó la ;

  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }; //Se agregó la ; 