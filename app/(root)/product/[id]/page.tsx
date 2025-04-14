import { Container, PizzaImage, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage image={product.image} size={30} />
        <div className="w-[490px] bg-[#f9f8f8] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            nesciunt saepe, autem porro sed repellat, totam, nostrum distinctio
            cum at reprehenderit dolorem minus laborum alias. Esse commodi quis
            est. Deleniti.
          </p>

          <GroupVariants
            selecteValue="2"
            items={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
