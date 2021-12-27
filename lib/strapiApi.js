let blogs, templates, templateCategories, featurePages,competitionPages, newsletterPages,videoPages,podcastPages;

export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://mm-strapi-4.azurewebsites.net"
        }${path}?_limit=200`;
}

export function getImageUrl(path = "",format="webp",quality=50) {
    //support for videos as some older videos use getImageUrl for src BEGIN
    if(path.includes('.mp4')){
        format="webm"
        if(path.startsWith("/")){
            return `https://res.cloudinary.com/mailmodo/video/upload/f_${format},q_${quality}/v1628497684/strapi/${path}`
        }
        else{//If video is uploaded on cloudinary then custom qualtiy, format adjustments can be made on demand.
            if(path.includes("https://res.cloudinary.com/")){

            const pathArr = path.split('/')
            for(let x=0;x<pathArr.length;x++){//if cloudinary video already has quality, format etc params then do not change it, return it as it is.
                if(pathArr[x].includes('f_')||pathArr[x].includes("q_")){
                    return path
                }
            }
            return pathArr.join('/').replace('/upload/',`/upload/f_${format},q_${quality}/`)//if cloudinary video doesn't have qualtiy, format etc params, then add the params and return it.
            }
                return path //video was not from cloudinary, return as it is.
        }
        
    }
    //support for videos as some videos use getImageUrl END

    //main logic for getImageUrl
    if(path.startsWith("/")){ //for older images
        return `https://res.cloudinary.com/mailmodo/image/upload/f_${format},q_${quality}/v1628497684/strapi/${path}`    }
    else{//If image is uploaded on cloudinary then custom qualtiy, format adjustments can be made on demand.
        if(path.includes("https://res.cloudinary.com/")){

        const pathArr = path.split('/')
        for(let x=0;x<pathArr.length;x++){//if cloudinary image already has quality, format etc params then do not change it, return it as it is.
            if(pathArr[x].includes('f_')||pathArr[x].includes("q_")){
                return path
            }
        }
        return pathArr.join('/').replace('/upload/',`/upload/f_${format},q_${quality}/`)//if cloudinary image doesn't have qualtiy, format etc params, then add the params and return it.
        }
            return path //image was not from cloudinary, return as it is.
    }
}

export function getVideoUrl(path = "",format="webm",quality=50) {
    if(path.startsWith("/")){
        return `https://res.cloudinary.com/mailmodo/video/upload/f_${format},q_${quality}/v1628497684/strapi/${path}`
    }
    else{//If video is uploaded on cloudinary then custom qualtiy, format adjustments can be made on demand.
        if(path.includes("https://res.cloudinary.com/")){
        
        const pathArr = path.split('/')
        for(let x=0;x<pathArr.length;x++){//if cloudinary video already has quality, format etc params then do not change it, return it as it is.
            if(pathArr[x].includes('f_')||pathArr[x].includes("q_")){
                return path
            }
        }
        return pathArr.join('/').replace('/upload/',`/upload/f_${format},q_${quality}/`)//if cloudinary video doesn't have qualtiy, format etc params, then add the params and return it.
        }
            return path //video was not from cloudinary, return as it is.
    }
}
// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}
//Competition pages
export async function getAllCompetitionPageSlugs() {
    let PageSlugs = await fetchAPI('/competition-pages')
     const pagesWithSlugs = PageSlugs.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }
 export async function getAllCompetitionPages() {
     if (!competitionPages) {
        competitionPages = await fetchAPI('/competition-pages')
     }
     return competitionPages;
 }
 export async function getCompetitionPagesBySlug(slug) {
     if (!competitionPages) {
        competitionPages = await fetchAPI('/competition-pages')
     }
     return competitionPages.find(t => t.slug === slug);
 }
//feature pages
export async function getAllFeaturePageSlugs() {
   let featurePageSlugs = await fetchAPI('/product-pages')
    const pagesWithSlugs = featurePageSlugs.filter(b => !!b.slug)
    return pagesWithSlugs.map(b => b.slug)
}
export async function getAllFeaturePages() {
    if (!featurePages) {
        featurePages = await fetchAPI('/product-pages')
    }
    return featurePages;
}
export async function getFeaturePagesBySlug(slug) {
    if (!featurePages) {
        featurePages = await fetchAPI('/product-pages')
    }
    return featurePages.find(t => t.slug === slug);
}
//templates
export async function getAllTemplateCategories() {
    if (!templateCategories) {
        templateCategories = await fetchAPI('/template-categories')
    }
    return templateCategories.map(b => ({ title: b.title, slug: b.slug, description:b.description??"", seo:b.SEO??" "}))
}

