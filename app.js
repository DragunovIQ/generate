var numbers = [37, 54, 32, 45, 21, 69, 20];
var counter = 0;
function fetching(name){
  return document.getElementById(name);
}
var text = "Noah William Oliver Addilyn, Adley, Alisa, Alora, Analia, Aria, Armelle, Aviana William Elijah James Benjamin Lucas Mason Ethan Alexander Henry Jacob Michael Daniel Logan Jackson Sebastian Jack Aiden Owen Samuel Matthew Joseph Levi Mateo David John Wyatt Carter Julian";
var new_arr = text.split(" ");
var names = fetching("names");
function generateNumber(index) {
  var arr_rand = Math.floor(Math.random() * numbers.length);
  var rand = Math.floor(Math.random() * 29);
  var desired = rand;
  var wanted = new_arr[desired];
  var duration = 2000;
  var output = $('#output' + index); // Start ID with letter
  var started = new Date().getTime();
    animationTimer = setInterval(function() {
      if (output.text().trim() === desired || new Date().getTime() - started > duration) {
        clearInterval(animationTimer); // Stop the loop
        output.text(desired);
      } else {
      output.text(
        '' +
        Math.floor(Math.random() * 11) +
        Math.floor(Math.random() * 11)
      );
    }
  }, 100);
  setTimeout(function(){alert(wanted);}, 2300);
}
var txt = ""
var cc = 0;
new_arr.forEach(value => txt = txt + cc++ + ": " + value + "<br>" );
document.getElementById("demo").innerHTML = txt;
//new comment