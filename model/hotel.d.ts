/**
 * Contract for hotel information
 * @interface Hotel
 */
export interface Hotel {
  name: string;
  location: string;
  rating: number;
  numberOfReviews: number;
  priceStarting: number;
  image: string;
}
