const profesores = [
  {id: 1, name: 'José Pérez', grado: 'doctorado'},
  {id: 2, name: 'Mario Mendoza', grado: 'maestría'},
  {id: 3, name: 'Miguel Pardo', grado: 'maestría'},
  {id: 4, name: 'Armando Paredes', grado: 'doctorado'},
];

const alumnos = [
  {id: 1, name: 'Raúl Granados'},
  {id: 2, name: 'Juan Dínamo'},
  {id: 3, name: 'Mercedes Arango'},
  {id: 4, name: 'Aaron Alvarado'},
];

const cursos = [
  {id: 1, name: 'calculo', creditos: 3},
  {id: 2, name: 'diseño', creditos: 2},
  {id: 3, name: 'desarrollo', creditos: 4},
  {id: 4, name: 'análisis', creditos: 4},
  {id: 5, name: 'estadística', creditos: 2},
];

const matriculas = [
  {alumnoId: 1, cursoId: 1, profesorId: 1, year: 2022},
  {alumnoId: 3, cursoId: 4, profesorId: 2, year: 2021},
  {alumnoId: 3, cursoId: 2, profesorId: 3, year: 2021},
  {alumnoId: 1, cursoId: 2, profesorId: 3, year: 2022},
  {alumnoId: 2, cursoId: 3, profesorId: 4, year: 2022},
  {alumnoId: 4, cursoId: 1, profesorId: 1, year: 2021},
  {alumnoId: 4, cursoId: 3, profesorId: 4, year: 2021},
  {alumnoId: 4, cursoId: 5, profesorId: 1, year: 2021},
];

// mostrar la lista de los nombres de los alumnos matriculados con más de 4 créditos

function comparacion(alumnos, cantComp){
  const alfilt = alumnos.filter(
    (alumno) => {
      const creditos = matriculas
      .filter(matricula => matricula.alumnoId === alumno.id)
      .map(matricula => cursos.find(curso => curso.id === matricula.cursoId))
      .reduce((pv,cv) => pv + cv.creditos, 0);
  	return creditos > cantComp;
  	}
  )
  .map(alumno => alumno.name);
  return alfilt;
}
console.log(comparacion(alumnos,4));






