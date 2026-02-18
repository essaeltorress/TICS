document.writeln("una agenda");
let option = parseInt(prompt ("Escoge una opción del \n 1-Agregar \n 2-Listar \n 3-Salir"));
let seguir = true;
let datos = [];
while (seguir){
    let option = parseInt(prompt ("Escoge una opción del \n 1-Nombre \n 2-Apellidos \n 3-Facultad \n 4-Teléfono \n 5-Edad"));
switch (option) {
    case 1:
    alert ("Escogiste la opción 1");
    let nombre = prompt("Ingresa tu nombre")
    //Ingresar el nombre al array
    datos.push(nombre);
    console.table(datos);
    break;
      case 2:
    alert ("Escogiste la opción 2");
    let Apellidos = prompt("Ingresa tus apellidos");
    break;
      case 3:
    alert ("Escogiste la opción 3");
    let Facultad = prompt()
    break;
    default:
    alert ("No recibí una opción válida")
    break;
 }
}
