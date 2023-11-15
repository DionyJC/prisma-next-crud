import React from "react";

function about() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-screen-md mt-24">
        <h1 className="text-center mt-11 text-red-400 font-bold md:text-2xl flex justify-center">
          {" "}
          Descripción del Proyecto: <br /> Sistema CRUD con Next.js, Prisma,
          Node.js y Tailwind CSS
        </h1>
        <p className=" m-11 ">
          Este proyecto es una aplicación web desarrollada utilizando
          tecnologías modernas para crear un sistema CRUD (Crear, Leer,
          Actualizar, Eliminar) eficiente y receptivo. La combinación de
          Next.js, Prisma, Node.js y Tailwind CSS ofrece una arquitectura
          robusta y una experiencia de desarrollo fluida. <br />
          <span className="text-center mt-5 text-red-400 font-bold md:text-2xl flex justify-center">
            Tecnologías Utilizadas:
          </span>
          <span className="text-red-400">Next.js:</span> La aplicación está
          construida con Next.js, un marco de React que facilita la creación de
          aplicaciones web rápidas y eficientes. Next.js proporciona
          enrutamiento dinámico, renderizado del lado del servidor y una
          estructura de directorios clara.
          <br />
          <span className="text-red-400 mt-3">Prisma:</span> Se utiliza Prisma
          como ORM (Mapeador de Relaciones de Objetos) para interactuar con la
          base de datos. Prisma simplifica las operaciones de base de datos al
          proporcionar una interfaz intuitiva y segura para realizar consultas y
          manipular datos.
          <br />
          <span className="text-red-400">Node.js:</span> La lógica del servidor
          backend se implementa en Node.js, ofreciendo un entorno de ejecución
          eficiente y no bloqueante. Node.js permite gestionar operaciones de
          entrada/salida de manera eficiente, lo que es crucial para
          aplicaciones que interactúan con bases de datos.
          <br />
          <span className="text-red-400">Tailwind CSS:</span> El diseño y la
          interfaz de usuario se han construido utilizando Tailwind CSS, un
          marco de utilidades CSS altamente personalizable. Tailwind facilita la
          creación de interfaces estilizadas de manera eficiente y coherente.
          <br />
          <span className="text-center mt-5 text-red-400 font-bold md:text-2xl flex justify-center">
            Funcionalidades Principales:
          </span>
          <span className="text-red-400">Operaciones CRUD:</span> La aplicación
          permite realizar operaciones CRUD en entidades específicas,
          proporcionando funcionalidades completas para crear, leer, actualizar
          y eliminar registros.
          <br />
          <span className="text-red-400">Interfaz Responsiva:</span> Gracias a
          Tailwind CSS, la interfaz de usuario se adapta a diferentes tamaños de
          pantalla, garantizando una experiencia consistente y agradable tanto
          en dispositivos de escritorio como en dispositivos móviles.
          <br />
          <span className="text-red-400">
            Rutas Dinámicas con Next.js:
          </span>{" "}
          Next.js facilita la implementación de rutas dinámicas, lo que permite
          una navegación fluida entre diferentes vistas y componentes.
          <br />
          Este proyecto representa un ejemplo claro de cómo combinar tecnologías
          modernas para crear una aplicación web robusta y eficiente con
          funcionalidades CRUD. La estructura modular y la arquitectura bien
          definida permiten un mantenimiento sencillo y escalabilidad futura.
        </p>
      </div>
    </section>
  );
}

export default about;
