import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {" "}
      <Button variant={"outline"}>Кнопка</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
    </>
  );
}
