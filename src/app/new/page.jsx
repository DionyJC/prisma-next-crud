"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Newpage({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
<<<<<<< HEAD
      fetch(`/api/tasks/${params.id}`, {
    
=======
      fetch("https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/", {
        headers: {
          "Access-Control-Allow-Origin": "https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/",
        },
>>>>>>> 9171af7472bb88d0888c147a7cc7571394eb8d7d
      })
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (params.id) {
<<<<<<< HEAD
        const res = await fetch(`/api/tasks/${params.id}`, {
          method: "PUT",
=======
        const res = await fetch("https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/",
          },
>>>>>>> 9171af7472bb88d0888c147a7cc7571394eb8d7d
          body: JSON.stringify({
            title,
            description,
          }),
        });

        // Manejo de respuesta para PUT si es necesario
        // const data = await res.json();
        // console.log(data);
      } else {
<<<<<<< HEAD
        const res = await fetch("/api/tasks", {
          method: "POST",
=======
        const res = await fetch("https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/",
          },
>>>>>>> 9171af7472bb88d0888c147a7cc7571394eb8d7d
          body: JSON.stringify({
            title,
            description,
          }),
        });

        // Manejo de respuesta para POST si es necesario
        // const data = await res.json();
        // console.log(data);
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className=" h-screen flex justify-center items-center m-4">
      <form
        className="border border-rose-300 bg-slate-950 p-10 rounded-md lg:w-1/3 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className=" font-bold">
          Título de la Tarea
        </label>
        <input
          id="title"
          type="text"
          className=" border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold">
          Descripción de la Tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className=" border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
          placeholder="Descripción"
          onChange={(a) => setDescription(a.target.value)}
          value={description}
        ></textarea>
        <button type="submit" className=" bg-green-400 hover:bg-green-800 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-md">
          Crear
        </button>
        {params.id && (
          <button
<<<<<<< HEAD
            className="bg-rose-500 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-md ml-4"
            type="button"
            onClick={ async() => {
              const res = await fetch(`/api/tasks/${params.id}`,{
                method: "DELETE"
              })
              const data = await res.json();
              router.refresh();
              router.push("/")
            }}
          >
            Eliminar
          </button>
=======
    className="bg-rose-500 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-md ml-4"
    type="button"
    onClick={async() => {
      const res = await fetch("https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/", {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "https://crud-next-digpjwvzd-diony-caros-projects.vercel.app/",
        },
      });

      const data = await res.json();

      router.refresh();
      router.push("/");
    }}
  >
    Eliminar
  </button>
>>>>>>> 9171af7472bb88d0888c147a7cc7571394eb8d7d
        )}
      </form>
    </div>
  );
}

export default Newpage;
