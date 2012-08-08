//Dan Welsh 2011
//Danveria home gui script ver 0.03

/*
Main changes:


start of gui skinning
--
changed system menu from switch to if statments, as this is easyier to manage whilst i am prototyping the gui

testing of gui skin

Know bugs:

Code is still reoultion dependant this need to be fixed (all placement 
should be done via a % of the screen

system menu - 
*/

//Todo change all window code to remove all need for hard numbers, they should be placed by screen percentage

//---------------------------------------------
//Datastores
//---------------------------------------------

//system

//stores used for saving screen rez data
//Height
var screenHeight = Screen.height;
//Width
var screenWidth = Screen.width;


//Stores used for the time and date
//Time
var Time = System.DateTime.Now.ToString("hhmmss");//internal use
var exTime = System.DateTime.Now.ToString("hh:mm:ss");//external use
 
//Date
var Date = System.DateTime.Now.ToString("MMddyyyy"); 
var exDate = System.DateTime.Now.ToString("MM/dd/yyyy");

//content

//Home page

var introTextLine1 : String = "Welcome to Danveria featuring the following content:";
var introTextLine2 : String = "\nBlogs - Blogs from the people of Danveria.";
var introTextLine3 : String = "\nGames - Games made by the people of Danveria";
var introTextLine4 : String = "\nCollections - Collections compiled by the people of Danveria";
var introTextLine5 : String = "\nOptions - Change your experience during your time in Danveria";

//artwork

var ArtWork_01 : GameObject;

var ArtWork_02 : GameObject;

var ArtWork_03 : GameObject;

var ArtWork_04 : GameObject;

var ArtWork_05 : GameObject;

//System menu 

//Datastore for the skins that will be used
var DanveriaSkin : GUISkin;//skin used the sites home section

//Booleans used to turn windows on and off
var ResetWindow : boolean = false;
var BlogWindow : boolean = false;
var GameWindow : boolean = false;
var DownloadsWindow : boolean = false;
var OptionWindow : boolean = false;
var PushWindow :  boolean = false;
var ControlsWindow : boolean = false;
var MusicWindow : boolean = false;


//function to create options content
function PushContent (windowID : int)
{
    //Personal
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Bandwidth - Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    
    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
       
    } 


}

//function to create options content
function ControlsContent (windowID : int)
{
    //Personal
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Bandwidth - Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    
    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
       
    } 


}

//fuction to create home content
function ResetContent(windowID : int)
{
    Application.LoadLevel (0);
    //all gui location numbers are to be based on screenWidth and screenHeight
    /*
    //intro text line 1
    GUI.Label (Rect ((Screen.width/45), (Screen.height/25), (Screen.width/2), (Screen.height/2)), introTextLine1);
    //intro text Line 2
    GUI.Label (Rect ((Screen.width/45), (Screen.height/15), (Screen.width/2), (Screen.height/4)), introTextLine2);
    //intro text Line 3
    GUI.Label (Rect ((Screen.width/45), (Screen.height/10), (Screen.width/2), (Screen.height/4)), introTextLine3);
	//intro text Line 4
	GUI.Label (Rect ((Screen.width/45), (Screen.height/7.5), (Screen.width/2), (Screen.height/4)), introTextLine4);
	//intro text Line 5
	GUI.Label (Rect ((Screen.width/45), (Screen.height/6), (Screen.width/2), (Screen.height/4)), introTextLine5);
	*/
}


//function to create blog content
function MusicContent(windowID : int)
{
    /*
    //Personal
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Introduction, Personal and Miscellaneous"))
    {
        Application.LoadLevel (1);
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Technical specifications"))
    {
        Application.LoadLevel (5);
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Software considerations"))
    {
        Application.LoadLevel (4);
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Costs & Monetization"))
    {
        Application.LoadLevel (8);
    } 

    
    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Target hardware"))
    {
        Application.LoadLevel (2);
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Network considerations"))
    {
        Application.LoadLevel (3);
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Roadmap & Design goals"))
    {
        Application.LoadLevel (6);
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Benchmark"))
    {
        Application.LoadLevel (7);
    }  
    */
}

//function to create game content
function GameContent(windowID : int)
{
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/20), (Screen.width/2.25), (Screen.height/5.5)), "Quiz and Casino"))
    {
        Application.LoadLevel (1);
    } 
    
    /*
    if(GUI.Button (Rect (20, 110, 550, 50), "Adventue"))
    {
        Application.LoadLevel (11);
    } 
    */
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/3.75), (Screen.width/2.25), (Screen.height/5.5)), "Shooting"))
    {
        Application.LoadLevel (2);
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/20), (Screen.width/2.25), (Screen.height/5.5)), "Racing"))
    {
        Application.LoadLevel (3);
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/3.75), (Screen.width/2.25), (Screen.height/5.5)), " Simulation and Management "))
    {
        Application.LoadLevel (4);
    } 

    //
    /*if(GUI.Button (Rect (600, 180, 550, 50), "Simulation and Management"))
    {
        //Application.LoadLevel (3);
    }*/ 

 

}

