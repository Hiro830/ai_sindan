let sum = 0;
let array = [];
let answer = 0;
let w = [-0.94586414, -0.82308945, -0.98665868,  3.74839216];
function checkBtn(btnNo) {
  sum += 1;
  array.push(btnNo);
  console.log(sum)
  $('.slides li').eq(sum-1).fadeOut(0);

  if (sum === 4) {
    $('.btn').fadeOut();
    answer = array[0]*w[0] + array[1]*w[1] + array[2]*w[2] + array[3]*w[3]
    let final_answer = 0;
    final_answer = 1 / (1 + Math.exp(-answer))  //sigmoidの計算
    if (final_answer >= 0.6){
      $('.answer').fadeIn();
    }else{
      $('.answer_no').fadeIn();
    }
  };

  $('.slides li').eq(sum).fadeIn(0);

  // localStorage.setItem('Key2', "no man");
// var value2 = localStorage.getItem('Key2');
  // localStorage.clear();
}



var para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('名前を入力して下さい');
  para.textContent = 'Gest name: ' + name;
}

function kakunin(btnNo) {
  if (btnNo == 1){
    link="Yahoo!Japan";
    href = "http://www.yahoo.co.jp/";
  }else{
    link="Google";
    href="http://www.google.co.jp/";
  }
  ret = confirm(link + "へ飛びます。よろしいですか?");
  if(ret == true){
    location.href = href;
  }
}


$(function() {
  $('#login-show').click(function() {
    $('.modal').fadeIn();
  });

  $('#logout').click(function() {
    $('.modal').fadeOut();
  });
});
