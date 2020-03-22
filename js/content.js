(function() {
  $('.js-comment-body, .js-preview-body').each(function(i, commentBody) {
    $(commentBody).find('.issue-link.js-issue-link').each(function(i, issueLink) {
      const $issueLink = $(issueLink);
      const uri = $issueLink.attr('href');
      $.get(uri, function(data){
        const title = $(data).find('h1.gh-header-title').children('.js-issue-title').text().trim();
        const number = $issueLink.text();
        $issueLink.text(`${number} : ${title}`);
      });
    });
  });
})();

