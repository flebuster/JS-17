function outputNumbers(one, two) {
  let current = one;

  setTimeout(function go() {
    alert(current);
    if (current < two) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

outputNumbers(1, 2);
