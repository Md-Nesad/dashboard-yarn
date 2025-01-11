import Link from "next/link";

export default function Categories() {
  return (
    <div className="grid place-content-center p-72 bg-black text-white text-center space-y-3">
      <h2 className="text-2xl">Not Found!</h2>
      <p className="text-2xl ">Sorry! Could not find requested resource..</p>
      <Link className="text-xl cursor-pointer" href="/">
        Return Home
      </Link>
    </div>
  );
}
