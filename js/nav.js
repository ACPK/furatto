// Generated by CoffeeScript 1.6.3
(function($, window) {
  "use strict";
  var Nav;
  Nav = (function() {
    function Nav(el, options) {
      this.options = $.extend({}, options);
      this.$el = $(el);
    }

    Nav.prototype.slide = function() {
      return this.$el.next('ul').slideToggle();
    };

    return Nav;

  })();
  $.fn.nav = function(option) {
    return this.each(function() {
      var $this, data;
      $this = $(this);
      data = $this.data('Nav');
      if (!data) {
        $this.data('Nav', (data = new Nav(this, {})));
      }
      if (typeof option === 'string') {
        return data[option]();
      }
    });
  };
  return $(document).on('click', '[data-toggle="nav"]', function(e) {
    $(this).nav('slide');
    return e.preventDefault();
  });
})(window.jQuery, window);
