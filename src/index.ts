let noop = () => {};

let documentReady = (cb: () => any) => {
  if (typeof window == 'undefined' || typeof document == 'undefined') return noop;

  if (document.readyState == 'complete' || document.readyState == 'interactive') {
    requestAnimationFrame(cb);
    return noop;
  }

  document.addEventListener('DOMContentLoaded', cb);
  return () => document.removeEventListener('DOMContentLoaded', cb);
};

export default documentReady;
