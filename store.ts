import { ReviewsOptions } from './model/reviewsoptions';
import { Reviews } from './model/reviews';
import { Hotels } from './model/hotels';

/**
 * Default options for reviews
 */
const options: ReviewsOptions = [
  '“Very stylish, great stay, great staff”',
  '“good hotel awful meals”',
  '“Need more attention to little things”',
  '“Lovely small hotel ideally situated to explore the area.”',
  '“Positive surprise”',
  '“Beautiful suite and resort”'
];

/**
 * Returns collection of hotels that match search criteria
 * @param {string} destination
 * @returns {Array<Hotel> | Hotels} collection of matched hotels
 */
const searchHotels: (destination: string) => Hotels = destination => [];

/**
 * Returns collection of hotel review
 * @param {string} name a matching query
 * @returns {Array<Review> | Reviews } collection of matched reviews
 */
const searchHotelReviews: (name: string) => Reviews = name => [];

export = {
  searchHotels,
  searchHotelReviews
};