export async function getAllTemplates() {
    if (!templates) {
        templates = await fetchAPI('/templates')
    }
    return templates;
}
export async function getTemplatesForCategory(category) {
    if (!templates) {
        templates = await fetchAPI('/templates')
    }
    const filteredTemplates = templates.filter(b => b.template_category?.slug === category)
    return filteredTemplates;
}

export async function getTemplateById(templateId) {
    if (!templates) {
        templates = await fetchAPI('/templates')
    }
    return templates.find(t => t.id === templateId);
}
export async function getTemplateBySlug(slug) {
    if (!templates) {
        templates = await fetchAPI('/templates')
    }
    return templates.find(t => t.slug === slug);
}
export async function getRelatedTemplates(category, templateId) {
    if (!templates) {
        templates = await fetchAPI('/templates')
    }
    const filteredTemplates = templates.filter(b =>
        b.template_category?.slug === category
        && b.id !== templateId).slice(0, 4);
    return filteredTemplates;
}
export async function getNextAndPrevTemplates(templateId) {
    if (!templates) {
        templates = await fetchAPI('/templates')
    }
    let current,prev,next = null;
    for(let x=0;x<templates.length;x++){
        if (templates[x]['id'] == templateId){
            current = templates[x].slug;
            if(x == (templates.length-1)){
                prev = templates[x-1].slug
                next = templates[0].slug
            }else if(x==0){
                prev = templates[templates.length-1].slug
                next = templates[x+1].slug
            }else{
                prev = templates[x - 1].slug
                next = templates[x + 1].slug
            }
            break;
        }
    }
    let arr=[prev,current,next]
    return arr;
}
//blogs
export async function getAllBlogSlugs() {
    if (!blogs) {
        blogs = await fetchAPI('/blogs')
    }
    const blogsWithSlug = blogs.filter(b => !!b.slug)
    return blogsWithSlug.map(b => b.slug)
}
export async function getBlogBySlug(slug) {
    if (!blogs) {
        blogs = await fetchAPI('/blogs')
    }
    return blogs.find(b => b.slug === slug)
}
export async function getRandomBlogs() {
    if (!blogs) {
        blogs = await fetchAPI('/blogs')
    }
    return getRandom(blogs, 5)
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
// data for /guides
export async function getCategories() {
    let categories = await fetchAPI('/categories')
    for(let x=0; x<categories.length;x++){
        for(let y=0;y<categories[x]['blogs'].length;y++){
                delete categories[x]['blogs'][y]['content']
        }
    }
    return categories.map(b => ({ name: b.name, blogs: b.blogs }))
}
export async function getFeatured() {

    let featured = await fetchAPI('/featureds')
    for(let x=0; x<featured.length;x++){
        for(let y=0;y<featured[x]['Articles'].length;y++){
                delete featured[x]['Articles'][y]['content']
        }
    }
    return featured;

}
export async function getLatestBlogs() {
    if (!blogs) {
        blogs = await fetchAPI('/blogs')
    }
    blogs.sort((a, b) => b.date > a.date ? 1 : -1)

    let smallerArr = JSON.parse(JSON.stringify(blogs));
    for(let x=0; x<smallerArr.length;x++){
        delete smallerArr[x]['content']
    }
    return smallerArr.slice(0,3);
}
export async function getRecentGuidesBlogs() {
    if (!blogs) {
        blogs = await fetchAPI('/blogs')
    }
    blogs.sort((a, b) => b.date > a.date ? 1 : -1)

    let smallerArr = JSON.parse(JSON.stringify(blogs));
    for(let x=0; x<smallerArr.length;x++){
        delete smallerArr[x]['content']
    }
    return smallerArr.slice(0,4);
}
export async function getAllBlogs() {
    if (!blogs) {
        blogs = await fetchAPI('/blogs')
    }
    let blogsForGuides = JSON.parse(JSON.stringify(blogs));
    for(let x=0; x<blogsForGuides.length;x++){
        delete blogsForGuides[x]['content']
        delete blogsForGuides[x]['next']
        delete blogsForGuides[x]['previous']
    }
    blogsForGuides.sort((a, b) => b.date > a.date ? 1 : -1)
    return blogsForGuides
}
//Newsletter slug
export async function getAllNewsletterPageSlugs() {
    let PageSlugs = await fetchAPI('/newsletters/')
     const pagesWithSlugs = PageSlugs.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function getNewsletterPagesBySlug(slug) {
    if (!newsletterPages) {
       newsletterPages = await fetchAPI('/newsletters/')
    }
    return newsletterPages.find(t => t.slug === slug);
}

export async function getRecentNewsletters() {
    if (!newsletterPages) {
        newsletterPages = await fetchAPI('/newsletters')
    }
    return newsletterPages.sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,4)
}
//Newsletter slug END
//Videos slug
export async function getAllVideosPageSlugs() {
    if (!videoPages) {
         videoPages = await fetchAPI('/webinars/')
      }
     const pagesWithSlugs = videoPages.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function getVideoPagesBySlug(slug) {
    if (!videoPages) {
         videoPages = await fetchAPI('/webinars/')
    }
    return videoPages.find(t => t.slug === slug);
}

export async function getRecentVideoPages() {
    if (!videoPages) {
        videoPages = await fetchAPI('/webinars/')
   }
    return videoPages.sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,4)
}
//Videos slug END
//Podcast slug
export async function getAllPodcastPageSlugs() {
    if (!podcastPages) {
        podcastPages = await fetchAPI('/podcasts/')
      }
     const pagesWithSlugs = podcastPages.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function getPodcastPagesBySlug(slug) {
    if (!podcastPages) {
        podcastPages = await fetchAPI('/podcasts/')
    }
    return podcastPages.find(t => t.slug === slug);
}

export async function getRecentPodcastPages() {
    if (!podcastPages) {
        podcastPages = await fetchAPI('/podcasts/')
   }
    return podcastPages.sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,4)
}
//Podcast slug END

//strapi Events
export async function getAllEventPageSlugs() {
    let PageSlugs = await fetchAPI('/event-pages')
     const pagesWithSlugs = PageSlugs.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function getEventPagesBySlug(slug) {

    let Pages = await fetchAPI('/event-pages')
     
     return Pages.find(t => t.slug === slug);
 }
// Strapi Events end

//Customer story  slug
let customerStoryPages;
export async function getAllCustomerStoryPageSlugs() {
    if (!customerStoryPages) {
        customerStoryPages = await fetchAPI('/customer-stories/')
      }
     const pagesWithSlugs = customerStoryPages.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function getCustomerStoryPagesBySlug(slug) {
    if (!customerStoryPages) {
        customerStoryPages = await fetchAPI('/customer-stories/')
    }
    return customerStoryPages.find(t => t.slug === slug);
}

export async function getRecentCustomerStoryPages() {
    if (!customerStoryPages) {
        customerStoryPages = await fetchAPI('/customer-stories/')
   }
    return customerStoryPages.sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,4)
}
//Customer story slug END
//Humans of email 
let humansOfEmailPages;
export async function getAllhumansOfEmailPageSlugs() {
    if (!humansOfEmailPages) {
        humansOfEmailPages = await fetchAPI('/humans-of-emails/')
      }
     const pagesWithSlugs = humansOfEmailPages.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function gethumansOfEmailPagesBySlug(slug) {
    if (!humansOfEmailPages) {
        humansOfEmailPages = await fetchAPI('/humans-of-emails/')
    }
    return humansOfEmailPages.find(t => t.slug === slug);
}

export async function getRecenthumansOfEmailPages() {
    if (!humansOfEmailPages) {
        humansOfEmailPages = await fetchAPI('/humans-of-emails/')
   }
    return humansOfEmailPages.sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,4)
}
//Humans of email END
//top level pages
let TopLevelPages
export async function getAllTopLevelPageSlugs() {
    let TopLevelPageSlugs = await fetchAPI('/main-pages/')
     const pagesWithSlugs = TopLevelPageSlugs.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }
 export async function getAllTopLevelPages() {
     if (!TopLevelPages) {
        TopLevelPages = await fetchAPI('/main-pages/')
     }
     return TopLevelPages;
 }
 export async function getAllTopLevelPagesBySlug(slug) {
     if (!TopLevelPages) {
        TopLevelPages = await fetchAPI('/main-pages/')
     }
     return TopLevelPages.find(t => t.slug === slug);
 }
 //top level pages END
 //use-case pages
export async function getAllUseCasePagesSlugs() {
    let UseCasePages = await fetchAPI('/use-cases/')
     const pagesWithSlugs = UseCasePages.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function getAllUseCasePagesBySlug(slug) {
    let UseCasePages = await fetchAPI('/use-cases/')
     
     return UseCasePages.find(t => t.slug === slug);
 }
 //use-case  pages END
  //industries pages
export async function getAllIndustriesPagesSlugs() {
    let Pages = await fetchAPI('/industries/')
     const pagesWithSlugs = Pages.filter(b => !!b.slug)
     return pagesWithSlugs.map(b => b.slug)
 }

 export async function getAllIndustriesPagesBySlug(slug) {
    let Pages = await fetchAPI('/industries/')
     
     return Pages.find(t => t.slug === slug);
 }
 //industries  pages END