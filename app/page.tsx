import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                key={1}
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                key={2}
                title="Завтрак"
                items={[
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
