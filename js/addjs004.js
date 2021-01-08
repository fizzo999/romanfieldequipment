function repeatNumber() {
  let userAnswer = prompt('How many images would you like to see? - Please enter a value between 1 and 5');
  while (userAnswer < 1 || userAnswer > 5) {
    userAnswer = prompt('Incorrect ! Please enter a number between 1 and 5');
  }
  for (let i = 1; i <= userAnswer; i++) {
    document.write('<img src="https://source.unsplash.com/400x300/?Rome">');
  }
  // return userAnswer;
  // let currentRepeatNumber = i;
  let element2 = document.getElementById('headerNumber');
  element2.textContent = '<h1>' + 'Number' + i + '</h1>';
}
repeatNumber();











  // alert('Thank you for your rating' );
// '<img src="https://thehistoryofancientrome.weebly.com/uploads/2/4/0/5/24055914/2791138.jpeg?1382103329">'

    // document.write('<h1>' + userAnswer + '</h1>');