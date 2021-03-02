import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h2>Pagina no encontrada</h2>
      <Link to="/">Volver a página principal</Link>
    </main>
  );
}

export default NotFound;
