(function(){
  var recursivelyRemoveStyles = function(e){
    if (e.attributes && e.attributes.style) e.attributes.removeNamedItem('style');
    [].forEach.call(e.childNodes, recursivelyRemoveStyles);
  };

  var removeStylesAndScripts = function(){
    [].forEach.call(document.querySelectorAll('link[rel=stylesheet], script, style'), function(e){
      e.parentNode.removeChild(e);
    });
  };

  var extractWantedNodes = function(newHome){
    var wantedSelector = ['h1', 'p', 'ul', 'div.thinCenter'].map(function(c){
      return '.article-text>' + c;
    }).join(',');
    console.log(wantedSelector);

    [].forEach.call(document.querySelectorAll(wantedSelector), function(e){
      e.parentNode.removeChild(e);
      newHome.appendChild(e);
    });
  };

  var emptyBody = function(){
    [].forEach.call(document.querySelectorAll('body>*'), function(e){
      e.parentNode.removeChild(e);
    });
  };

  var article = document.createElement('article');
  removeStylesAndScripts();
  extractWantedNodes(article);
  emptyBody();
  document.body.appendChild(article);
  recursivelyRemoveStyles(article);
})();
