console.log("plugin loaded");

const options = {
  rootMargin: '0px',
  threshold: 1.0
}

const scrollslick = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry.target, entry.isIntersecting)
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

const observer = new IntersectionObserver(scrollslick, options);

const targets = document.querySelectorAll('.block');
targets.forEach(target => {
  observer.observe(target);
});
