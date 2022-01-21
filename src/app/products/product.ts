export class Product {
  id?: string;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: Rate;
}

class Rate {
  rate: number = 0;
  count: number = 0;
}