//function to create Collections content
function DownloadsContent (windowID : int)
{
    
    //Personal
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Dan Welsh - Images - Thisismethen"))
    {
         Application.LoadLevel (15);
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Dan Welsh - Video - Thisismethen"))
    {
         Application.LoadLevel (16);
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    
    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 


   
}

//function to create options content
function OptionsContent (windowID : int)
{
    //Personal
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Bandwidth - Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 
    
    //
    if(GUI.Button (Rect ((Screen.width/45), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    
    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/20), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/6.5), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/3.85), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
        
    } 

    //
    if(GUI.Button (Rect ((Screen.width/2.05), (Screen.height/2.75), (Screen.width/2.25), (Screen.height/12)), "Coming soon!"))
    {
       
    } 


}

//----------------------------
// built in unity functions
//----------------------------

function Awake()
{
    //load artwork content 
    //Instantiate (ArtWork_01, Vector3(0, 0, 25), Quaternion.identity);
}


function OnGUI ()
{
    //all gui location numbers are to be based on screenWidth and screenHeight

    //Create a group for the system menu options
    GUI.BeginGroup(new Rect(0,0, Screen.width, (Screen.height))); 
    
    //Create backrground box
    GUI.Box (new Rect (0,0, Screen.width, (Screen.height/14)),"");
    
    //Create system backrground box
    GUI.Box (new Rect ((Screen.width/1.075), (Screen.height/3), (Screen.width/15), (Screen.height/2.70)),"");
    
    //Create button 01 - push
    PushWindow = GUI.Toggle(Rect((Screen.width/1.070), (Screen.height/2.95), (Screen.width/17), (Screen.height/9)), PushWindow, "Push", "button");
 
    //Create button 02 - options
    OptionWindow = GUI.Toggle(Rect((Screen.width/1.070), (Screen.height/2.16), (Screen.width/17), (Screen.height/9)), OptionWindow, "Options", "button");
      
    //Create button 03 - Music
    MusicWindow = GUI.Toggle(Rect((Screen.width/1.070), (Screen.height/1.72), (Screen.width/17), (Screen.height/9)), MusicWindow, "Music", "button");      
                  
    //Create button 04 - home
    ResetWindow = GUI.Toggle(Rect((Screen.width/99), (Screen.height/99), (Screen.width/17), (Screen.height/20)), ResetWindow, "Restart", "button");

    //Create button 05 - Controls
    ControlsWindow = GUI.Toggle(Rect((Screen.width/1.344), (Screen.height/99), (Screen.width/4), (Screen.height/20)), ControlsWindow, "Controls", "button");   
 
 	//Create button 
 
 	//
    GUI.EndGroup(); 
    
    //Create home page label
    GUI.Label(Rect((Screen.width/1.45), (Screen.height/1.5), (Screen.width/8), (Screen.height/20)), "Danveria - Gameplay and Envroment prototypes.");
    
    //Check to see which window should be active
    if(ResetWindow)
    {
        GUI.Window (0, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.5), (Screen.height/2)), ResetContent, "Danveria ver 0.03 2012");
        
        //turn off other windows
        BlogWindow = false;
        GameWindow = false;
        DownloadsWindow = false;
        ControlsWindow = false;
        OptionWindow = false;
    }
    
    //   
    if(OptionWindow)
    {
        GUI.Window (1, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.05), (Screen.height/2)), OptionsContent, "Blogs");
        
        //turn off other windows 
        ResetWindow = false;
        GameWindow = false;
        DownloadsWindow = false;
        ControlsWindow = false;
    }
    
    //
    if(GameWindow)        
    {
        GUI.Window (2, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.05), (Screen.height/2)), GameContent, "Games");
        
        //turn off other windows
        ResetWindow = false;
        BlogWindow = false;
        DownloadsWindow = false;
        ControlsWindow = false;
        OptionWindow = false;
    }
    
    //
    if(DownloadsWindow)
    {
        GUI.Window (3, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.05), (Screen.height/2)), DownloadsContent, "Collections");
        
        //turn off other windows
        ResetWindow = false;
        BlogWindow = false;
        GameWindow = false;
        ControlsWindow = false;
        OptionWindow = false;
        
    }    
    
    //
    if(ControlsWindow)
    {
        GUI.Window (4, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.05), (Screen.height/2)), ControlsContent, "Options");
        
        //turn off other windows
        ResetWindow = false;
        BlogWindow = false;
        GameWindow = false;
        DownloadsWindow = false;
        OptionWindow = false;
    }
    
    //Check to see which window should be active
    if(PushWindow)
    {
        GUI.Window (0, Rect ((Screen.width/50), (Screen.height/10), (Screen.width/1.5), (Screen.height/2)), PushContent, "Push");
        
        //turn off other windows
        ResetWindow = false;
        GameWindow = false;
        DownloadsWindow = false;
        ControlsWindow = false;
        OptionWindow = false;
        
    }

}

function Update ()
{
    //todo add code that checks time and updates code base on time of day and year!
    //HomeWindow = false;
    //todo
    //Debug.Log("the current state of HomeContent is " + HomeWindow);
    
    
}
