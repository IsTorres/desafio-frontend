export type Comic = {
  prices: Prices[];
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

export type Prices = {
  price: number;
  type: string;
};

export type ComicsList = Comic[];
