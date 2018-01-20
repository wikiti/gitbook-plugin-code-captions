function assets() {
  return { assets: './assets', css: [ 'code-captions.css' ] };
}

function regex() {
  return /<p>!CAPTION\s+(.+?)<\/p>\s*(<pre>[\s\S]+?<\/pre>)/g;
}

function codeTemplate() {
  return '<div class="code-caption"><span class="code-caption-text">$1</span>$2</div>';
}

module.exports = {
	book: assets(),
  ebook: assets(),
  hooks: {
    "page": function(page) {
      page.content = page.content.replace(regex(), codeTemplate());
      return page;
    }
  }
};
