
module.exports = function(eleventyConfig) {
  //eleventyConfig.addPassthroughCopy("admin/config.yml");
  //eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
