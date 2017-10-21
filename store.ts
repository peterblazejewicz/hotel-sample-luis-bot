import { ReviewsOptions } from './model/reviewsoptions';
import { Reviews } from './model/reviews';
import { Hotel } from './model/hotel';
import { Hotels } from './model/hotels';
import { Review } from './model/review';

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
const searchHotels: (destination: string) => Promise<Hotels> = destination => {
  return new Promise((resolve, reject) => {
    let hotels = [],
      i = 5;
    while (i-- > 0) {
      hotels.push({
        name: `${destination} Hotel ${i}`,
        location: destination,
        reating: Math.ceil(Math.random() * 5),
        numberOfReviews: Math.floor(Math.random() * 5000) + 1,
        priceStarting: Math.floor(Math.random() * 450) + 80,
        image: `https://placeholdit.imgix.net/~text?txtsize=35&txt=Hotel${i}&w=500&h=260`
      });
    }
    hotels.sort((a: Hotel, b: Hotel) => a.priceStarting - b.priceStarting);
    setTimeout(() => resolve(hotels), 500);
  });
};

/**
 * Returns collection of hotel review
 * @param {string} name a matching query
 * @returns {Array<Review> | Reviews } collection of matched reviews
 */
const searchHotelReviews: (name: string) => Promise<Reviews> = name => {
  return new Promise((resolve, reject) => {
    let reviews = [],
      i = 5;
    while (i-- > 0) {
      reviews.push({
        title: options[Math.floor(Math.random() * options.length)],
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio magna, sodales vel ligula sit amet, vulputate vehicula velit. Nulla quis consectetur neque, sed commodo metus.',
        image:
          'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
      });
    }
    setTimeout(() => resolve(reviews), 500);
  });
};

export = {
  searchHotels,
  searchHotelReviews
};
