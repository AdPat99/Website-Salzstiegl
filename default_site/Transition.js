window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transElem = document.querySelector('.transition');
  
    setTimeout(() => {
      transElem.classList.remove('is-active');
    }, 250);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(transElem);
  
        transElem.classList.add('is-active');
  
        console.log(transElem);
  
        setInterval(() => {
          window.location.href = target;
        }, 250);
      })
    }
  }