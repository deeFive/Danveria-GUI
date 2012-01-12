//Dan Welsh 2011
//Danveria home gui script ver 0.01

//Todo change all window code to remove all need for hard numbers, they should be placed by screen percentage

//Declare GUIStyle so that we can edit it
var customGuiStyle : GUIStyle;

//Datastore for the skins that will be used
var DanveriaSkin : GUISkin;//skin used the site

//Datastores
//System menu 
var SystemMenuOption = 0;//data store for the option button press
var SystemMenuText : String[] = ["Home", "Blog", "Games", "About", "Options"];//data store for the option buttons text
//TODO create an array for images


function Update ()
{
    //todo add code that checks time and updates code base on time of day and year!
    
    //todo
}

function OnGUI ()
{
    //Draw gui
    
    //Set Font size

    // Assign the skin to be the one currently used.
	GUI.skin = DanveriaSkin;

    
    //System background bar
    GUI.Box (Rect(0, 0, Screen.width, 62), "Danveria Ver 0.01 - System menu");
    //System menu options
    SystemMenuOption = GUI.Toolbar (Rect (5, 22, (Screen.width - 10), 30), SystemMenuOption, SystemMenuText);
    
    switch(SystemMenuOption)
    {
        //menu option 1 - display home content    
        case 0:
        //output text
        //Debug.Log("the option selected was Home");
        //Set SystemMenuOption to 0
        SystemMenuOption = 0; 
        //call homeWindow function 
        HomeWindow();
        
        Application.LoadLevel (0);
        
        
        break;
        
        case 1:
        //Debug.Log("the option selected was Blogs");
        //Set SystemMenuOption to 1
        SystemMenuOption = 1; 
        //Draw blogs window
        BlogWindow();
        //Draw blogs nav window
        BlogNavWindow();
        
        
        break;
        
        case 2:
        //Debug.Log("the option selected was games");
        //Set SystemMenuOption to 2
        SystemMenuOption = 2; 
        GamesWindow();
        GameNavWindow();
        
        break;
        
        case 3:
        //Debug.Log("the option selected was About");
        //Set SystemMenuOption to 3
        SystemMenuOption = 3; 
        AboutWindow();
        AboutNavWindow();
        
        break;
        
        case 4:
        //Debug.Log("the option selected was Options");
        //Set SystemMenuOption to 4
        SystemMenuOption = 4; 
        OptionWindow();
        OptionNavWindow();
        
        break;
        
        default: 
        //
        Debug.Log("No optiom has been selected");
    }

    
    //System options 
}


//funtions to draw windows
function DrawWindow (windowID : int)
{
    //Debug.Log("Got a click in window" + windowID);
    //Make window dragable - TODO
    //GUI.DragWindow(Rect(0, 0, 100000, 20));
}

//Home functions

function HomeWindow ()
{
    //Draw a window to the screen
    GUI.Window (0, Rect(100, 100, 1280, 720), DrawWindow, "Home window");
    //Home weclome Text
    
    HomePageText();
}

function HomePageText ()
{

    //add code for thr home pages text here
    GUI.Label (Rect(120, 120, 1240, 680), "Weclome to Danveira, we hope that you have a good fun time here or find the infomation here usefull. are still in the process of fixing the place up so please be paitent :)"); 

}

//Blog functions

//Create the blog navagation
function BlogNavWindow ()
{
    //Draw window for nav background
    GUI.Window (6, Rect(1430, 100, 400, 720), DrawWindow, "Navagation");
}

function BlogWindow ()
{
    //Draw a window to the screen
    GUI.Window (1, Rect(100, 100, 1280, 720), DrawWindow, "Blogs window");  
    //Blog 1
    BlogPreview ();
}

