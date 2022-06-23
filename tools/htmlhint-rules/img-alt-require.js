/**
 * <img> element should have a alt attribute
 * also checks for angular usage
 */

module.exports = function (HTMLHint) {
  HTMLHint.addRule({
    id: 'app-img-alt-require',
    description: 'require alt=attribute on <img> element',
    init: function (parser, reporter) {
      var self = this;
      parser.addListener('tagstart', function (event) {
        var tagName = event.tagName.toLowerCase();
        if (tagName !== 'img') {
          return;
        }

        const hasAltAttribute = event.attrs.some(
          attr =>
            attr.name === 'alt' ||
            attr.name === '[alt]' ||
            attr.name === '[attr.alt]' ||
            attr.name === 'aria-hidden' ||
            attr.name === '[aria-hidden]' ||
            attr.name === '[attr.aria-hidden]'
        );

        if (!hasAltAttribute) {
          reporter.error(
            'ERROR: <img> should have an "alt" attribute',
            event.line,
            event.col,
            self,
            event.raw
          );
        }
      });
    }
  });
};
