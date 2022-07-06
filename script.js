console.log('Hello!');

let header = document.getElementById('header');

header.addEventListener('myCustomEvent', function (e) {
  console.log(e.detail);

  header.style.backgroundColor = e.detail.color;
});

function addBgColor(c) {
  const event = new CustomEvent('myCustomEvent', {
    detail: {
      color: c,
    },
  });
  console.log(event);
  header.dispatchEvent(event);
}

addBgColor('blue');
