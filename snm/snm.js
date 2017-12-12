'use strict';

(function (window) {

  const SlideCrossFade = {
    container: 'faces',
    displayTime: 5000,
    fadeTime: 1000,

    next: function () {
      let $active = $('.' + this.container + ' .active');
      let $next = ($active.next().length > 0) ? $active.next() : $('.' + this.container + ' img:first');
      const self = this;

      $active.fadeOut(this.fadeTime, () => {
        $active.removeClass('active');
        $next.fadeIn(this.fadeTime, () => {
          setTimeout(function () {
            $next.addClass('active');
            self.next();
          }, this.displayTime);

        });
      });

    }
  };

  window.SlideCrossFade = SlideCrossFade;

})(this);

$(window).on('load', function () {
  SlideCrossFade.next();
});
