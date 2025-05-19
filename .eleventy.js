
module.exports = function(eleventyConfig) {
  //eleventyConfig.addPassthroughCopy("admin/config.yml");
  //eleventyConfig.addPassthroughCopy("admin");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
