// test with https://www.lipsum.com/

const colorText = (element) => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(colorText);
  }
  else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/lorem/gi)) {
      const newElement = document.createElement('span');
      newElement.innerHTML = element.textContent.replace(/(lorem)/gi, '<span class="rainbow">$1</span>');
      element.replaceWith(newElement);
    }
  }
}

colorText(document.body);