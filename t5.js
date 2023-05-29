//Declaración de variables

//Números
let varnumber1 = 10;
let varnumber2 = 5;

console.log(varnumber1);
console.log(varnumber2);

alert(`La variable numérica 1 es:  ${varnumber1} y la variable numérica 2 es: ${varnumber2}`);

document.getElementById('number1').textContent = `La variable numérica 1 es:  ${varnumber1.toString()}`;
document.getElementById('number2').textContent = `La variable numérica 2 es: ${varnumber2.toString()}`;

//String
let varstring1 = "Esto es un string";
let varstring2 = " o cadena de texto";

console.log(varstring1);
console.log(varstring2);

alert('La variable string 1 es: ' + varstring1 + ' y la variable string 2 es: ' + varstring2);

document.getElementById('string1').textContent = `La variable string 1 es: ${varstring1}`;

document.getElementById('string2').textContent = `La variable string 2 es: ${varstring2}`;


//Boolean
let varboolean = true;
console.log(varboolean);
alert('La variable boolean es: ' + varboolean);
document.getElementById('boolean').textContent = 'La variable es: ' + varboolean.toString();


//Array
let vararray = [0, 10, 'Digital', 'FEM'];
console.log(vararray);
document.getElementById('array').textContent = 'El arreglo es: ' + vararray.toString();


//Object
let varobj = {
    nombre: 'Carmen',
    apellido: 'Borja',
    promo: 'Digital Academy'
};
console.log('El objeto es: ',varobj);
alert('El objeto es: ' + JSON.stringify(varobj, null, 4));
document.getElementById('objectclass1').textContent = 'El objeto es:';
document.getElementById('objectclass1').innerHTML = (varobj.nombre + " , " + varobj.apellido + " , " + varobj.promo);

//Operaciones matemáticas

//Suma
let varsuma = varnumber1 + varnumber2;
console.log(varsuma);
document.getElementById('suma').textContent = `El resultado es: ${varsuma.toString()}`;

//Resta
let varresta = varnumber1 - varnumber2;
console.log(varresta);
document.getElementById('resta').textContent = 'El resultado es:' + varresta.toString();


//Multiplicación
let varproducto = varnumber1 * varnumber2;
console.log(varproducto);
document.getElementById('producto').textContent = 'El resultado es: ' + varproducto.toString();

//División
let vardivision = varnumber1 / varnumber2;
console.log(vardivision);
document.getElementById('division').textContent = `El resultado es: ${vardivision}`;

//Residuo
let varresiduo = varnumber1 % varnumber2;
console.log(varresiduo);
document.getElementById('residuo').textContent = `El resultado es: ${varresiduo}`;

//Concatenación
let varcadena = varstring1 + varstring2;
console.log(varcadena);
document.getElementById('cadena').textContent = `El resultado de concatenar es: ${varcadena}`;

//Funciones

//Función que devuelve un saludo por pantalla y consola
let varnombre = "María";
function saludo(nombre) {
    let varsaludo = "Hola " + varnombre;
    return varsaludo;
}
console.log(saludo(varnombre));
alert(saludo(varnombre));
document.getElementById('saludo').innerHTML = saludo(varnombre);

//Función que devuelve la suma de sus parámetros
function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(varnumber1, varnumber2));
document.getElementById('sumar').textContent = `El resultado es: ${sumar(varnumber1, varnumber2).toString()}`;

//Función para determinar si un número es par o impar
function paronopar(num) {
    if (num % 2 == 0) {
        return "El número es par";
    } else return "El número es impar";
};
console.log(paronopar(varnumber2));
document.getElementById('parono').textContent = 'El número es:';
document.getElementById('parono').innerHTML = paronopar(varnumber2);

//Creación del objeto carro
const carro = {
    anyo: '2019',
    marca: 'Mazda',
    color: 'azúl',
    puertas: '4',
    propietario: {
        dni: '09784628x',
        nombre: 'Ana',
        apellido: 'Sánchez',
    }
};

//Función que devuelve la marca del carro
function marcaCarro(){
    return carro.marca;
}
console.log(marcaCarro());
document.getElementById('marca').innerHTML = marcaCarro();

//Función que devuelve el número de puertas del carro
function puertasCarro(){
    return carro.puertas;
}
console.log(puertasCarro());
document.getElementById('puertas').innerHTML = puertasCarro();

