module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("eventos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/eventos/*.md");
  });

  eleventyConfig.addCollection("publicacoes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/publicacoes/*.md");
  });

  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Publica a biblioteca digital criada fora da pasta src.
  eleventyConfig.addPassthroughCopy("biblioteca");

  // evita injetar o script de live-reload nas URLs que começam com /admin
  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      blacklist: ["/admin/**"]
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
