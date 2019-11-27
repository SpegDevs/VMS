import ItemTypes from "./ItemTypes";

const insertNewValueFromNull = (element, to, array) => {
  array.splice(to, 0, element);
  return [array, true];
};

export const insertElementIntoArray = (
  { ...element },
  from,
  to,
  [...array],
  count
) => {
  element.id = count;
  if (from === null) return insertNewValueFromNull(element, to, array);
  [array[from], array[to]] = [array[to], array[from]];
  return [array, false];
};

export const insertElementIntoNestedArray = (
  element,
  id,
  elementToInsert,
  from,
  to,
  count
) => {
  if (element.id === id) {
    console.log(element.elseContent);
    return insertElementIntoArray(
      elementToInsert,
      from,
      to,
      element.content,
      count
    );
  }
  let newItem;
  for (const item in element.content) {
    const result = insertElementIntoNestedArray(
      element.content[item],
      id,
      elementToInsert,
      from,
      to,
      count
    );
    if (result instanceof Array) {
      newItem = { ...element.content[item] };
      newItem.content = result[0];
      element.content[item] = newItem;
      break;
    }
  }
};

export const removeElementFromNestedArray = (id, array) => {
  const arr = array.filter(element => {
    if (element.content instanceof Array) {
      element.content = removeElementFromNestedArray(id, element.content);
    }
    return element.id !== id;
  });
  return arr;
};

export const modifyFromNestedArray = (id, value, array) => {
  return array.map(element => {
    const newElement = { ...element };
    if (newElement.id === id) {
      if (
        newElement.type === ItemTypes.IF ||
        newElement.type === ItemTypes.LOOP
      ) {
        newElement.condition = `${value}`;
      } else {
        newElement.content = `${value}`;
      }
    } else if (newElement.content instanceof Array) {
      newElement.content = modifyFromNestedArray(id, value, [
        ...newElement.content
      ]);
    }
    return newElement;
  });
};

export const genereateCodeFromArray = array => {
  return array.reduce((prev, current) => {
    const { content, type } = current;
    switch (type) {
      case ItemTypes.IF:
        return `${prev}if(${current.condition}){\n${genereateCodeFromArray(
          content
        )}}`;
      case ItemTypes.ELSE:
        return `${prev}else{\n${genereateCodeFromArray(content)}\n}`;
      case ItemTypes.DECLARE:
        const { isArray, variableType, arrayLength } = current;
        const type = isArray
          ? `arr[${variableType}, ${arrayLength}]`
          : `${variableType}`;
        return `${prev}${type} ${content};`;
      case ItemTypes.ASIGN:
        return `${prev}${content};`;
      case ItemTypes.OUTPUT:
        return `${prev}out(${content});\n`;
      case ItemTypes.INPUT:
        return `${prev}in(${content});\n`;
      default:
        return `${prev}${content}`;
    }
  }, "");
};
