export const padStart = function padStart(string, targetLength, padString) {
  targetLength = Math.floor(targetLength) || 0;
  padString = String(padString || ' ');
  if (string.length > targetLength) {
    return string;
  }
  else {
    targetLength = targetLength - string.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(string);
  }
};

export const getDivisorsOf = (number) => {

  const divisors = [];

  for (let i = 1; i <= number / i; i += 1) {
    if (number % i === 0) {
      if (number / i === i) {
        divisors.push(i);
      } else {
        divisors.push(i);
        divisors.push(number / i);
      }
    }
  }

  return divisors;

};

export const getTextYCoord = (baseY, linesLength, fontSize, sizeToOffsetCoefficient) => {
  return linesLength === 1
    ? baseY - (fontSize / 2) * (fontSize * sizeToOffsetCoefficient)
    : baseY - (((linesLength - 1) * fontSize / 2) + (fontSize * sizeToOffsetCoefficient));
};

export const getTextTransformYCoord = (textYCoord, linesLength, fontSize, sizeToOffsetCoefficient) => {
  return linesLength === 1
    ? textYCoord - fontSize + (fontSize / 2) + (fontSize * sizeToOffsetCoefficient)
    : textYCoord - fontSize + (linesLength * fontSize / 2) + (fontSize * sizeToOffsetCoefficient);
};

export const getCenter = (start, end) => (start + end) / 2;

export const downloadFile = (content, fileName, contentType) => {

  const link = document.createElement('a');
  const file = new Blob([content], {type: contentType});

  link.href = URL.createObjectURL(file);
  link.download = fileName;
  link.click();

};

export const generateId = () =>
  (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
