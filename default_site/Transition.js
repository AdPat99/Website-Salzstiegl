window.onload = () => {
  const transElem = document.querySelector('.transition');
  const STransElem = document.querySelector('#STrans');
  const WTransElem = document.querySelector('#WTrans');

  setTimeout(() => {
    transElem.classList.remove('is-active');
  }, 250);

  STransElem.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;

    console.log(transElem);

    transElem.classList.add('is-active');

    console.log(transElem);

    setTimeout(() => {
      window.location.href = target; 
    }, 250);
  });

  WTransElem.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;

    console.log(transElem);

    transElem.classList.add('is-active-2');

    console.log(transElem);

    setInterval(() => {
      window.location.href = target;
    }, 250);
  });
}