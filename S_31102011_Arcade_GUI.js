//Dan Welsh 2011
//Danveria Arcade GUI script ver 0.01

/*
Main changes:
*/

//-----------------------------------
//Datastores
//-----------------------------------

//content

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

//Datastores for the arcade "home" areas

//Datastore for the skins that will be used
var DanveriaSkin : GUISkin;//skin used the sites home section

//Platform home 3d content

//PLatform HOme BackGround "PL_HO_BG_01"
var PL_HO_BG_01 : GameObject;
//Platform Home PLatforms  "PL_HO_PL_01"
var PL_HO_PL_01 : GameObject;

//Shooting home 3d content

//shooting home test
var ST_HO_BG_01 : GameObject;

//Racing home 3d content

//racing home test
var RA_HO_BG_01 : GameObject;

//Fighting home 3d content

//Fighting home test
var FT_HO_BG_01 : GameObject;


//Booleans used to turn windows on and off
var ArcadeOutline : boolean = false;
var Platform : boolean = false;
var Racing : boolean = false;
var Fighting : boolean = false;
var Shooting : boolean = false;
var Other : boolean = false;



//----------------------------------------------------------------
//Arcade home functions
//----------------------------------------------------------------

//Acrade GUI functions

//fuction to create home content
function OutlineContent(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Content by Daniel Welsh");
    
}

//function to create class 1 content
function PlatformContent(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Content by Daniel Welsh");
    PlatformHome();
}

//function to create class 2 content
function RacingContent(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Content by Daniel Welsh");
    RacingHome();
}

//function to create class 3 content
function FightingContent(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Content by Daniel Welsh");
    FightingHome();
}

//function to create class 4 content
function ShootingContent(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Content by Daniel Welsh");
    ShootingHome();
}

//function to create class 5 content
function OtherContent(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Content by Daniel Welsh");
}

//-----------------------------------------
//Acrade Home Content processing 
//-----------------------------------------

// Platform home function - loads the platform home content
function PlatformHome()
{   
    //Call Platform Home Backgroung
    Instantiate (PL_HO_BG_01, Vector3(0, 0, 0), Quaternion.identity);
    
    //Call Platform Home Stage 
    Instantiate (PL_HO_PL_01, Vector3(0, 0, 0), Quaternion.identity);
} 

// Shooting home function - load the Shooting home content
function ShootingHome()
{
    //Call Shooting Home Stage 
    Instantiate (ST_HO_BG_01, Vector3(0, 0, 0), Quaternion.identity);
}

// Racing home function = loads the Racing home content
function RacingHome()
{
    //call the racing home stage
    Instantiate (RA_HO_BG_01, Vector3(0, 0, 0), Quaternion.identity);
}

// Fighting home function - loads the fighting home content
function FightingHome()
{
    //call the fighting home stage
    Instantiate (FT_HO_BG_01, Vector3(0, 0, 0), Quaternion.identity);
}

//-------------------------------------------------------------------
//   Unity3d built in functions
//-------------------------------------------------------------------

function Awake()
{
    //load home content
    //load content based on time of day
    switch(Time)
    {
        //midnight 00:00:00
        case 000000:
            //Platform home content
            PlatformHome();
        break;
        
        //1am
        case 010000:
            //Platform home content
            PlatformHome();
        break;
        
        //2am
        case 020000:
            //Platform home content
            PlatformHome();
        break;

        //3am
        case 030000:
            //Platform home content
            PlatformHome();
        break;

        //4am
        case 040000:
            //Platform home content
            PlatformHome();
        break;

        //5am
        case 050000:
            //Platform home content
            PlatformHome();
        break;

        //6am
        case 060000:
            //Platform home content
            PlatformHome();
        break;

        //7am
        case 070000:
            //Platform home content
            PlatformHome();
        break;
        
        //8am
        case 080000:
            //Platform home content
            PlatformHome();
        break;
        
        //9am
        case 090000:
            //Platform home content
            PlatformHome();
        break;

        //10am
        case 100000:
            //Platform home content
            PlatformHome();
        break;

        //11am
        case 110000:
            //Platform home content
            PlatformHome();
        break;

        //12am
        case 120000:
            //Platform home content
            PlatformHome();
        break;

        //1pm
        case 130000:
            //Platform home content
            PlatformHome();
        break;
        
        //2pm
        case 140000:
            //Platform home content
            PlatformHome();
        break;
        
        //3pm
        case 150000:
            //Platform home content
            PlatformHome();
        break;
        
        //4pm
        case 160000:
            //Platform home content
            PlatformHome();
        break;
        
        //5pm
        case 170000:
            //Platform home content
            PlatformHome();
        break;
        
        //6pm
        case 180000:
            //Platform home content
            PlatformHome();
        break;
        
        //7pm
        case 190000:
            //Platform home content
            PlatformHome();
        break;
        
        //8pm
        case 200000:
            //Platform home content
            PlatformHome();
        break;
        
        //9pm
        case 210000:
            //Platform home content
            PlatformHome();
        break;
        
        //10pm
        case 220000:
            //Platform home content
            PlatformHome();
        break;
        
        //11pm
        case 230000:
            //Platform home content
            PlatformHome();
        break;
        
        default:
            //load platform home content in the default context
            FightingHome(); 
                 
    }  
}

