module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",        // your source folder
      includes: "includes", // tells Eleventy to look in /src/includes/
      output: "_site"       // build output
    }
  };
};