//Dan Welsh 2011
//Danveria Introduction gui script ver 0.02

/*
Main changes:
	
Updated GUI to work with screen % rather than hard numbers, content also updated
	
*/

//Datastores
//System menu 
//Datastore for the skins that will be used
var DanveriaSkin : GUISkin;//skin used the sites home section

//Booleans used to turn windows on and off
var SiteIntro : boolean = false;
var deeFive : boolean = false;
var evilloz : boolean = false;
var Broodie : boolean = false;

//functions used to create content

//fuction to create home content
function IntroContent(windowID : int)
{
    GUI.Label (Rect ((Screen.width/45), (Screen.height/25), (Screen.width/2), (Screen.height/2)), "Weclome to Danveira our own prototyping site, we hope that you have a good time or find the infomation here usefull. remember that this is still a prototype and as such we are in the process of fixing the place up so please be paitent and expect things not to work :) ");
    
}

function deeFiveContent(windowID : int)
{
    GUI.Label (Rect ((Screen.width/45), (Screen.height/25), (Screen.width/2), (Screen.height/2)), "My name is Dan Welsh aka deeFive.\n\nI am a game designer and programmer. I try to look at each problem that I face with an open and clear mind, whist trying to remain calm and helpful at all times. I have always been into videogames, videogame design and 3d technology as far back as I can remember. I hope one day to be a Game director or Super generalist");
    
    //Create Programming skills button
    if(GUI.Button (Rect((Screen.width/50), (Screen.height/6), (Screen.width/8), (Screen.height/20)), "Programming skills"))
    {
    	//Programing skiils text
    	GUI.Label (Rect ((Screen.width/45), (Screen.height/5), (Screen.width/2), (Screen.height/25)), "xxxx");
  		//test
  		Debug.Log ("we have a click! - programming skills");
    } 

    //Create Software skills button
    if(GUI.Button (Rect((Screen.width/6.5), (Screen.height/6), (Screen.width/8), (Screen.height/20)), "Software skills"))
    {
    	//Programing skiils text
    	GUI.Label (Rect ((Screen.width/45), (Screen.height/5), (Screen.width/2), (Screen.height/25)), "xxxx");
  		//test
  		Debug.Log ("we have a click! - software skills");
    } 
    
    //Create CV button
    if(GUI.Button (Rect((Screen.width/3.45), (Screen.height/6), (Screen.width/8), (Screen.height/20)), "C.V."))
    {
    	//Programing skiils text
    	GUI.Label (Rect ((Screen.width/45), (Screen.height/5), (Screen.width/2), (Screen.height/25)), "xxxx");
  		//test
  		Debug.Log ("we have a click! - C.V.");
    } 


}

function evillozContent(windowID : int)
{

}

function BroodieContent(windowID : int)
{

}

function OnGUI ()
{
    //Create a group for the system menu options
    GUI.BeginGroup(new Rect(0,0, Screen.width, (Screen.height/14))); 

    //Create backrground box
    GUI.Box(new Rect (0,0, Screen.width, (Screen.height/14)),"");    
    
    //Create button to return the user home
    if(GUI.Button (Rect((Screen.width/99), (Screen.height/99), (Screen.width/8), (Screen.height/20)), "Home"))
    {
        Application.LoadLevel (0);
    } 
    
    
    //Create button 2 - Site intro
    SiteIntro = GUI.Toggle(Rect((Screen.width/7), (Screen.height/99), (Screen.width/8), (Screen.height/20)), SiteIntro, "Introduction", "button");

    //Create button 3 - deeFive intro
    deeFive = GUI.Toggle(Rect((Screen.width/3.65), (Screen.height/99), (Screen.width/8), (Screen.height/20)), deeFive, "Dan Welsh", "button");

    //Create button 2 - evilloz intro
    evilloz = GUI.Toggle(Rect((Screen.width/2.45), (Screen.height/99), (Screen.width/8), (Screen.height/20)), evilloz, "evilloz", "button");
    
    //Create button 2 - broodie intro
    Broodie = GUI.Toggle(Rect((Screen.width/1.85), (Screen.height/99), (Screen.width/8), (Screen.height/20)), Broodie, "Broodie", "button");

    //Create Danveria label 
    GUI.Label(Rect((Screen.width/1.45), (Screen.height/55), (Screen.width/8), (Screen.height/20)), "Danveria V0.03");
  

    GUI.EndGroup();

    //Check to see which window should be active
    if(SiteIntro)
    {
        GUI.Window (0, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.5), (Screen.height/6)), IntroContent, "001 - Weclome to Danveria");    
    }

    //Check to see which window should be active
    if(deeFive)
    {
        GUI.Window (1, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.5), (Screen.height/4)), deeFiveContent, "002 - deeFive's intro");    
    }
    
    //Check to see which window should be active
    if(evilloz)
    {
        GUI.Window (2, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.5), (Screen.height/2)), evillozContent, "003 - evilloz's intro");    
    }
    
    //Check to see which window should be active
    if(Broodie)
    {
        GUI.Window (3, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.5), (Screen.height/2)), BroodieContent, "004 - Broodies's intro");    
    }



}

