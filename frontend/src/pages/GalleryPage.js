import React from "react"
import ImageGallery from "react-image-gallery"


const images = [
    {
      original: 'images/antelope-canyon-arizona.jpg',
      thumbnail: 'images/antelope-canyon-arizona.jpg',
      description: `This photo was taken in 2019 during a hike to the bottom and through Antelope Canyon in Page, AZ.`,
      originalHeight: '450px',
    },
    {
      original: 'images/cave-of-the-winds-colorado-springs.jpg',
      thumbnail: 'images/cave-of-the-winds-colorado-springs.jpg',
      description: `This phrase was put onto the cave walls before opening to the public. The Cave of The Winds is located just west of Colorado Spring, CO.`,
      originalHeight: '450px',
    },
    {
      original: 'images/chris-kailyn-mcdaniel-honeymoon.jpg',
      thumbnail: 'images/chris-kailyn-mcdaniel-honeymoon.jpg',
      description: `One of my wife and I's first pictures as a married couple. It was captured somewhere near The Garden of The Gods in Colorado Springs, CO.`,
      originalHeight: '450px',
    },
    {
      original: 'images/friendly-cow-resting-fort-worth-texas.jpg',
      thumbnail: 'images/friendly-cow-resting-fort-worth-texas.jpg',
      description: `This family cow was spotted while cruising the rural back roads in my hometown of Fort Worth, TX. Upon stopping at the stop sign, this beauty looked right at me and posed for the photo. She's a natural!`,
      originalHeight: '450px',
    },
    {
      original: 'images/kailyn-mcdaniel-bsn-celebration.jpg',
      thumbnail: 'images/kailyn-mcdaniel-bsn-celebration.jpg',
      description: `This photo captures the exact moment that years of work for my beautiful wife came to fruition, and she received her BSN. She started her new career as an ICU nurse, and I'm extremely proud of her!`,
      originalHeight: '450px',
    },
    {
      original: 'images/petroglyph-national-monument-albuquerque.jpg',
      thumbnail: 'images/petroglyph-national-monument-albuquerque.jpg',
      description: `This photo displays just one of thousands of beautiful and perfectly preserved petroglyph scattered around the Petroglyph National Monument in Albuquerque, NM. Hiking the trails takes you back over 1000 years ago to get a glimpse of the way the Native Americans viewed the world they lived in.`,
      originalHeight: '450px',
    },
    {
      original: 'images/snowy-colorado-mountains.jpg',
      thumbnail: 'images/snowy-colorado-mountains.jpg',
      description: `I captured this gem while on a tour of the Rocky Mountains in Colorado circa 2018. The exact location is unknown, but it really captured how majestic these mountains truly are.`,
      originalHeight: '450px',
    },
    {
      original: 'images/spring-time-mountains-durango-colorado.jpg',
      thumbnail: 'images/spring-time-mountains-durango-colorado.jpg',
      description: `This photo captures spring time in rural La Plata County, Colorado, just south of Durango, CO.`,
      originalHeight: '450px',
    },
    {
      original: 'images/sunset-over-snow-mountain-manitou-springs.jpg',
      thumbnail: 'images/sunset-over-snow-mountain-manitou-springs.jpg',
      description: `This moment was captured at roughly 9000' just before the sun was setting over the mountain in Manitou Springs, CO. This was also our first road trip in our new truck, so I had to take an obligatory car photo!`,
      originalHeight: '450px',
    },
    {
      original: 'images/west-texas-sunset.jpg',
      thumbnail: 'images/west-texas-sunset.jpg',
      description: `The exact location is unknown, but it was captured in the Texas Panhandle near the New Mexico border. It captures the vastness of the country once you get west of the Metroplex.`,
      originalHeight: '450px',
    }
];

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <article className="gallery">
                <p>This gallery is a small showcase of some of my best memories over the last 10 years. I hope you enjoy!</p>
                <ImageGallery items={images} />
            </article>
        </>
    );
}
export default GalleryPage;