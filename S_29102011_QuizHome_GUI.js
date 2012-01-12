//Dan Welsh 2011
//Danveria Quiz home gui script ver 0.01

/*
Main changes:
*/


//Datastores
//Store for the skins that will be used
var DanveriaSkin : GUISkin;//skin used the sites home section

//Booleans used to turn windows on and off
var Quiz1 : boolean = false;
var Quiz2 : boolean = false;
var Quiz3 : boolean = false;
var Quiz4 : boolean = false;

//Datastores for the lottery number genratots
//Lotto
//1st Number
var Ball_1;
//2nd number
var Ball_2;
//3rd number
var Ball_3;
//4th number
var Ball_4;
//5th number
var Ball_5;
//6th number
var Ball_6;
//Bouns number
var Bouns_ball; 

//fuction to create home content
function Quiz1Content(windowID : int)
{
    
    //Create a group for the system menu options
    GUI.BeginGroup(new Rect(10, 20, Screen.width, 100));
    
    Quiz1Into();
    
    //Debug.Break();
    
    // Waits 5 seconds
    //yield WaitForSeconds (5);
    
    GUI.EndGroup();
    

}

function Quiz1Into ()
{    
    var Ball_1 = Random.Range(1,49);
    GUI.Label (Rect (10, 20, 1280, 720), "1st Number "+Ball_1);
    
    var Ball_2 = Random.Range(1,49);
    GUI.Label (Rect (105, 20, 1280, 720), "2nd Number "+Ball_2);
    
    var Ball_3 = Random.Range(1,49);
    GUI.Label (Rect (205, 20, 1280, 720), "3rd Number "+Ball_3);
    
    var Ball_4 = Random.Range(1,49);
    GUI.Label (Rect (305, 20, 1280, 720), "4th Number "+Ball_4);
    
    var Ball_5 = Random.Range(1,49);
    GUI.Label (Rect (405, 20, 1280, 720), "5th Number "+Ball_5);
    
    var Ball_6 = Random.Range(1,49);
    GUI.Label (Rect (505, 20, 1280, 720), "6th Number "+Ball_6);
    
    var Bouns_ball = Random.Range(1,49);
    GUI.Label (Rect (10, 40, 1280, 720), "Bouns Number "+Bouns_ball);
    

    
    //Debug.Log("First number: "+ Ball_1 +Ball_2 +Ball_3); 
    
}

//fuction to create home content
function Quiz2Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1280, 720), " ");
    
}

//fuction to create home content
function Quiz3Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1280, 720), " ");
    
}

//fuction to create home content
function Quiz4Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1280, 720), " ");
    
}

function Awake()
{
    
}

function OnGUI ()
{
    //Create a group for the system menu options
    GUI.BeginGroup(new Rect(0, 0, Screen.width, 100)); 

    //Create backrground box
    GUI.Box (new Rect (0,0, Screen.width, 30), "Danveria Ver 0.02 - Technical Specifications");
    
    //Create button to return the user home
    if(GUI.Button (Rect (5, 4.5, 150, 20), "Home"))
    {
        Application.LoadLevel (0);
    } 
    
    
    //Create button 2 - Quiz 1
    Quiz1 = GUI.Toggle(Rect(160, 4.5, 150, 20), Quiz1, "Lottery", "button");

    //Create button 3 - Quiz 2
    Quiz2 = GUI.Toggle(Rect(315, 4.5, 150, 20), Quiz2, "Quiz 2", "button");

    //Create button 2 -  Quiz 3
    Quiz3 = GUI.Toggle(Rect(470, 4.5, 150, 20), Quiz3, "Quiz 3", "button");
    
    //Create button 2 - Quiz 4
    Quiz4 = GUI.Toggle(Rect(625, 4.5, 150, 20), Quiz4, "Quiz 4", "button");    
    
    GUI.EndGroup();

    //Check to see which window should be active
    if(Quiz1)
    {
        GUI.Window (0, Rect (10, 40, 1260, 670), Quiz1Content, "012 - Lottery number genrator"); 
        
       
    }

    //Check to see which window should be active
    if(Quiz2)
    {
        GUI.Window (1, Rect (10, 40, 1260, 670), Quiz2Content, "013 - Quiz 2");    
    }
    
    //Check to see which window should be active
    if(Quiz3)
    {
        GUI.Window (2, Rect (10, 40, 1260, 670), Quiz3Content, "014 - Quiz 3");    
    }
    
    //Check to see which window should be active
    if(Quiz4)
    {
        GUI.Window (3, Rect (10, 40, 1260, 670), Quiz4Content, "015 - Quiz 4");    
    }
    

}
