
let contador = 0;
function alumno (nombre, apellido, nota1, nota2, nota3, promedio, estado){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.promedio = promedio;
    this.estado = estado;
    this.ver = function () {
      console.log("Alumno: " + this.nombre + " "+ this.apellido);
      console.log("Promedio: " + this.promedio);
      console.log("Estado Alumno: " +  this.estado);
      console.log("Alumnos Registrados: " + ++contador);
    }
  }

  function cargarAlumno(){
    let nombre = prompt ("Nombre");
    let apellido = prompt ("Apellido");
    let nota1 = parseFloat(prompt ("Primer Nota"));
    let nota2 = parseFloat(prompt ("Segunda Nota"));
    let nota3 = parseFloat(prompt ("Tercer Nota"));
    function calcularPromedio(nota1, nota2, nota3) {
        let salida = (nota1 + nota2 + nota3) / 3;
        return salida;
    }
    
    let promedio = calcularPromedio(nota1, nota2, nota3)

        if (promedio >= 6){
           estado = "Aprobado"    
        }else{
            estado = "Reporbado"
    }

    const Alumno = new alumno(nombre, apellido, nota1, nota2, nota3, promedio, estado);
    return Alumno;
  }

const alumno1 = cargarAlumno()
const alumno2 = cargarAlumno()
const alumno3 = cargarAlumno()
const alumno4 = cargarAlumno()

alumno1.ver()
alumno2.ver()
alumno3.ver()
alumno4.ver()