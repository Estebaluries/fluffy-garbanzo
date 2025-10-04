module.exports = function(eleventyConfig) {

 
  // Copy static assets to _site
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });









  return {
    dir: {
      input: "src",        // your source folder
      includes: "includes", // tells Eleventy to look in /src/includes/
      output: "_site"       // build output
    }
  };
};