function ziplist(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

console.log(ziplist(test1, test2));
console.log(ziplistTheSimpleWay(test1, test2));
