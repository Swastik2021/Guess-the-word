player1name = localStorage.getItem("player_1_name");
player2name = localStorage.getItem("player_2_name");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML= player1name+":";
document.getElementById("player2_name").innerHTML= player2name+":";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML = "Question turn =" + player1name;
document.getElementById("player_answer").innerHTML = "Answer turn =" + player2name;

function send(){
    get_word = document.getElementById("word").value;
    word_c = get_word.toLowerCase();
    charAt1=word_c.charAt(1);
    console.log(charAt1);
    length_divide_2 = Math.floor(word_c.length/2);
    charAt2 = word_c.charAt(length_divide_2)
    console.log(charAt2);
    lengthminus1=word_c.length-1;
    charAt3 = word_c.charAt(lengthminus1);
    console.log(charAt3);
    remove_charAT1=word_c.replace(charAt1, "_");
    remove_charAT2=remove_charAT1.replace(charAt2, "_");
    remove_charAT3=remove_charAT2.replace(charAt3, "_");
    
    question_word = "<h4 id = 'word_display'>Q. "+remove_charAT3+"</h4>"
    input_box = "<br>Answer : <input id= 'input_check_box' type='text'>"
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>"
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
    

}
question_turn = "player1";
answer_turn= "player2";
function check(){
get_answer=document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
if (answer == word_c){
    if(answer_turn == "player1"){
        player1score = player1score+1;
        document.getElementById("player1_score").innerHTML = player1score;
    }
    else{
        player2score = player2score+1;
        document.getElementById("player2_score").innerHTML = player2score;

    }
}
if(question_turn == "player1"){
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "question turn is" + player2name;
}
else{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "question turn is" + player1name;
}
if(answer_turn == "player1"){ 
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer turn is" + player2name;
}
else{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer turn is" + player1name;
}
document.getElementById("output").innerHTML = "";
}
