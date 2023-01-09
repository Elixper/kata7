function order(words){
  let compareNumbers = (a,b) => {return a-b}
  console.log(words.split(" ").sort(compareNumbers))
    console.log(words.split(" "))
}

order("is2 Thi1s T4est 3a")
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//.split("").sort()