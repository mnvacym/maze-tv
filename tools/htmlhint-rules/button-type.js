/**
 * Without explicit [type=button] the <button> will behave like a submit button.
 * Intention is unclear for future developers
 *
 * https://stackoverflow.com/questions/41904199/whats-the-point-of-button-type-button
 * https://dev.to/clairecodes/why-its-important-to-give-your-html-button-a-type-58k9
 * https://html.com/attributes/button-type/
 */

module.exports = function (HTMLHint) {
  HTMLHint.addRule({
    id: 'app-button-type',
    description:
      'require type="button", type="submit" or type="reset" on <button> element',
    init: function (parser, reporter) {
      var self = this;
      parser.addListener('tagstart', function (event) {
        var tagName = event.tagName.toLowerCase();
        if (tagName !== 'button') {
          return;
        }

        const hasTypeAttribute = event.attrs.some(attr => attr.name === 'type');

        if (!hasTypeAttribute) {
          reporter.error(
            'ERROR: <button> should have explicit "type" attribute; e.g. type="button" or type="submit".',
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
