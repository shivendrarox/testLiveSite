import { getAllTopLevelPagesBySlug ,getAllTopLevelPageSlugs,  } from '../lib/strapiApi'
//Page Components

import FeaturePage from '../pages/features/[slug]';


const TopLevelPage = ({ slug, blocks }) => {

    return(
        <>
            <FeaturePage 
            slug={slug}
            blocks={blocks}
            />
        </>
    )
}

// pass props to Page component
export async function getStaticProps(context) {


    const slug = context.params.slug // get slug from params
    const blocks = await getAllTopLevelPagesBySlug(slug)

    return {
        props: { slug, blocks }
    };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

    const slugs = await getAllTopLevelPageSlugs();
    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug: slug
                },
            };
        }),
        fallback: false,
    };
}
export default TopLevelPage;