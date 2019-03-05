module.exports = (css, settings) => {
  const reg = new RegExp(/(\d+px)(.*\*no.*)*/g);
  const remUnit = settings.remUnit || 75;
  const precision = settings.precision || 6;
  return css.
  replace(reg, matched => {
    if (matched.match(/no\*/)) {
      return matched;
    }
    const result = matched.replace(/(\d+)px/g, (str, $1) => {
      const val = Number($1);
      if (val === 0) {
        return '0rem';
      }
      return ($1 / remUnit).toFixed(precision) + 'rem';
    });
    return `${result}`;
  });
}
