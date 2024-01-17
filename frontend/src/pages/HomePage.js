import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Welcome To My Portfolio Project!</h2>
            <article>
                <p>
                    This portfolio project showcases all of the many topics we studied this term. We start it off with basic HTML and CSS while using Express and Javascript to do DOM manipulation and interact with RESTful APIs. For our backend service, we are utilizing Node and using MongoDB and Mongoose to manage our database. We finish it all off with using React to break down our website into components and make the entire site into a Single Page Application.
                </p>
                <p>
                    As for styling of the site, we utilize Google Fonts to pick unique, web-ready fonts and CSS to add various styling to our elements. Each of the images used on the website are web-optimized and compressed to improve load times. We use React Icons as an icon library that is used throughout the site and finally, we double checked all spelling, punctuation, and grammar by using LanguageTool.
                </p>
                <p>
                    It's been a fun term, and I'm thankful for all the feedback from the teaching staff. I look forward to taking what I've learned and applying it towards my future classes and my career. 
                </p>
                <p>
                    <strong>Thank you!</strong>
                </p>
            </article>
        </>
    );
}

export default HomePage;