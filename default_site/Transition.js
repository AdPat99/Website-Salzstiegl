/*Transition - SUmmer/Winter*/
window.onload = () => {
  const transElem = document.querySelector('.transition');
  const STransElem = document.querySelector('.STrans');
  const WTransElem = document.querySelector('.WTrans');

  // Summer transition
  STransElem.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;

    transElem.classList.add('is-active');


    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });

  // Winter transition
  WTransElem.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;

    transElem.classList.add('is-active-2');

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
}