function OnGUI ()
{
    //Create a group for the system menu options
    GUI.BeginGroup(new Rect(0, 0, Screen.width, (screenHeight / 9))); 

    //Create backrground box
    GUI.Box (new Rect (0,0, Screen.width, (screenHeight / 5)), "Danveria Ver 0.02 - Arcade\nHere we will take a look at the process of creating Arcade games for danveria. ");
  
    //breadcrumb trail
    //label  
    GUI.Label (Rect ((Screen.width/3.75), (Screen.height/8), 175, 25), "<-You are here!");

    //Home
    if(GUI.Button (Rect ((Screen.width/95), (Screen.height/8), 125, 25), "Home"))
    {
        Application.LoadLevel (0);
    } 
    
    //Current page)
    if(GUI.Button (Rect ((Screen.width/8.5), (Screen.height/8), 175, 25), "Arcade"))
    {
        Application.LoadLevel (8);
    } 

    
    //Create button 2 - Site intro
    ArcadeOutline = GUI.Toggle(Rect((Screen.width/95), (Screen.height/18), (Screen.width/7.2), 40), ArcadeOutline, "Arcade outline", "button");

    //Create button 3 - deeFive intro
    Platform = GUI.Toggle(Rect((Screen.width/5.5), (Screen.height/18), (Screen.width/7.2), 40), Platform, "Platform games", "button");

    //Create button 2 - evilloz intro
    Racing = GUI.Toggle(Rect((Screen.width/2.85), (Screen.height/18), (Screen.width/7.2), 40), Racing, "Racing games", "button");
    
    //Create button 2 - broodie intro
    Fighting = GUI.Toggle(Rect((Screen.width/1.93), (Screen.height/18), (Screen.width/7.2), 40), Fighting, "Fighting games", "button");
    
    //Create button 2 - broodie intro
    Shooting = GUI.Toggle(Rect((Screen.width/1.46), (Screen.height/18), (Screen.width/7.2), 40), Shooting, "Shooting games", "button");
    
    //Create button 2 - broodie intro
    Other = GUI.Toggle(Rect((Screen.width/1.20), (Screen.height/18), (Screen.width/7.2), 40), Other, "Other games", "button");
    
    GUI.EndGroup();
    
    //Check to see which window should be active
    if(ArcadeOutline)
    {
        GUI.Window (0, Rect (5, 140, 1270, 550), OutlineContent, "001 - Arcade outline");    
    }

    //Check to see which window should be active
    if(Platform)
    {
        GUI.Window (1, Rect (5, 140, 1270, 550), PlatformContent, "002 - Platform games");    
    }
    
    //Check to see which window should be active
    if(Racing)
    {
        GUI.Window (2, Rect (5, 140, 1270, 550), RacingContent, "003 - Racing games");    
    }
    
    //Check to see which window should be active
    if(Fighting)
    {
        GUI.Window (3, Rect (5, 140, 1270, 550), FightingContent, "004 - Fighting games");    
    }
    
    //Check to see which window should be active
    if(Shooting)
    {
        GUI.Window (4, Rect (5, 140, 1270, 550), ShootingContent, "004 - Shooting games");    
    }
    
    //Check to see which window should be active
    if(Other)
    {
        GUI.Window (5, Rect (5, 140, 1270, 550), OtherContent, "005 - Other games");    
    }


}

function Update () 
{
    //load home content
    //load content based on time of day
    switch(Time)
    {
        //midnight 00:00:00
        case 000000:
            //Platform home content
            PlatformHome();
            
        break;
        
        //1am
        case 010000:
            //Platform home content
            PlatformHome();
        break;
        
        //2am
        case 020000:
            //Platform home content
            PlatformHome();
        break;

        //3am
        case 030000:
            //Platform home content
            PlatformHome();
        break;

        //4am
        case 040000:
            //Platform home content
            PlatformHome();
        break;

        //5am
        case 050000:
            //Platform home content
            PlatformHome();
        break;

        //6am
        case 060000:
            //Platform home content
            PlatformHome();
        break;

        //7am
        case 070000:
            //Platform home content
            PlatformHome();
        break;
        
        //8am
        case 080000:
            //Platform home content
            PlatformHome();
        break;
        
        //9am
        case 090000:
            //Platform home content
            PlatformHome();
        break;

        //10am
        case 100000:
            //Platform home content
            PlatformHome();
        break;

        //11am
        case 110000:
            //Platform home content
            PlatformHome();
        break;

        //12am
        case 120000:
            //Platform home content
            PlatformHome();
        break;

        //1pm
        case 130000:
            //Platform home content
            PlatformHome();
        break;
        
        //2pm
        case 140000:
            //Platform home content
            PlatformHome();
        break;
        
        //3pm
        case 150000:
            //Platform home content
            PlatformHome();
        break;
        
        //4pm
        case 160000:
            //Platform home content
            PlatformHome();
        break;
        
        //5pm
        case 170000:
            //Platform home content
            PlatformHome();
        break;
        
        //6pm
        case 180000:
            //Platform home content
            PlatformHome();
        break;
        
        //7pm
        case 190000:
            //Platform home content
            PlatformHome();
        break;
        
        //8pm
        case 200000:
            //Platform home content
            PlatformHome();
        break;
        
        //9pm
        case 210000:
            //Platform home content
            PlatformHome();
        break;
        
        //10pm
        case 220000:
            //Platform home content
            PlatformHome();
        break;
        
        //11pm
        case 230000:
            //Platform home content
            PlatformHome();
        break;                 
    }  

}