import { Products } from "application/types/Products";

import Product_01 from "@assets/img/Products/Product_01.jpg";
import Product_02 from "@assets/img/Products/Product_02.jpg";
import Product_03 from "@assets/img/Products/Product_03.jpg";
import Product_04 from "@assets/img/Products/Product_04.jpg";
import Product_05 from "@assets/img/Products/Product_05.jpg";

export const ProductsData: Products[] = [
  {
    id: "1",
    autor: "Autor 01",
    image: Product_01,
    name: "Libro 01",
    price: 500,
    stars: 5,
  },
  {
    id: "2",
    autor: "Autor 02",
    image: Product_02,
    name: "Libro 02",
    price: 200,
    percentageDiscount: 10,
    stars: 4,
  },
  {
    id: "3",
    autor: "Autor 03",
    image: Product_03,
    name: "Libro 03",
    price: 400,
    stars: 3,
  },
  {
    id: "4",
    autor: "Autor 04",
    image: Product_04,
    name: "Libro 04",
    price: 600,
    percentageDiscount: 30,
    stars: 5,
  },
  {
    id: "5",
    autor: "Autor 05",
    image: Product_05,
    name: "Libro 05",
    price: 200,
    stars: 3,
  },
  {
    id: "6",
    autor: "Autor 06",
    image: Product_02,
    name: "Libro 06",
    price: 60,
    stars: 5,
  },
  {
    id: "7",
    autor: "Autor 07",
    image: Product_04,
    name: "Libro 07",
    price: 125,
    stars: 4,
  },
];