function BlogPreview ()
{
    //TODO add function to retrive blog content
    
    //TODO add function to to create blog preview button
    
    //Create blog button menu
    var BlogMenuOption = 0;//data store for the option button press
    var BlogMenuText : String[] = ["Intro", "Units and Scale", "Software considerations", "Target hardware", "Network considerations", "Roadmap"];//data store for the option buttons text
    //TODO create an array for images
    
    
    
    BlogMenuOption = GUI.SelectionGrid (Rect (140, 160, 1200, 620), BlogMenuOption, BlogMenuText, 2);

    switch(BlogMenuOption)
    {
       case 0://menu option 1 - display intro content    
       //output text to tst the function
       Debug.Log("the intro blog was selected " +BlogMenuOption);
              
       //Set BlogMenuOption to 0
       BlogMenuOption = 0; 
       
       //Application.LoadLevel (1); 
       break;
       
       case 1://menu option 2 - display units content    
       //output text to tst the function
       Debug.Log("the Units blog was selected");
       
       //Set BlogMenuOption to 1
       BlogMenuOption = 1; 
        
       break;
       
       case 2://menu option 3 - display software content    
       //output text to tst the function
       Debug.Log("the software blog was selected");
       
       //Set BlogMenuOption to 2
       BlogMenuOption = 2;  
       
       break;
       
       case 3://menu option 4 - display Target hardware content    
       //output text to tst the function
       Debug.Log("the Hardware blog was selected");
       
       //Set BlogMenuOption to 3
       BlogMenuOption = 3;  
       
       break;
       
       case 4://menu option 5 - display network requirements content    
       //output text to tst the function
       Debug.Log("the network blog was selected");
       
       //Set BlogMenuOption to 4
       BlogMenuOption = 4; 
       
       break;
       
       case 5://menu option 6 - Roadmaps    
       //output text to tst the function
       Debug.Log("the Roadmap blog was selected");
       
       //Set BlogMenuOption to 5
       BlogMenuOption = 5; 
        
       break;
       
       default:
       Debug.Log("no option has been selected");
    }
}

//Games Functions

function GamesWindow ()
{
    //Draw a window to the screen
    GUI.Window (2, Rect(100, 100, 1280, 720), DrawWindow, "Games window");
    GamePreview();
}


function GameNavWindow ()
{
    //Draw window for nav background
    GUI.Window (6, Rect(1430, 100, 400, 720), DrawWindow, "Navagation");
}


function GamePreview ()
{
    //TODO add function to retrive blog content
    
    //TODO add function to to create blog preview button
    
    //Create blog button menu
    var GameMenuOption = 0;//data store for the option button press
    var GameMenuText : String[] = ["Intro", "Units and Scale", "Software considerations", "Target hardware", "Network considerations", "Roadmap"];//data store for the option buttons text
    //TODO create an array for images
    
    
    
    GameMenuOption = GUI.SelectionGrid (Rect (140, 160, 1200, 620), GameMenuOption, GameMenuText, 2);

    switch(GameMenuOption)
    {
       case 0://menu option 1 - display intro content    
       //output text to tst the function
       Debug.Log("the intro blog was selected");
       
       //Set GameMenuOption to 0
       GameMenuOption = 0;  
       break;
       
       case 1://menu option 2 - display units content    
       //output text to tst the function
       Debug.Log("the Units blog was selected");

       //Set GameMenuOption to 1
       GameMenuOption = 1;         
       break;
       
       case 2://menu option 3 - display software content    
       //output text to tst the function
       Debug.Log("the software blog was selected");
        
       //Set GameMenuOption to 3
       GameMenuOption = 3;  
       break;
       
       case 3://menu option 4 - display Target hardware content    
       //output text to tst the function
       Debug.Log("the Hardware blog was selected");

       //Set GameMenuOption to 4
       GameMenuOption = 4;  
       break;
       
       case 4://menu option 5 - display network requirements content    
       //output text to tst the function
       Debug.Log("the network blog was selected");
       
       //Set GameMenuOption to 5
       GameMenuOption = 5;  
       break;
       
       case 5://menu option 6 - Roadmaps    
       //output text to tst the function
       Debug.Log("the Roadmap blog was selected");
       
       //Set GameMenuOption to 6
       GameMenuOption = 6;  
 
       break;
       
       default:
       Debug.Log("no option has been selected");
    }
}

//About functions


function AboutWindow ()
{
    //Draw a window to the screen
    GUI.Window (3, Rect(100, 100, 1280, 720), DrawWindow, "About window");
    AboutPreview();
}


function AboutNavWindow ()
{
    //Draw window for nav background
    GUI.Window (6, Rect(1430, 100, 400, 720), DrawWindow, "Navagation");
}


