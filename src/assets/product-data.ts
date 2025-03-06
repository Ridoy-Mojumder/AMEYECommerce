export type TProductType =
  | "Today's Deal"
  | "Just Added"
  | "Featured Products"
  | "New Products"
  | "Best Selling"
  | "Men’s Collection"
  | "Women’s Collection"
  | "Kid’s Collection";
export interface IProduct {
  id: number ;
  imageUrl: string;
  brand: string;
  title: string;
  price: number;
  reviewsCount: number;
  rating: number;
  description: string;
  discount?: number;
  originalPrice?: number;
  newArrivals?: boolean;
  upComing?: boolean;
  type: TProductType[];
}

export const productsData: IProduct[] = [
  {
    id: 1,
    imageUrl: "/TodayDeals/pngwing 12 (1).png",
    brand: "StylePro",
    title: "Men's Classic Formal Shirt",
    price: 45.0,
    discount: 15,
    reviewsCount: 78,
    rating: 4,
    originalPrice: 50.5,
    description:
      "Upgrade your wardrobe with the Men's Classic Formal Shirt. Made from high-quality cotton fabric, this shirt offers a perfect blend of comfort and style. Featuring a modern fit with a sleek design, it's ideal for office wear, formal events, or casual outings. Available in multiple sizes and colors.",
    type: ["Today's Deal"],
  },
  {
    id: 2,
    imageUrl: "/TodayDeals/pngwing 12 (2).png",
    brand: "EleganceWear",
    title: "Women's Elegant Floral Dress",
    price: 80.0,
    newArrivals: true,
    reviewsCount: 56,
    rating: 5,
    description:
      "Step into elegance with the Women's Elegant Floral Dress. Designed with soft and breathable fabric, this dress offers ultimate comfort while keeping you stylish. Perfect for parties, evening gatherings, or casual outings, its floral patterns and flowy design make it a must-have for fashion enthusiasts.",
    type: ["Today's Deal"],
  },
  {
    id: 3,
    imageUrl: "/TodayDeals/pngwing 12 (3).png",
    brand: "Jord",
    title: "Jord Luxury Chronograph Watch",
    price: 250.0,
    newArrivals: true,
    reviewsCount: 89,
    rating: 5,
    description:
      "Enhance your style with the Jord Luxury Chronograph Watch. Crafted with a premium stainless steel case, a scratch-resistant sapphire crystal, and precision chronograph movement, this watch is designed for those who demand both luxury and performance. Water-resistant and suitable for all occasions.",
    type: ["Today's Deal"],
  },
  {
    id: 4,
    imageUrl: "/TodayDeals/pngwing 12.png",
    brand: "Jord",
    title: "Jord Elegant Leather Watch",
    price: 180.0,
    discount: 30,
    reviewsCount: 67,
    rating: 5,
    description:
      "The Jord Elegant Leather Watch is the perfect blend of sophistication and durability. Featuring a genuine leather strap, a sleek black dial, and a water-resistant stainless steel case, this watch is ideal for both casual and formal wear. Now available at a 30% discount!",
    type: ["Today's Deal"],
  },
  {
    id: 5,
    imageUrl: "/JustAdded/pngwing 12 (21).png",
    brand: "Nike",
    title: "Nike Air Max Shoes",
    price: 180.0,
    reviewsCount: 34,
    description: "Comfortable and stylish running shoes for all-day wear.",
    rating: 3,
    type: ["Just Added"],
  },
  {
    id: 6,
    imageUrl: "/JustAdded/pngwing 12 (26).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    description:
      "Elegant and sophisticated round high-quality watch for all occasions.",
    rating: 5,
    type: ["Just Added"],
  },
  {
    id: 7,
    imageUrl: "/JustAdded/pngwing 12 (5).png",
    brand: "Puma",
    title: "Puma Full-Sleeve T-Shirt",
    price: 40.0,
    newArrivals: true,
    reviewsCount: 34,
    description: "Soft cotton full-sleeve t-shirt, perfect for cooler weather.",
    rating: 5,
    type: ["Just Added"],
  },
  {
    id: 8,
    imageUrl: "/JustAdded/pngwing 12 (6).png",
    brand: "Adidas",
    title: "Adidas Half-Sleeve T-Shirt",
    price: 30.0,
    newArrivals: true,
    reviewsCount: 34,
    description: "Breathable half-sleeve t-shirt ideal for summer days.",
    rating: 5,
    type: ["Just Added"],
  },
  {
    id: 9,
    imageUrl: "/FeaturedProducts/pngwing 12 (27).png",
    brand: "Nike",
    title: "Nike Air Max 2023 Shoes",
    price: 150.0,
    reviewsCount: 150,
    rating: 4,
    description:
      "The Nike Air Max 2023 Shoes offer superior comfort, sleek design, and excellent durability.",
    newArrivals: true,
    type: ["Featured Products"],
  },
  {
    id: 10,
    imageUrl: "/FeaturedProducts/pngwing 12 (7).png",
    brand: "Rolex",
    title: "Rolex Submariner Watch",
    price: 9000.0,
    reviewsCount: 250,
    rating: 5,
    description:
      "The Rolex Submariner Watch is a perfect blend of luxury and performance, built for divers and adventurers.",
    upComing: true,
    type: ["Featured Products"],
  },
  {
    id: 11,
    imageUrl: "/FeaturedProducts/pngwing 12 (8).png",
    brand: "Adidas",
    title: "Adidas Baby Tracksuit",
    price: 60.0,
    reviewsCount: 120,
    rating: 5,
    description:
      "Soft, comfortable, and stylish, the Adidas Baby Tracksuit is designed for your little one’s active lifestyle.",
    newArrivals: true,
    type: ["Featured Products"],
  },
  {
    id: 12,
    imageUrl: "/FeaturedProducts/pngwing 12 (9).png",
    brand: "H&M",
    title: "H&M Summer Dress for Women",
    price: 40.0,
    reviewsCount: 200,
    rating: 4,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    upComing: true,
    type: ["Featured Products"],
  },
  {
    id: 13,
    imageUrl: "/NewProducts/pngwing 12 (10).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    rating: 3,
    type: ["New Products"],
  },
  {
    id: 14,
    imageUrl: "/NewProducts/pngwing 12 (11).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    reviewsCount: 34,
    rating: 5,
    type: ["New Products"],
  },
  {
    id: 15,
    imageUrl: "/NewProducts/pngwing 12 (28).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    reviewsCount: 34,
    rating: 5,
    type: ["New Products"],
  },
  {
    id: 16,
    imageUrl: "/NewProducts/pngwing 12 (29).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
    type: ["New Products"],
  },
  {
    id: 17,
    imageUrl: "/BestSale/pngwing 12 (12).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    rating: 3,
    type: ["Best Selling"],
  },
  {
    id: 18,
    imageUrl: "/BestSale/pngwing 12 (13).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    rating: 5,
    type: ["Best Selling"],
  },
  {
    id: 19,
    imageUrl: "/BestSale/pngwing 12 (14).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    rating: 5,
    type: ["Best Selling"],
  },
  {
    id: 20,
    imageUrl: "/BestSale/pngwing 12 (26).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    rating: 5,
    reviewsCount: 34,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Best Selling"],
  },
  {
    id: 21,
    imageUrl: "/KidsCollection/pngwing 12 (23).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 3,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Kid’s Collection"],
  },
  {
    id: 22,
    imageUrl: "/KidsCollection/pngwing 12 (24).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Kid’s Collection"],
  },
  {
    id: 23,
    imageUrl: "/KidsCollection/pngwing 12 (25).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Kid’s Collection"],
  },
  {
    id: 24,
    imageUrl: "/KidsCollection/pngwing 12 (30).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Kid’s Collection"],
  },
  {
    id: 25,
    imageUrl: "/MansCollection/pngwing 12 (15).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 3,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Men’s Collection"],
  },
  {
    id: 26,
    imageUrl: "/MansCollection/pngwing 12 (16).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Men’s Collection"],
  },
  {
    id: 27,
    imageUrl: "/MansCollection/pngwing 12 (17).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Men’s Collection"],
  },
  {
    id: 28,
    imageUrl: "/MansCollection/pngwing 12 (18).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Men’s Collection"],
  },
  {
    id:29,
    imageUrl: "/WomansCollection/pngwing 12 (19).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 3,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Women’s Collection"],
  },
  {
    id: 30,
    imageUrl: "/WomansCollection/pngwing 12 (20).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Women’s Collection"],
  },
  {
    id: 31,
    imageUrl: "/WomansCollection/pngwing 12 (21).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Women’s Collection"],
  },
  {
    id: 32,
    imageUrl: "/WomansCollection/pngwing 12 (22).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
    description:
      "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    type: ["Women’s Collection"],
  },
];

type TGetProductsProps = { type?: TProductType | void } | void;

export const getProducts = (props: TGetProductsProps) => {
  const { type } = props || {};

  if (!type) return productsData;
  return productsData?.filter((product) => product.type.includes(type));
};

export const getProductById = (id: number) => {
  return productsData.find((product) => product.id && id && product.id === id);
};
