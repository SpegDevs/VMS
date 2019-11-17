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
    console.log(element.id, id);
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
      newElement.content = `${value}`;
    } else if (newElement.content instanceof Array) {
      newElement.content = modifyFromNestedArray(id);
    }
    return newElement;
  });
};
