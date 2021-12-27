module.exports = {
  additionalPaths: async (config) => {
    const result = []

    
    // all possible values
    result.push({
      loc: '/',
      priority: 1,
      lastmod: new Date().toISOString(),
    })


    return result
  },
    siteUrl: process.env.SITE_URL || 'https://www.mailmodo.com',
    generateRobotsTxt: true, // (optional)
    autoLastmod :false,
    priority: 0.8,
    changefreq :false,
    outDir : "out/",
    exclude: ['/events/*','/email-templates/categories/all','*/test-dec/'],
    // ...other options
  }