// Import dependencies
const fs = require("fs");
const RSS = require("rss");
const fetch = require("node-fetch");

async function generatePodcastRSS() {
  const podcastPages = await getAllPodcastPages();

  const feed = new RSS({
    title: "The Growth Chat",
    description: "Growth is the most critical aspect of running a successful business. Each episode of this podcast brings real-life stories of how people did it using various growth channels. Our guests also share their learnings and tips which can boost your business' growth.",
    feed_url: 'https://www.mailmodo.com/podcast/feed.xml',
    site_url: 'https://www.mailmodo.com',
    // managingEditor: 'Mailmodo Content Team',
    // webMaster: 'Mailmodo Content Team',
    language: 'en',
    custom_namespaces: {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      {
        'itunes:category': [
          {
            _attr: {
              text: 'Business'
            }
          },
        ]
      },
      { 'itunes:author': 'Mailmodo' },
      {
        'itunes:image': {
          _attr: {
            href: 'https://res.cloudinary.com/mailmodo/image/upload/v1637934939/strapi/rss_d111bba91b.jpg'
          }
        }
      },
    ],
  });

  // feed for Podcasts
  for (const arr_item of podcastPages) {
    feed.item({
      title: arr_item.title,
      author: "Mailmodo Team",
      description: arr_item.description,
      date: arr_item.PublishedOn,
      enclosure: { url: ((arr_item?.renderUrl) ? arr_item.renderUrl.replace(".mp4", ".mp3") : "  "), length: "123", type: "audio/mpeg" },
      url: `https://www.mailmodo.com/podcast/${arr_item.slug}/`
    });
  }

  const xml = feed.xml();
  fs.writeFileSync('public/podcastrss/feed.xml', xml);

}

//Generate Feeds:
generatePodcastRSS()

async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://mm-strapi-4.azurewebsites.net"
    }${path}`;
}
// async function getAllBlogs() {

//     const blogs = await fetchAPI('/blogs')

//     let blogsForGuides = JSON.parse(JSON.stringify(blogs));
//     for(let x=0; x<blogsForGuides.length;x++){
//         delete blogsForGuides[x]['content']
//         delete blogsForGuides[x]['next']
//         delete blogsForGuides[x]['previous']
//     }
//     blogsForGuides.sort((a, b) => b.date > a.date ? 1 : -1)
//     return blogsForGuides
// }

// async function getAllNewsletterPages() {
//     let Pages = await fetchAPI('/newsletters/')
//      const Newsletters = JSON.parse(JSON.stringify(Pages));
//      return Newsletters
//  }

async function getAllPodcastPages() {
  let Pages = await fetchAPI('/podcasts/')
  const podcasts = JSON.parse(JSON.stringify(Pages));
  return podcasts
}
