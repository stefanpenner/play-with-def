"use strict";
function asdf(a) {

}

function fn() {
  const y = 0;
  for (let x = 0; x < 10; x++) {
    const y = x * 2;
    const z = y;
    let zz = y;
    asdf(function(){
      y;
      z;
      zz;
    });
  }
  console.log(y); // prints 0
}
fn();
