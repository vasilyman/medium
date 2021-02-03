const wScroll = {
  inserted: (el, binding) => {
    window.addEventListener('scroll', binding.value);
  },
  unbind: (el, binding) => {
    window.removeEventListener('scroll', binding.value);
  },
};

const wResize = {
  inserted: (el, binding) => {
    window.addEventListener('resize', binding.value);
  },
  unbind: (el, binding) => {
    window.removeEventListener('resize', binding.value);
  },
};

const wOrientation = {
  inserted: (el, binding) => {
    window.addEventListener('orientationchange', binding.value);
  },
  unbind: (el, binding) => {
    window.removeEventListener('orientationchange', binding.value);
  },
};

export {
  wScroll,
  wResize,
  wOrientation,
};
