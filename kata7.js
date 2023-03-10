//Refactored first solution
const orderFinal = (words) => {
  let arr = words.split(' ').map((el) => [el, Number(el.replace(/[^0-9]/g, ' '))]).sort(function (a, b) {
    return a[1] - b[1];
  });
  return arr.map(el => el[0]).join(' ')
  }

//Original first solution
const order = (words) => {
  let newWords = words.split(' ');
  // console.log(newWords)
  let arr = [];
  let finalArr = [];
  console.log(newWords);
  // for (let j=0 ;j<newWords.length; j++){
  //   arr.push([newWords[j],Number(newWords[j].replace(/[^1-9]/g,""))]);
  // }
  arr = newWords.map((el) => [el, Number(el.replace(/[^0-9]/g, ' '))]).sort(function (a, b) {
    return a[1] - b[1];
  });
  // console.log(arr)


  finalArr = arr.map(el => el[0])
  console.log(finalArr)
  // let flatArray = arr.flat();
  // console.log(flatArray)
  // finalArr = flatArray.filter((el) => flatArray.indexOf(el) % 2 === 0);
  // finalArr = (arr.flat()).filter(el=> ((arr.flat()).indexOf(el))%2===0)

  return finalArr.join(' ');
  // return (finalArr.toLocaleString().replace(/,/g," "))
  // const obj = Object.fromEntries(arr)
  // console.log(obj)
  // for ( let i = 0 ; i < newWords.length; i++ ) {
  //   console.log(newWords)
  //   console.log(i)
  //   console.log(newWords[i])
  // }

  // console.log(wordArray.split(" ",words[0].length))
  // let message = words.split(' ').filter((el) => map1.set(el, w[el]));
  // let message = words.replace(/[^1-9]/g," ")
  // console.log(map1);
};

console.log(order('is2 Thi1s T4est 3a'));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
// console.log(order(""))
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//.split("").sort()

//Second solution 
const order3 = (wording) => {
  return wording
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
};
console.log(order3('is2 Thi1s T4est 3a'));