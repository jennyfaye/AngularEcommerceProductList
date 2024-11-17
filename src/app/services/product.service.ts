import { Injectable } from '@angular/core';
import { ProductModel } from '../components/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [
    {
      id: 1,
      name: "Cosori Air Fryer",
      price:  10800,
      imageUrl: "https://i.pinimg.com/736x/28/8a/74/288a74ca157de712c14b0ed6ad22e56b.jpg"
    },
    {
      id: 2,
      name: "JisuLife Handheld Fan",
      price:  999,
      imageUrl: "https://i.pinimg.com/736x/11/43/2d/11432d325c16213dc5737f104bfa5073.jpg"
    },
    {
      id: 3,
      name: "Maybelline Fit Me Foundation",
      price:  371,
      imageUrl: "https://i.pinimg.com/736x/55/5e/a4/555ea40b83320d8e671b6e031ea8a1c4.jpg"
    },
    {
      id: 4,
      name: "Maybelline Sky High Mascara",
      price:  499,
      imageUrl: "https://i.pinimg.com/736x/c1/f5/ba/c1f5baabdbbc2925a295db42ee236c9b.jpg"
    },
    {
      id: 5,
      name: "Banila Co Clean it Zero Cleansing Balm",
      price:  649,
      imageUrl: "https://i.pinimg.com/736x/b6/70/a9/b670a9609f99b168b2cf3bf899f26a03.jpg"
    },
    {
      id: 6,
      name: "SKIN1004 Madagascar Centella Sun Serum",
      price:  608,
      imageUrl: "https://i.pinimg.com/736x/be/fc/a7/befca7273a03c9c3ff48b6c1fdf86de9.jpg"
    },
    {
      id: 7,
      name: "Short Cami Dress",
      price:  500,
      imageUrl: "https://i.pinimg.com/736x/43/da/ba/43daba9ec9ef33748efb0f1e6323af8b.jpg"
    },
    {
      id: 8,
      name: "Denim Maxi Skirt",
      price:  500,
      imageUrl: "https://i.pinimg.com/736x/2d/02/da/2d02da40a2ec3eff9ec81fc8e807f236.jpg"
    },
    {
      id: 9,
      name: "Converse Run Star Hike Canvas Platform",
      price:  5290,
      imageUrl: "https://i.pinimg.com/736x/00/8c/a1/008ca1d7d9148f59ef9cc4de1606df9f.jpg"
    },
    {
      id: 10,
      name: "New Balance 530",
      price:  5873,
      imageUrl: "https://i.pinimg.com/736x/18/62/35/186235eed95b4ccbc97f3620e6c2cc9d.jpg"
    }
  ];

  getProduct(): ProductModel[] {
    return this.products;
  }
}
