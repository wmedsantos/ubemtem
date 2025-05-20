
module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("eventos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/eventos/*.md");
  });

  eleventyConfig.addCollection("publicacoes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/publicacoes/*.md");
  });
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
