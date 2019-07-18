/**
 *name: jquery.highCheckTree
 *author: yan, xuekai
 *version: 0.2.1
*/

/**input data format: 

[{
    item:{id:'id', label:'label', checked:false}, 
    chidren:[{
        item:{id:'id', label:'label', checked:false}, 
        chidren:[...]
    }]
}, ....]

*/

(function ($) {

  jQuery.fn.uploadTree = function (settings) {

    settings = $.extend({
      data: [],               // input data which will be used to initilze the tree
      onExpand: null,        // an event will be triggered when the tree node was expanded
      onCollapse: null,      // an event will be triigered when the tree node was collapsed
      onPreCheck: null,      // an event will be triggered before the tree node was checked
      onCheck: null,         // an event will be triggered when the tree node was checked
      onUnCheck: null,       // an event will be triggered when the tree node was unchecked
      onLabelHoverOver: null,// an event will be triggered when mouse hover over the label
      onLabelHoverOut: null  // an event will be triggered when mouse hover out the label
    }, settings);

    var container = $(this), $tree = this;

    //get children html tag string
    function getChildrenHtml (treesdata) {
      var result = '', len = treesdata.length, node, clen, arrowClass, checkedClass = ''
      checkedChildren;
      for (i = 0; i < len; i++) {
        node = treesdata[i];
        $.data($tree, node.item.id, node); //attach node data to node id
        clen = node.children ? node.children.length : 0;
        arrowClass = 'collapsed';
        if (clen === 0) {
          arrowClass = 'nochildren';
          checkClass = node.item.checked ? 'checked' : '';
        } else {
          var checkedChildren = $.grep(node.children, function (el) {
            return el.item.checked;
          });
          checkClass = checkedChildren.length === 0 ? '' : checkedChildren.length === clen ? 'checked' : 'half_checked';
        }

        result += '<li rel="' + node.item.id + '"><div class="arrow ' + arrowClass + '"></div><div class="checkbox ' + checkClass + '"></div><label>' +
          node.item.label + '</label></li>';
      }

      return result;
    }
    //initialize the check tree with the input data
    (function initalCheckTree () {
      var treesHtml = '<ul class="checktree">';
      function firstCreateTree (treesdata) {
        var result = '', len = treesdata.length, node, clen, arrowClass, checkedClass = ''
        checkedChildren;
        for (var i = 0; i < len; i++) {
          node = treesdata[i];
          clen = node.children ? node.children.length : 0;
          arrowClass = 'collapsed';
          if (clen === 0) {
            arrowClass = 'nochildren';
            checkClass = node.item.checked ? 'checked' : '';
          } else {
            var checkedChildren = $.grep(node.children, function (el) {
              return el.item.checked;
            });
            checkClass = checkedChildren.length === 0 ? '' : checkedChildren.length === clen ? 'checked' : 'half_checked';
          }

          treesHtml += '<li rel="' + node.item.id + '"><div class="arrow ' + arrowClass + '"></div><div class="checkbox ' + checkClass + '"></div><label>' + node.item.label + '</label>'
          treesHtml += '<ul style="display: none">'
          firstCreateTree(node.children)
          treesHtml += '</li></ul></li>'
        }
      }
      firstCreateTree(settings.data)
      treesHtml += '</ul>';
      container.append(treesHtml);
    })();

    //expand and collapse node
    container.off('click', '.arrow').on('click', '.arrow', function () {
      if ($(this).hasClass('nochildren')) {
        return;
      }
      var $li = $(this).parent();
      $li.children('ul').toggle()
      if ($(this).hasClass('collapsed')) {
        $(this).removeClass('collapsed').addClass('expanded')
      } else {
        $(this).removeClass('expanded').addClass('collapsed')
      }

    });

  };
})(jQuery);
