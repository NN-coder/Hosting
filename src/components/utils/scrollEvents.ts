const SCROLL_UP = 'SCROLL_UP';
const SCROLL_DOWN = 'SCROLL_DOWN';

(function createScrollEvents() {
  let scrollTop = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const { pageYOffset } = window;

    if (pageYOffset < scrollTop) window.dispatchEvent(new CustomEvent(SCROLL_UP));
    else window.dispatchEvent(new CustomEvent(SCROLL_DOWN));

    scrollTop = pageYOffset;
  });
})();

export { SCROLL_UP, SCROLL_DOWN };
