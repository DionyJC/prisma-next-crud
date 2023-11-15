import React from "react";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div>
        <h1 className=" text-3xl text-center py-5 text-rose-400 font-bold">
          Págino no Encontrada
        </h1>
        <Link href={"/"}>
          <Image
            className=" rounded-full"
            src="/404.jpg"
            alt="Página no Encontrada"
            width={400}
            height={400}
          />
        </Link>

        <h2 className=" text-2xl font-bold text-rose-400 text-center my-4">
          Toque al gato para volver al inicio
        </h2>
      </div>
    </section>
  );
}

export default NotFound;
