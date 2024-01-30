export default class DivModifier {
  divToParent(parent, id = '') {
    const div = document.createElement('div');
    if (id !== '') div.id = id;
    parent.appendChild(div);
    return div;
  }
  addEvent(div, func) {
    div.addEventListener('click', func);
  }
}
