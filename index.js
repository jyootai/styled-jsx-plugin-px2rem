module.exports = (css, settings) => {
  const reg = new RegExp(/(\d+)(px;)(.*no)*/g);
  const remUnit = settings.remUnit || 75;
  return css.
  replace(reg, (match, $1, $2, $3) => {
    if ($3) {
      return match;
    }
    const res = $1 / remUnit + 'rem';
    return `${res};`;
  });
}
