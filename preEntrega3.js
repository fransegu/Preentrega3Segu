let edad;
let edades = [];
let arraypersonas = [];
let sumaEdadesMayores = 0;
let sumaEdadesMenores = 0;
let resultado = 0;
let nuevoIngreso = false;
let total = 0


function edadesMenores(el) {
  return el < 18;
}

function edadesMayores(el) {
  return el >= 18;
}

// let form = document.querySelector('form');
let submitButton = document.getElementById('button1');



let boxvalue = document.getElementById('edad').value;
// function borrarss() {
//   localStorage.clear()
// }


function contador() {
  submitButton.addEventListener('click', function (e) {
    //e.preventDefault(); // Evitar que el formulario se envíe

    let boxvalue = document.getElementById('edad').value;
    edades.push(boxvalue);
    arraypersonas.push("1");
    let array = JSON.stringify(edades);
    localStorage.setItem("Edades", array);
    localStorage.setItem("Personas", edades.length);
    let total = edades.reduce((a, b) => Number(a) + Number(b), 0);
    localStorage.setItem("Total", total);
    let promedio = total / edades.length;
    localStorage.setItem("Promedio", promedio);

  })
};



// contador(edad);


// let menores = edades.filter(edadesMenores);
// let mayores = edades.filter(edadesMayores);
// console.log(personas);
// console.log(edades);



// for (const valor of menores) {
//   sumaEdadesMenores += valor;
// }
// // console.log(sumaEdadesMenores);

// for (const valor of mayores) {
//   sumaEdadesMayores += valor;
// }
// // console.log(sumaEdadesMayores);
// console.log(personas + " personas");

// function calcularPromedioEdadMenores(edad, personas) {
//   resultadomenores = (sumaEdadesMenores / menores.length).toFixed(1);
//   // console.log(resultadomenores); 
// }

// function calcularPromedioEdadMayores(edad, personas) {
//   resultadomayores = (sumaEdadesMayores / mayores.length).toFixed(1);
//   // console.log(resultadomayores);
// }
// calcularPromedioEdadMenores(edad, personas);
// calcularPromedioEdadMayores(edad, personas);

// const promedioedades = [
//   { id: 1, "Edad promedio de menores": resultadomenores + " años" },
//   { id: 2, "Edad promedio de mayores": resultadomayores + " años" }
// ]
// console.log(promedioedades);


// let array = JSON.stringify(edades);
// localStorage.setItem("Edades", array);
// localStorage.setItem("Personas", personas);