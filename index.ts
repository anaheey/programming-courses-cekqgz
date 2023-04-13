//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num: number[];
let index: number;
let s: number;
let j: number;
num = [];
s = 0;
for (index = 0; index < 4; index++) {
  num[index] = parseInt(prompt('numero'));
  s = s + num[index];
}
j = s / num.length;
for (index = 0; index < num.length; index++) {
  if (num[index] >= s) {
    console.log(num[index]);
  }
}
