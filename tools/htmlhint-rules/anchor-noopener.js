/**
 * Prevent Reverse Tabnabbing
 *
 * @see https://owasp.org/www-community/attacks/Reverse_Tabnabbing
 * @see https://mathiasbynens.github.io/rel-noopener
 */

module.exports = function (HTMLHint) {
  HTMLHint.addRule({
    id: 'app-anchor-noopener',
    description: 'https://mathiasbynens.github.io/rel-noopener/',
    init: function (parser, reporter) {
      var self = this;
      parser.addListener('tagstart', function (event) {
        var tagName = event.tagName.toLowerCase();
        if (tagName !== 'a') {
          return;
        }

        const hasTargetBlank = !!event.attrs.find(targetBlank);

        if (hasTargetBlank) {
          const hasRelAttribute = !!event.attrs.find(attrRel);

          if (!hasRelAttribute) {
            reporter.error(
              'ERROR: <a> with target="_blank" should have a rel attribute; e.g. rel="noopener noreferrer". [owasp:reverse-tabnabbing]',
              event.line,
              event.col,
              self,
              event.raw
            );
            return;
          }

          const hasRelOpener = !!event.attrs.find(attrRelOpener);
          const hasRelNoopener = !!event.attrs.find(attrRelNoopener);
          const hasRelNoreferrer = !!event.attrs.find(attrRelNoreferrer);

          if (!hasRelOpener && !hasRelNoopener) {
            reporter.error(
              'ERROR: <a> with target="_blank" should have a rel value; e.g. rel="noopener noreferrer". [owasp:reverse-tabnabbing]',
              event.line,
              event.col,
              self,
              event.raw
            );
          }

          if (hasRelNoopener && !hasRelNoreferrer) {
            reporter.error(
              'ERROR: <a> with target="_blank" should have a rel "noreferrer" value for older; e.g. rel="noopener noreferrer". [owasp:reverse-tabnabbing]',
              event.line,
              event.col,
              self,
              event.raw
            );
          }
        }
      });
    }
  });
};

function targetBlank(attr) {
  return attr.name === 'target' && attr.value === '_blank';
}

function attrRel(attr) {
  const { name } = attr;
  return name === 'rel' || name === '[attr.rel]';
}

function attrRelOpener(attr) {
  const { value } = attr;
  return value && value.indexOf('opener') > -1;
}

function attrRelNoopener(attr) {
  const { value } = attr;
  return value && value.indexOf('noopener') > -1;
}

function attrRelNoreferrer(attr) {
  const { value } = attr;
  return value && value.indexOf('noreferrer') > -1;
}