function AboutPreview ()
{
    //TODO add function to retrive blog content
    
    //TODO add function to to create blog preview button
    
    //Create blog button menu
    var AboutMenuOption = 0;//data store for the option button press
    var AboutMenuText : String[] = ["Intro", "Units and Scale", "Software considerations", "Target hardware", "Network considerations", "Roadmap"];//data store for the option buttons text
    //TODO create an array for images
    
    
    
    AboutMenuOption = GUI.SelectionGrid (Rect (140, 160, 1200, 620), AboutMenuOption, AboutMenuText, 2);

    switch(AboutMenuOption)
    {
       case 0://menu option 1 - display intro content    
       //output text to tst the function
       Debug.Log("the intro blog was selected");
       
       //Set AboutMenuOption to 0
       AboutMenuOption = 0;  
       break;
       
       case 1://menu option 2 - display units content    
       //output text to tst the function
       Debug.Log("the Units blog was selected");
       
       //Set AboutMenuOption to 1
       AboutMenuOption = 1;   
       break;
       
       case 2://menu option 3 - display software content    
       //output text to tst the function
       Debug.Log("the software blog was selected");
       
       //Set AboutMenuOption to 2
       AboutMenuOption = 2;  
       break;
       
       case 3://menu option 4 - display Target hardware content    
       //output text to tst the function
       Debug.Log("the Hardware blog was selected");
       
       //Set AboutMenuOption to 3
       AboutMenuOption = 3;   
       break;
       
       case 4://menu option 5 - display network requirements content    
       //output text to tst the function
       Debug.Log("the network blog was selected");
       
       //Set AboutMenuOption to 4
       AboutMenuOption = 4;  
       break;
       
       case 5://menu option 6 - Roadmaps    
       //output text to tst the function
       Debug.Log("the Roadmap blog was selected");
       
       //Set AboutMenuOption to 5
       AboutMenuOption = 5;   
       break;
       
       default:
       Debug.Log("no option has been selected");
    }
}

//Option functions

function OptionWindow ()
{
    //Draw a window to the screen
    GUI.Window (4, Rect(100, 100, 1280, 720), DrawWindow, "Option window");
    OptionPreview();
}


function OptionNavWindow ()
{
    //Draw window for nav background
    GUI.Window (6, Rect(1430, 100, 400, 720), DrawWindow, "Navagation");
}


function OptionPreview ()
{
    //TODO add function to retrive blog content
    
    //TODO add function to to create blog preview button
    
    //Create blog button menu
    var OptionMenuOption = 0;//data store for the option button press
    var OptionMenuText : String[] = ["Intro", "Units and Scale", "Software considerations", "Target hardware", "Network considerations", "Roadmap"];//data store for the option buttons text
    //TODO create an array for images
    
    
    
    OptionMenuOption = GUI.SelectionGrid (Rect (140, 160, 1200, 620), OptionMenuOption, OptionMenuText, 2);

    switch(OptionMenuOption)
    {
       case 0://menu option 1 - display intro content    
       //output text to tst the function
       Debug.Log("the intro blog was selected");
       
       //Set OptionMenuOption to 0
       OptionMenuOption = 0;   
       break;
       
       case 1://menu option 2 - display units content    
       //output text to tst the function
       Debug.Log("the Units blog was selected");

       
       //Set OptionMenuOption to 1
       OptionMenuOption = 1;          
       break;
       
       case 2://menu option 3 - display software content    
       //output text to tst the function
       Debug.Log("the software blog was selected");
       
              
       //Set OptionMenuOption to 2
       OptionMenuOption = 2;   
       break;
       
       case 3://menu option 4 - display Target hardware content    
       //output text to tst the function
       Debug.Log("the Hardware blog was selected");
       
              
       //Set OptionMenuOption to 3
       OptionMenuOption = 3;   
       break;
       
       case 4://menu option 5 - display network requirements content    
       //output text to tst the function
       Debug.Log("the network blog was selected");
       
              
       //Set OptionMenuOption to 4
       OptionMenuOption = 4;  
       break;
       
       case 5://menu option 6 - Roadmaps    
       //output text to tst the function
       Debug.Log("the Roadmap blog was selected");
       
              
       //Set OptionMenuOption to 5
       OptionMenuOption = 5;   
       break;
       
       default:
       Debug.Log("no option has been selected");
    }
}

