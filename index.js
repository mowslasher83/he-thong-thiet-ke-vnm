export const Button = ({ label, onClick }) => {
  return `<button>${label}</button>`;
};

export const setButtonClick = (element, onClick) => {
  element.addEventListener('click', onClick);
};