window.addEventListener('scroll', throttle(callback, 1000));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function callback() {
  var target = document.getElementById('#');
  
  if (window.scrollY > 200) {
    //do something
  }
}