import React from "react";

function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
        <article>
          <h3>Web Servers</h3>
          {/* <!-- Explain what index means as it relates to websites and servers. --> */}
          <p>
            <strong>Index</strong> is the main page for websites using Apache servers, like this
            one! When you access the server without a file path, then it will
            first respond with the <strong>index</strong> page.
          </p>
          {/* <!-- Explain what you see in the browser's Web Dev/Inspector tools. What is different about the file's details on the web server versus the local computer? --> */}
          <p>
            In the <strong>network tab</strong>, we can see that we were unable to find our
            main.css and main.js files. We can however see a <strong>status</strong> of 200 for our index.html by viewing the <strong>request header</strong> In the request's <strong>response body</strong>, we can find the actual HTML for the document we have requested. Also, since we are loading one from the
            server, we can see it takes significantly longer to retrieve the
            documents.
          </p>
          {/* <!-- Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. --> */}
          <p>
            The favicon.ico file has a <strong>status</strong> of 200 because we have a default
            favicon file in the root of our server. For the main.css and main.js
            files, we are looking in our individual folders for these files, and
            we have yet to create and upload them.
          </p>
          {/* <!-- Explain the parts of the URL to your web file. What are the scheme, subdomain, host domain, and resources? --> */}
          <p>
            <strong>HTTPS</strong> is our <strong>scheme</strong>. Our <strong>subdomain</strong> is "web.engr", and "oregonstate.edu" is  our <strong>host domain</strong>. The <strong>path to resource</strong>
            is "/~mcdachri/a1-mcdachri/" which defaults to the index.html file in that directory.
            The full <strong>URL</strong> is "https://web.engr.oregonstate.edu/~mcdachri/a2-mcdachri/"
          </p>
        </article>
        <article>
            <h3>Frontend Design</h3>
            {/* <!-- The concept of frontend design--> */}
            <p>
                <strong>Frontend design</strong> is all about having a pleasurable and efficient experience for your potential users. Having colors that don't clash with other elements on the page help improve readability, and fonts can not only help improve readability, they can also be used to emphasize certain topics or distinguish between headers and paragraphs. Icons can help visually guide users to their desired destination. 
            </p>
            {/* <!-- The five "E"s of usability, --> */}
            <p>
              One of the main purposes of <strong>frontend design</strong> is to make your website usable. In order to do that, we have to take into account 
              the <strong>5 E's of Usability</strong>. Let's take a look at each one and how it relates to our website's overall usability.
            </p>
            <dl>
                <dt>Effective</dt>
                <dd>
                    Is our design <strong>effective</strong> enough to guide our user to complete their goal. 
                </dd>
                <dt>Efficient</dt>
                <dd>
                    Can our user do tasks in a way that involves as few steps as possible?
                </dd>
                <dt>Easy To Navigate</dt>
                <dd>
                    Can someone who has never visited your site intuitively be able to accomplish their tasks, or will they spend too much time trying to find the right buttons?                </dd>
                <dt>Error-free</dt>
                <dd>
                    <strong>Errors</strong> can cause certain areas of your site not to function and therefore could keep a user from accomplishing their goal. Removing roadblocks users can run into will improve accessibility and availability of your site. 
                </dd>
                <dt>Enjoyable</dt>
                <dd>
                    Finally, your site must be <strong>enjoyable</strong>. The experience your user has will ultimately dictate whether they decide to return or not. Not only does your content need to be relevant, you must also have a design that promotes the previous 4 “E” s.
                </dd>
            </dl>
            {/* <!-- The purpose of page layout tags--> */}
            <p>
                <strong>Page-layout tags</strong> are block-level elements that help to break up the flow of a website's content.
                The <strong>header</strong> tag represents the top most section of the website. This can include identifying information like a page title or company logo. 
                The <strong>nav</strong> tag creates a grouping of navigation elements that are used to guide the user around your site. 
                The <strong>main</strong> tag is the primary, highest-order block that holds all of our content. 
                The <strong>section</strong> tag represents a group of related content.
                The <strong>article</strong> tag is used inside of <strong>section</strong> tags and represents a unique piece of related content.
                The <strong>footer</strong> tag sits at the bottom of every site. It typically holds any legal information and links to policies and any other important information relating to your site.
                The tags also help bots (such as search engine crawlers and screen readers) understand where on the page each of the elements are. 
            </p>
            {/* <!-- What is the conceptual difference between text anchors and navigation? --> */}
            <p>
                <strong>Anchors</strong> can link to content in a page by assigning an ID to an element, or they can link to another page, either a local file path or using a full <strong>URL</strong>. 
                <strong>Nav</strong> anchor tags usually link to pages around your website, allowing a user to navigate your available pages. An <strong>"a"</strong> tag by itself is typically used to link to an external website or document.
            </p>
        </article>
         </>
    );
}

export default TopicsPage;