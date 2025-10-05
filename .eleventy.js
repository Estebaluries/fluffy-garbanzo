module.exports = function(eleventyConfig) {
  // Copy static folders to output
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",        // main source
      includes: "includes",// templates live here
      layouts: "includes/layouts", // layouts live here
      data: "data",        // global data folder
      output: "_site"      // build output
    }
  };
};