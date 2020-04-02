export function getElement(target) {
  return document.querySelector(target);
}

export function getElements(target) {
  return document.querySelectorAll(target);
}

export function classAdd(target, className) {
  target.classList.add(className);
}

export function classRemove(target, className) {
  target.classList.remove(className);
}

export function hasClass(target, className) {
  return target.classList.contains(className)
}

export function show(target) {
  target.style.display = 'block';
}

export function hide(target) {
  target.style.display = 'none';
}
