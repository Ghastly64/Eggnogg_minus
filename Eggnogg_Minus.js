var p1;
var p2;
var floor = [];
var jump1flag = 0;
var jump2flag = 0;
var p1_sheild;
var p2_sheild;
var p1_1 = "a";
var p1_2 = "a";
var p1_3 = "a";
var p1_4 = "a";
var p1_5 = "a";
var p2_1 = "a";
var p2_2 = "a";
var p2_3 = "a";
var p2_4 = "a";
var p2_5 = "a";
var p1_sword;
var p2_sword;
var p1_back;
var p2_back;
var p1_txt;
var p2_txt;
var p1_color;
var p2_color;
var p1_msg;
var p2_msg;
var p1_score = 0;
var p2_score = 0;
var p1_back_check = "l";
var p2_back_check = "r";
var p1_sword_check ="r";
var p2_sword_check ="l";
var sheild1_check = "r";
var sheild2_check = "l";
setSize(540, 360);

function start() {
    p1_color = readLine("Player 1, what color would you like to be: ");
    p2_color = readLine("Player 2, what color would you like to be: ");
    p1Setup();
    p2Setup();
    sword1setup();
    sword2setup();
    //setup1_kill_back();
    //setup2_kill_back();
    p1_score_setup();
    p2_score_setup();
    keyDownMethod(checkMovement);
    keyUpMethod(checkUpMovement);
    setTimer(wall_block, 20);
    room1();
    setTimer(win, 50);
}


function room1(){
    var floor0 = new Rectangle(getWidth(), getHeight() / 3);
    floor0.setPosition(0, getHeight() / 3 * 2);
    add(floor0);
    floor.push(floor0);
}


function p1Setup(){
    p1 = new Rectangle(12, 24);
    p1.setPosition(100, getHeight() / 3 * 2 - 24);
    p1.setColor(p1_color);
    add(p1);
    
    p1_sheild = new Rectangle(3, 24);
    p1_sheild.setPosition(110, getHeight() / 3 * 2 - 24);
    p1_sheild.setColor("#C0C0C0");
    add(p1_sheild);
}

function p2Setup(){
    p2 = new Rectangle(12, 24);
    p2.setPosition(440, getHeight() / 3 * 2 - 24);
    p2.setColor(p2_color);
    add(p2);
    
    p2_sheild = new Rectangle(3, 24);
    p2_sheild.setPosition(440, getHeight() / 3 * 2 - 24);
    p2_sheild.setColor("#C0C0C0");
    add(p2_sheild);
}

function p1_score_setup(){
    p1_txt = new Text("Kills: " + p1_score);
    p1_txt.setColor(p1_color);
    p1_txt.setPosition(20, 35);
    add(p1_txt);
    
}

function p2_score_setup(){
    p2_txt = new Text("Kills: " + p2_score);
    p2_txt.setColor(p2_color);
    p2_txt.setPosition(450, 35);
    add(p2_txt);
    
}

function score_update(){
    p1_txt.setText("Kills: " + p1_score);
    p2_txt.setText("Kills: " + p2_score);
}

function sheild1Movement(){
    if (sheild1_check == "r"){
        p1_sheild.setPosition(p1.getX() + 10, p1.getY());
    }
    if (sheild1_check == "l"){
        p1_sheild.setPosition(p1.getX() - 1, p1.getY());
    }
}

function sheild2Movement(){
    if (sheild2_check == "r"){
        p2_sheild.setPosition(p2.getX() + 10, p2.getY());
    }
    if (sheild2_check == "l"){
        p2_sheild.setPosition(p2.getX() - 1, p2.getY());
    }
}

function sword1setup(){
    p1_sword = new Rectangle(15, 3);
    p1_sword.setPosition(108, getHeight() / 3 * 2 - 15);
    p1_sword.setColor("#C0C0C0");
    add(p1_sword);
}

function sword1Movement(){
    if (p1_sword_check == "r"){
        p1_sword.setPosition(p1.getX() + 8, p1.getY() + 9);
    }
    if (p1_sword_check == "l"){
        p1_sword.setPosition(p1.getX() - 10, p1.getY() + 9);
    }
}

