// var r1=Math.floor(Math.random()*6)+1;
// var randomDiceImage='dice'+r1+".png"; 
// var randomImageSource='images/'+randomDiceImage;
// var img1=document.querySelectorAll("img")[0];
// img1.setAttribute("src",randomImageSource);

// var r2=Math.floor(Math.random()*6)+1;
// var randomDiceImage='dice'+r2+".png"; 
// var randomImageSource2='images/'+randomDiceImage;
// var img2=document.querySelectorAll("img")[1];
// img2.setAttribute("src",randomImageSource2);
// // n=Math.random();
// // n=n*6;
// // n=Math.floor(n)+1;
// // console.log(n);

// var header=document.querySelector("h1");
// if(r1>r2){
//     header.innerHTML="🚩Player 1 Wins";
// }
// else if(r2>r1){
//     header.innerHTML="Player 2 Wins🚩";
// }
// else{
//     header.innerHTML="DRAW !";
// }
var r1=Math.floor(Math.random()*6)+1
var r2=Math.floor(Math.random()*6)+1
document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+r1+".png")
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+r2+".png")
document.getElementsByTagName("h1")[0].textContent=r1===r2 ? " 🚩draw 🚩": r1>r2 ? '🚩player1 wins':'player2 wins🚩'