//Función que devuelve el nombre del propietario del carro
function nombrePropietarioCarro(){
    return carro.propietario.nombre;
}
console.log(nombrePropietarioCarro());
document.getElementById('nombrepropietario').innerHTML = nombrePropietarioCarro();

//Arrays

//Creación de array de 10 números
let numeros = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

//Función para imprimir un array por consola
function mostrarArreglo(arreglo){
    for (let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}
mostrarArreglo(numeros);

//Función que añada un número al array

//Con Push - Inserta al final
let numeros1 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function agregaralfinal(arreglo,num) {
    return arreglo.push(num);
}
agregaralfinal(numeros1, varnumber1);
mostrarArreglo(numeros1);

//Con Unshift - Inserta al principio
let numeros2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function agregaralprincipio(arreglo,num) {
    return arreglo.unshift(num);
}
agregaralprincipio(numeros2, varnumber2);
mostrarArreglo(numeros2);

//Con lenght - Inserta al final
let numeros3 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function agregarconLenght(arreglo, num) {
    return arreglo[arreglo.length] = num;
}
agregarconLenght(numeros3, varnumber1);
mostrarArreglo(numeros3);

//Con Splice - Inserta en una posición dada
let numeros4 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function agregarconSplice(arreglo, num) {
    return arreglo.splice(3, 0, varnumber2);
}
agregarconSplice(numeros4, varnumber1);
mostrarArreglo(numeros4);

//Función para eliminar los números pares del array
let numeros5 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function eliminaPares(arreglo) {
    for (let i = 0; i <= arreglo.length; i++){
        if (arreglo[i] % 2 == 0) {
            arreglo.splice(i, 1);
        };
    };
};
eliminaPares(numeros5);
mostrarArreglo(numeros5);

//Función que devuelve el número mayor de un arreglo
let numeros6 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function numeroMayor(arreglo) {
    return Math.max(...arreglo);
};
console.log(numeroMayor(numeros6));

//Función que devuelve el número menor de un arreglo
let numeros7 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function numeroMenor(arreglo) {
    return Math.min(...arreglo);
};
console.log(numeroMenor(numeros7));

//Función para convertir en minúsculas todas las letras de un texto
function minusculas(texto) {
    return texto.toLowerCase();
};
console.log(minusculas(varstring1));

//Función para convertir a mayúsculas todas las letras de un texto
function mayusculas(texto) {
    return texto.toUpperCase();
};
console.log(mayusculas(varstring1));

//Función que reciba un array de nombres y convierta la primera letra de cada uno a mayúsculas
let arraynombres = ['ana', 'maría', 'josé', 'luis'];

function nombresMayusculaInicial(nombres) {
    let i;
    for (i in nombres){
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);  
    };
    return nombres;
};
nombresMayusculaInicial(arraynombres);
console.log(arraynombres);

//Manipulación del DOM

//Mostrar mensaje cuando se hace click en un botón
document.getElementById('botonMensaje').onclick = () => {
    alert('Has presionado el botón');
    document.getElementById('mensaje').textContent = 'Has presionado el botón';
};

//Cambiar el contenido de un elemento
document.getElementById('botonCambiar').onclick = () => {
    document.getElementById('contenido').textContent = 'Este es el nuevo contenido';
};


//Ocultar y mostrar elementos html usando propiedad display
document.getElementById('botonOcultar').onclick = () => {
    document.getElementById('contenidoOculto').style.display = 'none';
};

document.getElementById('botonMostrar').onclick = () => {
    document.getElementById('contenidoOculto').style.display = '';
};

/*Ocultar y mostrar elementos html usando propiedad visibility
document.getElementById('botonOcultar').onclick = () => {
    document.getElementById('contenidoOculto').style.visibility = 'hidden';
};

document.getElementById('botonMostrar').onclick = () => {
    document.getElementById('contenidoOculto').style.visibility = 'visible';
};
*/

//Creación de array de 10 nombres
let arraynombres10 = ['Ana', 'María', 'Laura', 'Ivanna', 'Natasha', 'Luis', 'Carlos', 'Esteban', 'Mateo', 'Sebastian'];

//Función para mostrar por pantalla los 10 nombres
function mostrarNombres(nombres) {
    alert(nombres.toString());
}
mostrarNombres(arraynombres10);

