const { createElement } = require("react");

var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

setInterval(()=>{imprimirFecha()}, 1000);

function imprimirFecha(){
    let fechaHoy = new Date();
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    fecha.innerHTML = diasSemana[fechaHoy.getDay() - 1] + ", " + fechaHoy.getDay() + " de " + meses[fechaHoy.getMonth() - 1] + " de " + fechaHoy.getFullYear();
    hora.innerHTML = fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + ":" + fechaHoy.getSeconds();
}
var arrayClub = ["natación", "yoga", "pádel", "musculación", "spinning", "pilates"];
imprimirFecha();

const socios = [
  {
    id: "SOC-0001",
    nombre: "Lucía",
    apellidos: "Martín Ruiz",
    dni: "12345678Z",
    email: "lucia.martin@correo.es",
    telefono: "612345678",
    fechaNacimiento: "1995-03-14",
    fechaAlta: "2019-09-02",
    actividades: ["natación", "yoga"],
    cuota: 35
  },
  {
    id: "SOC-0002",
    nombre: "Álvaro",
    apellidos: "Gómez Peña",
    dni: "23456789D",
    email: "alvaro.gomez@correo.es",
    telefono: "623456789",
    fechaNacimiento: "1988-11-23",
    fechaAlta: "2017-01-15",
    actividades: ["musculación", "spinning"],
    cuota: 42
  },
  {
    id: "SOC-0003",
    nombre: "María José",
    apellidos: "Núñez Castro",
    dni: "34567890V",
    email: "mj.nunez@gmail.com",
    telefono: "634567890",
    fechaNacimiento: "2001-06-05",
    fechaAlta: "2022-03-20",
    actividades: ["pilates"],
    cuota: 25
  },
  {
    id: "SOC-0004",
    nombre: "Pablo",
    apellidos: "Ortega Díaz",
    dni: "45678901G",
    email: "pablo.ortega@outlook.com",
    telefono: "645678901",
    fechaNacimiento: "1979-02-28",
    fechaAlta: "2015-10-01",
    actividades: ["pádel", "natación", "musculación"],
    cuota: 55
  },
  {
    id: "SOC-0005",
    nombre: "Carmen",
    apellidos: "Iglesias Moreno",
    dni: "56789012B",
    email: "carmen.iglesias@gmail.com",
    telefono: "656789012",
    fechaNacimiento: "1992-09-17",
    fechaAlta: "2020-01-13",
    actividades: ["yoga", "pilates"],
    cuota: 30
  },
  {
    id: "SOC-0006",
    nombre: "Íñigo",
    apellidos: "Santos Vega",
    dni: "67890123B",
    email: "inigo.santos@correo.es",
    telefono: "667890123",
    fechaNacimiento: "2010-12-08",
    fechaAlta: "2024-09-09",
    actividades: ["pádel"],
    cuota: 20
  },
  {
    id: "SOC-0007",
    nombre: "Laura",
    apellidos: "Romero Blanco",
    dni: "78901234X",
    email: "laura.romero@outlook.com",
    telefono: "678901234",
    fechaNacimiento: "1985-04-30",
    fechaAlta: "2018-05-07",
    actividades: ["spinning", "yoga", "natación"],
    cuota: 48
  },
  {
    id: "SOC-0008",
    nombre: "Javier",
    apellidos: "Molina Cano",
    dni: "89012345E",
    email: "javier.molina@correo.es",
    telefono: "689012345",
    fechaNacimiento: "1998-07-21",
    fechaAlta: "2021-11-22",
    actividades: ["musculación"],
    cuota: 28
  },
  {
    id: "SOC-0009",
    nombre: "Marta",
    apellidos: "Ferrer Ibáñez",
    dni: "90123456A",
    email: "marta.ferrer@gmail.com",
    telefono: "690123456",
    fechaNacimiento: "1971-01-10",
    fechaAlta: "2014-02-03",
    actividades: ["natación", "pilates"],
    cuota: 38
  },
  {
    id: "SOC-0010",
    nombre: "Daniel",
    apellidos: "Reyes Ñáñez",
    dni: "11223344B",
    email: "daniel.reyes@correo.es",
    telefono: "711223344",
    fechaNacimiento: "2003-08-19",
    fechaAlta: "2023-06-12",
    actividades: ["pádel", "spinning"],
    cuota: 33
  }
];

function imprimirSocios(socios){
    var idSocio = document.getElementById("tabla-socios");

    for(var socio of socios){
        var iniciales = socio.nombre.substring(0, 1) + "" + socio.apellidos.substring(0, 1);
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var spanIniciales = document.createElement("span");
        spanIniciales.classList.add("iniciales");
        spanIniciales.textContent = iniciales;
        var spanId = document.createElement("span");
        spanId.classList.add("id-socio");
        spanId.textContent = socio.id; 
        tdId.appendChild(spanIniciales);
        tdId.appendChild(spanId);
        
        var tdNombre = document.createElement("td");
        var apellidos = socio.apellidos.split(" ")
        tdNombre.textContent = socio.nombre + " " + apellidos[0] + " " + apellidos[1].substring(0, 1) + ".";
        tr.appendChild(tdId);
        tr.appendChild(tdNombre);


        var tdEmail = document.createElement("td");
        var asteriscosCorreo = socio.email.split("@");
        var censura = asteriscosCorreo[0].substring(2, (asteriscosCorreo[0].length - 2));
        tdEmail.textContent = socio.email.substring(0, 2) + "*".repeat(asteriscosCorreo[0].length - 2) + "@" + asteriscosCorreo[1];
        tr.appendChild(tdEmail);

        var tdActividades = document.createElement("td");
        for(var actividad of socio.actividades){
            tdActividades.textContent += actividad + " ";
        }
        tr.appendChild(tdActividades);


        idSocio.appendChild(tr);
    }
    
}
imprimirSocios(socios);