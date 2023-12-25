import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default function Home() {
  return <h1>hello</h1>;
}
