function AlumnoList({ alumnos }) {
  return (
    <div className="alumno-list">
      <h3>Listado de Alumnos</h3>
      {alumnos.length === 0 ? (
        <p className="empty-message">No hay alumnos registrados.</p>
      ) : (
        <ul>
          {alumnos.map((a, index) => (
            <li key={index}>
              <strong>{a.nombre}</strong> - Promedio: {a.promedio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlumnoList;