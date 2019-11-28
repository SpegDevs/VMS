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

export const modifyFromNestedArray = (id, value, array, loopField) => {
  return array.map(element => {
    const newElement = { ...element };
    if (newElement.id === id) {
      if (
        newElement.type === ItemTypes.IF ||
        newElement.type === ItemTypes.LOOP
      ) {
        if (newElement.type === ItemTypes.LOOP) {
          newElement[loopField] = value;
        } else {
          newElement.condition = `${value}`;
        }
      } else {
        newElement.content = `${value}`;
      }
    } else if (newElement.content instanceof Array) {
      newElement.content = modifyFromNestedArray(
        id,
        value,
        [...newElement.content],
        loopField
      );
    }
    return newElement;
  });
};

export const genereateCodeFromArray = (array, tabCount) => {
  const tabs = Array(tabCount)
    .fill("\t")
    .reduce((prev, item) => `${prev}${item}`, "");
  return array.reduce((prev, current) => {
    const { content, type } = current;
    switch (type) {
      case ItemTypes.IF:
        return `${prev}${tabs}if(${
          current.condition
        }){\n${genereateCodeFromArray(content, tabCount + 1)}${tabs}}\n`;
      case ItemTypes.ELSE:
        return `${prev}${tabs}else{\n${genereateCodeFromArray(
          content,
          tabCount + 1
        )}\n}`;
      case ItemTypes.DECLARE:
        const {
          isArray,
          variableType,
          arrayLength,
          isFunction,
          functionType,
          params
        } = current;
        const type = isArray
          ? `arr[${variableType}, ${arrayLength}]`
          : `${variableType}`;
        const Content = isFunction
          ? `${content}=call (${functionType}(${params}))`
          : content;
        return `${prev}${tabs}${type} ${Content};\n`;
      case ItemTypes.ASIGN:
        return `${prev}${tabs}${content};\n`;
      case ItemTypes.OUTPUT:
        return `${prev}${tabs}out(${content});\n`;
      case ItemTypes.LOOP:
        switch (current.loopType) {
          case "for":
            return `${prev}${tabs}for(${current.init}; ${current.condition}; ${
              current.increment
            }){\n${genereateCodeFromArray(content, tabCount + 1)}${tabs}}\n`;
          case "while":
            return `${prev}${tabs}while(${
              current.condition
            }){\n${genereateCodeFromArray(content, tabCount + 1)}}`;
          default:
            return `${prev}${tabs}do{\n${genereateCodeFromArray(
              content,
              tabCount + 1
            )}}while(${current.condition})`;
        }
      default:
        return `${prev}${content}`;
    }
  }, "");
};
