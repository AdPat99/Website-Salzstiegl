window.onload = () => {
  const transElem = document.querySelector('.transition');
  const STransElem = document.querySelector('#STrans');

  setTimeout(() => {
    transElem.classList.remove('is-active');
  }, 250);

  STransElem.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;

    console.log(transElem);

    transElem.classList.add('is-active');

    console.log(transElem);

    setInterval(() => {
      window.location.href = target;
    }, 250);
  });
}