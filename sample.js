const arr = ['hello', 'world'];
arr.map(x=> x.split('')).flat();
arr.flatMap(x=>x.split(''));