import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      {" | "}
      <Link href="/about">
        <a>About</a>
      </Link>
      {" | "}
      <Link href="/meow">
        <a>Meow</a>
      </Link>
      {" | "}
      <Link href="/meow_static">
        <a>Meow Static</a>
      </Link>
      {" | "}
      <Link href="/movies">
        <a>Movies</a>
      </Link>
    </nav>
  );
};

export default Nav;
