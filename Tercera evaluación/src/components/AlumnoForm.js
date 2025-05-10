import { useState } from 'react';

function AlumnoForm({ modo, agregarAlumno, actualizarAlumno, eliminarAlumno, alumnos }) {
  const [nombre, setNombre] = useState('');
  const [promedio, setPromedio] = useState('');
  const [nuevoNombre, setNuevoNombre] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (modo === 'ingresar') {
      if (!nombre || promedio === '') return alert('Completa ambos campos');
      if (alumnos.some(a => a.nombre === nombre)) {
        return alert('El alumno ya existe');
      }
      agregarAlumno({ nombre, promedio: parseFloat(promedio) });
      alert('Alumno ingresado exitosamente');
    } 
    else if (modo === 'actualizar') {
      if (!nombre || (!nuevoNombre && promedio === '')) return alert('Faltan datos');
      const alumnoExistente = alumnos.find(a => a.nombre === nombre);
      if (!alumnoExistente) return alert('El alumno no existe');
      
      actualizarAlumno(nombre, {
        nombre: nuevoNombre || nombre,
        promedio: promedio !== '' ? parseFloat(promedio) : alumnoExistente.promedio,
      });
      alert('Alumno actualizado exitosamente');
    } 
    else if (modo === 'eliminar') {
      if (!nombre) return alert('Ingresa el nombre a eliminar');
      if (!alumnos.some(a => a.nombre === nombre)) {
        return alert('El alumno no existe');
      }
      eliminarAlumno(nombre);
      alert('Alumno eliminado exitosamente');
    }

    setNombre('');
    setPromedio('');
    setNuevoNombre('');
  };

  return (
    <form onSubmit={manejarEnvio} className="alumno-form">
      <h3>{modo.charAt(0).toUpperCase() + modo.slice(1)} Alumno</h3>

      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre del alumno"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      {modo === 'actualizar' && (
        <div className="form-group">
          <label htmlFor="nuevoNombre">Nuevo Nombre (opcional)</label>
          <input
            id="nuevoNombre"
            type="text"
            placeholder="Nuevo nombre"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        </div>
      )}

      {(modo === 'ingresar' || modo === 'actualizar') && (
        <div className="form-group">
          <label htmlFor="promedio">Promedio</label>
          <input
            id="promedio"
            type="number"
            step="0.1"
            min="1"
            max="7"
            placeholder="Promedio (1-7)"
            value={promedio}
            onChange={(e) => setPromedio(e.target.value)}
          />
        </div>
      )}

      <button type="submit" className="submit-button">
        {modo === 'ingresar' ? 'Agregar' : modo === 'actualizar' ? 'Actualizar' : 'Eliminar'}
      </button>
    </form>
  );
}

export default AlumnoForm;