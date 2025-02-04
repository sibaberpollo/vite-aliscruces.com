import React from 'react';
import FeaturedImage from '/images/resources/bio-alis.jpeg';
import { Helmet } from 'react-helmet';

function QuienEsAlisCruces() {
  return (
    <>
      <Helmet>
        <title>Biografía de Alis Cruces | Músico Venezolano</title>
        <meta 
          name="description" 
          content="Conoce la trayectoria de Alis Cruces, cuatrista y docente venezolano. Director de la Orquesta Regional Alma Llanera de Carabobo, con reconocimiento internacional en la música tradicional venezolana." 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Biografía de Alis Cruces" />
        <meta
          property="og:description"
          content="Conoce la biografía de Alis Cruces, destacado músico y docente venezolano."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>
      <section className="block">
        <div className="container">
          <div className="page-content">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="blog-single">
                  <div className="blog-post v2">
                    <div className="blog-thumbnail">
                      <img
                        src={FeaturedImage}
                        alt="Alis Cruces"
                        className="w-100"
                        width={1000}
                        height={600}
                      />
                    </div>
                    <div className="blog-info">
                      {/* Cambié el título */}
                      <h2>Mi Trayectoria Musical</h2>
                      <p>
                        ¡Hola! Soy Alis Cruces, músico y docente venezolano nacido en Güigüe, Estado Carabobo. Actualmente resido en Valencia, Venezuela, donde continúo mi labor artística y educativa.
                      </p>
                      <p>
                        Mi pasión por la música comenzó a los 6 años, cuando tuve la fortuna de formarme con los maestros Maximiliano Rebolledo y Orlando Castro. Formé parte de la Estudiantina Carlota Fuentes de Güigüe y la Estudiantina Luis Ernesto Quintero de Carabobo.
                      </p>
                      <p>
                        Me gradué como Licenciado en Educación mención Música en la Universidad de Carabobo, y perfeccioné mis estudios de Cuatro Solista en el Conservatorio de Música Simón Bolívar bajo la guía del maestro Carlos Capacho.
                      </p>
                      <p>
                        Actualmente, soy director musical de la Orquesta Regional Alma Llanera de Carabobo, parte del Sistema Nacional de Orquestas, y también imparto clases en línea mientras creo contenido digital sobre música venezolana, el cuatro, la bandola llanera y la mandolina.
                      </p>
                      <p>
                        Como cuatrista, soy miembro de la agrupación Compasses, con la que he tenido el honor de presentarme en escenarios nacionales e internacionales en países como China, Alemania, Irlanda, España, Luxemburgo, Hong Kong, Australia, Colombia, Macao y Bolivia. En 2020, junto a Compasses, grabamos la producción discográfica "Sotavento", nominada a los Latin Grammy y los Premios Pepsi Music.
                      </p>
                      <h2>Mis Reconocimientos</h2>
                      <ul class="reconocimientos">
                        <li>1er Lugar en el Festival de Nuevos Intérpretes del Cuatro, Caracas 2012</li>
                        <li>1er Lugar como mejor cuatrista en el Festival de Música Llanera “El Silbón” 2010 y 2012</li>
                        <li>1er Lugar en el Festival Turístico Internacional San Martín de los Llanos 2012</li>
                        <li>1er Lugar como mejor cuatrista del Torneo Internacional del Joropo Villavicencio 2013</li>
                        <li>2do Lugar como mejor obra inédita para cuatro solista en el Torneo Internacional del Joropo Villavicencio 2017 y 2018</li>
                        <li>1er Lugar en el Festival Internacional “La Siembra del Cuatro” 2017</li>
                      </ul>
                      <p>
                        Estos logros representan mi dedicación y amor por la música venezolana, y estoy emocionado de seguir compartiendo este legado con ustedes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuienEsAlisCruces;
