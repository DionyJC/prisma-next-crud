import Link from "next/link";

function Navbar() {
  return (
    <nav className=" bg-slate-950 fixed w-full z-10 top-0 ">
      <div className=" container mx-auto flex justify-between items-center px-3 py-4">
        <Link href={"/"}>
          <h3 className= "text-xl md:font-bold md:text-3xl text-rose-400">NextCRUD</h3>
        </Link>

        <ul className="gad-x-1 md:flex gap-x-3 font-bold mr-3">
          <li className="">
            <Link href={"/new"}>Nueva Tarea</Link>
          </li>
          <li className="">
            <Link href={"/about"}>Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
