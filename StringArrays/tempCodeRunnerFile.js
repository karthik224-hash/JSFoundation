const arr = [["html","css","js"],1,2,3,4,5,6];

const [courses, ...rest] = arr;

console.log(courses);
console.log(rest)

const a = 10, b = 15;
[a,b] = [b,a]

console.log("A - ",a);
console.log("B -", b);