function sword2setup(){
    p2_sword = new Rectangle(15, 3);
    p2_sword.setPosition(431, getHeight() / 3 * 2 - 15);
    p2_sword.setColor("#C0C0C0");
    add(p2_sword);
}

function sword2Movement(){
    if (p2_sword_check == "r"){
        p2_sword.setPosition(p2.getX() + 8, p2.getY() + 9);
    }
    if (p2_sword_check == "l"){
        p2_sword.setPosition(p2.getX() - 10, p2.getY() + 9);
    }
}
/*
function setup1_kill_back(){
    p1_back = new Rectangle(2, 24);
    p1_back.setPosition(100, getHeight() / 3 * 2 - 24);
    p1_back.setColor(Color.blue);
    add(p1_back);
}

function setup2_kill_back(){
    p2_back = new Rectangle(2, 24);
    p2_back.setPosition(451, getHeight() / 3 * 2 - 24);
    p2_back.setColor(Color.red);
    add(p2_back);
}

function back1movement(){
    if (p1_back_check == "r"){
        p1_back.setPosition(p1.getX() + 11, p1.getY());
    }
    if (p1_back_check == "l"){
        p1_back.setPosition(p1.getX(), p1.getY());
    }
}

function back2movement(){
    if (p2_back_check == "r"){
        p2_back.setPosition(p2.getX() + 11, p2.getY());
    }
    if (p2_back_check == "l"){
        p2_back.setPosition(p2.getX(), p2.getY());
    }
}
*/
function checkMovement(e){
    
    if(e.keycode==Keyboard.letter('Q')){
        tele_left();
    }
    
    if(e.keycode==Keyboard.letter('E')){
        tele_right();
    }
    
    
    if(e.keyCode==Keyboard.letter('W')){
        p1Up();
    }
    
    if(e.keyCode==Keyboard.letter('A')){
        stopTimer(p1Left);
        p1_sword_check = "l";
        p1_back_check = "r";
        sheild1_check = "l";
        setTimer(p1Left, 30);
    }
    
    if(e.keyCode==Keyboard.letter('D')){
        stopTimer(p1Right);
        p1_sword_check = "r";
        p1_back_check = "l";
        sheild1_check = "r";
        setTimer(p1Right, 30);
    }
    
    if(e.keyCode==Keyboard.UP){
        p2Up();
    }
    
    if(e.keyCode==Keyboard.LEFT){
        stopTimer(p2Left);
        sheild2_check = "l";
        p2_back_check = "r";
        p2_sword_check="l";
        setTimer(p2Left,30);
    }
    
    if(e.keyCode==Keyboard.RIGHT){
        stopTimer(p2Right);
        sheild2_check = "r";
        p2_back_check = "l";
        p2_sword_check="r";
        setTimer(p2Right,30);
    }
    
    
    
}

function checkUpMovement(e){
    
    if(e.keyCode==Keyboard.letter('W')){
        stopTimer(p1Up);
        
    }
    
    if(e.keyCode==Keyboard.letter('A')){
        stopTimer(p1Left);
    }
    
    if(e.keyCode==Keyboard.letter('D')){
        stopTimer(p1Right);
    }
    
    
    if(e.keyCode==Keyboard.UP){
        p2Up();
    }
    
    if(e.keyCode==Keyboard.LEFT){
        stopTimer(p2Left);
    }
    
    if(e.keyCode==Keyboard.RIGHT){
        stopTimer(p2Right);
    }
    
    
    
}

function hit_detect(){
    if(p1_sword_check == "l"){
        var elem = getElementAt(p1_sword.getX() - 1, p1_sword.getY());
	    if (elem == p2) {
		    lose(p2);
	    }
    }   
    
    if(p1_sword_check == "r"){
        var elem = getElementAt(p1_sword.getX() + 17, p1_sword.getY());
	    if (elem == p2) {
		    lose(p2);
	    }
    }
    
    if(p2_sword_check == "l"){
        var elem = getElementAt(p2_sword.getX() - 1, p2_sword.getY());
	    if (elem == p1) {
		    lose(p1);
	    }
    }   
    
    if(p2_sword_check == "r"){
        var elem = getElementAt(p2_sword.getX() + 17, p2_sword.getY());
	    if (elem == p1) {
		    lose(p1);
	    }
    }
    
}

