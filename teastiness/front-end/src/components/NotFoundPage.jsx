import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

function NotFoundPage() {
  return (
    <section className="not-found">
      <h1>Error 404</h1>
      <p>La pagina que estás busando no existe.</p>
      <Link to="/">Vuelve a la pagina principal</Link>
    </section>
  );
}

export default NotFoundPage;
