play_1 = localStorage.getItem("Player_1");
play_2 = localStorage.getItem("Player_2");
var score_1 = 0;
var score_2 = 0;
document.getElementById("player1_name").innerHTML = play_1 + ":";
document.getElementById("player2_name").innerHTML = play_2 + ":";

document.getElementById("player_q").innerHTML = "Question turn -" + play_1;
document.getElementById("player_ans").innerHTML = "Answer turn -" + play_2;

document.getElementById("player1_score").innerHTML = score_1;
document.getElementById("player2_score").innerHTML = score_2;

function send()
{
   get_word = document.getElementById("word").value;
   word = get_word.toLowerCase();
   
   chartAT1 = word.chartAt(1);

   length_divide_2 = Math.floor(word.length/2);
   chartAT2 = word.chartAt(length_divide_2);

   length_minus_1 = word.length - 1;
   chartAT3 = wordchartAt(length_minus_1);

   remove_chartAt1 = word.replace(chartAt1,"_");
   remove_chartAt2 = remove_chartAt1.replace(chartAT2,"_");
   remove_chartAt3 = remove_chartAt2.replace(chartAT3,"_");

   question_word = "<h4 id = 'word_display'>Q."+remove_chartAt3+"</h4>";
   input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
   check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
   row = question_word + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = "";
   }
question_turn = "player1";
answer_turn = "player2";
   function check()
   {
      get_answer = document.getElementById("input_check_box").value;
      answer = get_answer.toLowerCase();
      if(anwer == word)

      if (answer_turn == "player1")
      {
        score_1 = score_1 +1;
        document.getElementById("player1_score").innerHTML = score_1;
      }
      else
      {
         score_2 = score_2 + 1;
         document.getElementById("player2_score").innerHTML = score_2;
      }
      if(question_turn == "player1")
      {
        question_turn = "player2";
        document.getElementById("player_q").innerHTML = "Question Turn -" + play_2;
      }
      else
      {
         question_turn = "player1";
         document.getElementById("player_q").innerHTML = "Question Turn -" + play_1;
      }
      if(answer_turn == "player1")
      {
        answer_turn = "player2";
        document.getElementById("player_ans").innerHTML = "Answer Turn -" + play_2;
      }
      else
      {
         answer_turn = "player1";
         document.getElementById("player_ans").innerHTML = "Answer Turn -" + play_1;
      }
      document.getElementById("output").innerHTML = "";
   }
