export const Button = ({ label, onClick }) => {
  return `<button onclick="${onClick}">${label}</button>`;
};

export const setButtonClick = (element, onClick) => {
  element.addEventListener('click', onClick);
};