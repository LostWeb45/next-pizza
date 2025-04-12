import { ChooseProductModel } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const productId = Number(id);

  const product = await prisma.product.findFirst({
    where: { id: productId },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) return notFound();

  return <ChooseProductModel product={product} />;
}
