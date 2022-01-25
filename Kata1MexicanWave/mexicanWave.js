function wave(str) {
  // Code here
  //m
  const arr = []
  for (let i = 0; i < str.length; i++) {
    let words = str[i]
    if (words === "") {
      continue;
    } else{
      arr.push(str.slice(0, i) + words.toUppercase() + str.slice(i + 1))}
  }
 return arr
}

export default wave;
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
