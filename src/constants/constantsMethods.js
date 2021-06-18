export const listToSeparatedText = (array) => {
  var text = "";
  var i;
  for (i = 0; i < array.length; i++) {
    text += array[i];
    if (i !== array.length - 1) {
      text += ", ";
    }
  }
  return text;
};

export const objectsToOptions = (list, name, value) => {
  return list.map((item, index) => ({
    key: index,
    text: item[name],
    value: item[value]
  }));
};
