// Named Export
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

// Older version
module.exports = {
    add,
    subtract,
    mul
}