var pp;

function lose(p){
    pp = p;
    p.setPosition(0, 350);
    if(p == p1){
        p1_sword.setPosition(0, 350);
        p1_sheild.setPosition(0, 350);
        p2_score++;
    }
    if(p == p2){
        p2_sword.setPosition(0, 350);
        p2_sheild.setPosition(0, 350);
        p1_score++;
    }
    score_update();
    setTimer(respawn, 2000);
}

function win(){
    if(p1_score == 5){
        var p1_winn = new Text(p1_color + " Won!, Good Job", "30pt Arial");
        p1_winn.setPosition(100, 200);
        p1_winn.setColor(p1_color);
        add(p1_winn);
        kill_everything();
    }
    if(p2_score == 5){
        var p2_winn = new Text(p2_color + " Won!, Good Job", "30pt Arial");
        p2_winn.setPosition(100, 200);
        p2_winn.setColor(p2_color);
        add(p2_winn);
        kill_everything();
    }
    
    
}

function kill_everything(){
    remove(p1);
    remove(p2);
    remove(p1_sword);
    remove(p1_sheild);
    remove(p2_sword);
    remove(p2_sheild);
    remove(floor[0]);
    remove(p1_txt);
    remove(p2_txt);
}

function respawn(){
    if(pp == p1){
        p1.setPosition(100, getHeight() / 3 * 2 - 24);
        p1_sword.setPosition(108, getHeight() / 3 * 2 - 15);
        p1_sheild.setPosition(110, getHeight() / 3 * 2 - 24);
    }
    if(pp == p2){
        p2.setPosition(440, getHeight() / 3 * 2 - 24);
        p2_sword.setPosition(431, getHeight() / 3 * 2 - 15);
        p2_sheild.setPosition(440, getHeight() / 3 * 2 - 24);
    }
    stopTimer(respawn);
}

function wall_block() {
    if (p1.getX() < 0){
        p1.setPosition(0, getHeight() / 3 * 2 - 24);
    }
    
    if (p1.getX() > 528){
        p1.setPosition(528, getHeight() / 3 * 2 - 24);
    }
    
    if (p2.getX() < 0){
        p2.setPosition(0, getHeight() / 3 * 2 - 24);
    }
    
    if (p2.getX() > 528){
        p2.setPosition(528, getHeight() / 3 * 2 - 24);
    }
}             

function tele_left(){
    p1.setPosition(20, getHeight() / 3 * 2 - 24);
}

function tele_right(){
    p1.setPosition(530, getHeight() / 3 * 2 - 24);
}

function p1Up(){
    if (jump1flag == 0){
        p1.move(0, -36);
        sheild1Movement();
        sword1Movement();
        //back1movement();
       // back2movement();
        hit_detect();
        setTimer(p1Down, 300);
        jump1flag = 1;
    }
}

function p1Down(){
    p1.move(0, 36);
    sheild1Movement();
    //back1movement();
    sword1Movement();
    hit_detect();
    stopTimer(p1Down);
    jump1flag = 0;
}

function p1Left(){
    p1.move(-10, 0);
    sword1Movement();
   // back1movement();
    hit_detect();
    sheild1Movement();
}

function p1Right(){
    p1.move(10, 0);
    sword1Movement();
   // back1movement();
    hit_detect();
    sheild1Movement();
}

function p2Up(){
    if (jump2flag == 0){
        p2.move(0, -36);
        hit_detect();
        //back2movement();
        sheild2Movement();
        sword2Movement();
        setTimer(p2Down, 300);
        jump2flag = 1;
    }
}

function p2Down(){
    p2.move(0, 36);
    sheild2Movement();
    hit_detect();
   // back2movement();
    sword2Movement();
    stopTimer(p2Down);
    jump2flag = 0;
}

function p2Right(){
    p2.move(10, 0);
    hit_detect();
    sword2Movement();
    //back2movement();
    sheild2Movement();
}

function p2Left(){
    p2.move(-10, 0);
    hit_detect();
    sword2Movement();
   // back2movement();
    sheild2Movement();
}