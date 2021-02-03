const scroll = {
  // inserted: (el, binding) => {
  //   window.addEventListener('resize', binding.value);
  // },
  // unbind: (el, binding) => {
  //   window.removeEventListener('resize', binding.value);
  // },
};

const resize = {
  inserted: (el, binding) => {
    const element = el;
    element.resizeObserver = new ResizeObserver((entries) => {
      const box = entries[0]?.contentRect;
      binding.value(box);
    });
    element.resizeObserver.observe(el, { box: 'border-box' });
  },
  unbind: (el) => {
    el.resizeObserver.unobserve(el);
  },
};

export {
  scroll,
  resize,
};