document.getElementById('nombres').textContent = arraynombres10.toString();

//Creación de array de números
let arrayNumeros = [0, 10, 20, 30, 40, 50, 60];
alert('El arreglo de números es: ' + arrayNumeros);
document.getElementById('arrayNumeros').textContent = `El array es: ${arrayNumeros.toString()}`;

//Función para mostrar por pantalla la longitud del array de números
function longitud(array) {
    let long = array.length;
    alert('La longitud del array es: ' + long);
    document.getElementById('longitud').textContent = `La longitud del array es ${long.toString()}`;
}
longitud(arrayNumeros);

//Agregar nodos para imprimir un formulario
let nodo = document.createElement('form');
nodo.setAttribute("action", "");
nodo.setAttribute("method", "post");
nodo.setAttribute("enctype", "multipart/form-data");
nodo.setAttribute("id","formulario")
document.getElementById('divFormulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Nombre:'
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "text");
nodo.setAttribute("id", "nombre");
nodo.setAttribute("value", " ");
nodo.setAttribute("maxlength", "30");
nodo.setAttribute("size", "30");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Apellidos:'
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "text");
nodo.setAttribute("id", "apellidos");
nodo.setAttribute("value", " ");
nodo.setAttribute("maxlength", "60");
nodo.setAttribute("size", "60");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Contraseña:'
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "password");
nodo.setAttribute("id", "password");
nodo.setAttribute("value", "");
nodo.setAttribute("maxlength", "10");
nodo.setAttribute("size", "10");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'DNI:'
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "text");
nodo.setAttribute("id", "dni");
nodo.setAttribute("value", "");
nodo.setAttribute("maxlength", "12");
nodo.setAttribute("size", "12");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Sexo:'
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "radio");
nodo.setAttribute("id", "hombre");
nodo.setAttribute("value", "hombre");
nodo.setAttribute("name", "sexo");
nodo.setAttribute("checked", "unchecked");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Hombre'
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "radio");
nodo.setAttribute("id", "mujer");
nodo.setAttribute("value", "mujer");
nodo.setAttribute("name", "sexo");
nodo.setAttribute("checked", "checked");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Mujer'
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Incluir mi foto: ';
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "file");
nodo.setAttribute("value", "Seleccionar archivo");
nodo.setAttribute("name", "adjunto");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "checkbox");
nodo.setAttribute("id", "suscripción");
nodo.setAttribute("value", "");
nodo.setAttribute("checked", "checked");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = 'Suscribirme al boletín de novedades';
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('br');
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "submit");
nodo.setAttribute("name", "guardar");
nodo.setAttribute("value", "Guardar");
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = '&nbsp';
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('span');
nodo.innerHTML = '&nbsp';
document.getElementById('formulario').appendChild(nodo);

nodo = document.createElement('input');
nodo.setAttribute("type", "reset");
nodo.setAttribute('name', 'borrar');
nodo.setAttribute("value", "Borrar");
document.getElementById('formulario').appendChild(nodo);

//Crear nodos para imprimir una tabla
function generaTabla(fila,columna) {
    // Obtener la referencia del elemento padre
    let divTabla = document.getElementById('divTabla');
  
    // Crea un elemento <table> y un elemento <tbody>
    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");
    let tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (let i = 0; i < fila; i++) {
      // Crea las hileras de la tabla
      let hilera = document.createElement("tr");
  
      for (var j = 0; j < columna; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        let celda = document.createElement("td");
        let textoCelda = document.createTextNode("celda "+i+" "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <divTabla>
    divTabla.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}

generaTabla(10, 6);

//Crear array de 10 objetos con keys: id,name,status,species,type,gender
let arrayObjetos = [];

for (let i = 0; i < 10; i++){
    arrayObjetos[i] = {
        id: `id ${ i }`,
        name: `name ${i}`,
        status: `status ${i}`,
        species: `species ${i}`,
        type: `type ${i}`,
        gender: `gender ${i}`,
    }
}
console.log(arrayObjetos);

//Insertar las propiedades de los objetos en la tabla creada anteriormente

let celdas = document.getElementsByTagName('td');
let k = 0;
for (let i in celdas){
    for (let key in arrayObjetos[i]) {
        celdas[k].textContent = arrayObjetos[i][key];
        k = k + 1;
    }  
}








               















