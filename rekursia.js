let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};


function createTree(obj, container) {
  container = container || document.body;//если значение переменной container равно undefined, null, false или любому другому значению, которое при проверке в логическом контексте будет интерпретировано как false, то оператор || вернет второй операнд, в данном случае document.body. Это означает, что если container не был передан, то будет использовано значение document.body как контейнер (то есть список будет добавлен в тело документа).

  const ulElement = document.createElement('ul');
  container.append(ulElement);

  for (const key in obj) {
    const liElement = document.createElement('li');
    liElement.append(key);
    ulElement.append(liElement);
    if (Object.keys(obj[key]).length > 0) {//данное условие проверяет, есть ли у вложенного объекта obj[key] хотя бы один ключ.
      //Object.keys(obj[key]): Этот код возвращает массив ключей объекта obj[key].
      createTree(obj[key], liElement)
    }
  }
  return container;
}

function f() {
  
}

createTree(data)


