/*Transition - SUmmer/Winter*/
window.onload = () => {
  const transElem = document.querySelector('.transition');
  const STransElem = document.querySelector('#STrans');
  const WTransElem = document.querySelector('#WTrans');

  // Create sun and snowflake images
  const sunElem = document.createElement('img');
  sunElem.src = '../Attachments/Transition/Sun.png';
  sunElem.style.display = 'none';
  transElem.appendChild(sunElem);

  const snowflakeElem = document.createElement('img');
  snowflakeElem.src = '../Attachments/Transition/Snowflake.png';
  snowflakeElem.style.display = 'none';
  transElem.appendChild(snowflakeElem);

  // Summer transition
  STransElem.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;

    transElem.classList.add('is-active');
    sunElem.style.display = 'block';

    setTimeout(() => {
      window.location.href = target;
    }, 750);
  });

  // Winter transition
  WTransElem.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target.href;

    transElem.classList.add('is-active-2');
    snowflakeElem.style.display = 'block';

    setTimeout(() => {
      window.location.href = target;
    }, 750);
  });
}