function randomInteger(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }

  const low = Math.ceil(Math.min(min, max));
  const up = Math.floor(Math.max(min, max));
  const randomNumber = Math.random() * (up - low + 1) + low;
  return Math.floor(randomNumber);
}
randomInteger(-1, 0);


function stringLength (string, length) {
  return string.length <= length;
}
stringLength('', 200);

//Источник - аналогичное решение разбора задания из ретроспективы раздела 2
