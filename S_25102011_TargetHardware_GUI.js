//Dan Welsh 2011
//Danveria Target Hardware gui script ver 0.01

/*
Main changes:
*/

//Datastores

//stores used for saving screen rez data
//Height
var screenHeight = Screen.height;
//Width
var screenWidth = Screen.width;

//Datastore for the skins that will be used
var DanveriaSkin : GUISkin;//skin used the sites home section

//Booleans used to turn windows on and off
var HardwareOutline : boolean = false;
var Class1 : boolean = false;
var Class2 : boolean = false;
var Class3 : boolean = false;
var Class4 : boolean = false;
var Class5 : boolean = false;

//fuction to create home content
function OutlineContent(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "In order to target multiple platforms we will need to group different platforms together in order to increase efficiency in the development process. they will be broken up into 5 different classes based on cost, our expected usage and performance.\n\nPrice data is based on cost to buy hardware retail (not used/refurbised.).\n\nExpected usage is based on how we expect users to use the devices.\n\nPerformance data will be based on benchmark data. ");
    
}

//function to create class 1 content
function Class1Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "This is on of the most dirverse groups but can be losely defined as smart phone hardware upto the value of £350.\n\nWith this said some hardware will be moved to the top of the class if it has independnt gamimg controls.\n\nTipcal devices:\n\nSamsung I9000 Galaxy S\nMotorola ATRIX\nSony Ericsson Xperia PLAY\n\n");
    
}

//function to create class 2 content
function Class2Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "This class will be made up of high-end smartphones, web broswers, tablets and handheld consoles, with a strong focus on RTS & Sim games on tablets and handheld consoles focusing on action games.\n\nTypical hardware:\n\nLenovo ThinkPad X121e\nDell Streak 7\nSony PS Vita");
    
}

//function to create class 3 content
function Class3Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Home videogame consoles currently PS3, xbox 360 and Wii");
    
}

//function to create class 4 content
function Class4Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "Gaming Quad core PC's upto a value of £850 with 1gb of video memory and 8gb ram");
    
}

//function to create class 5 content
function Class5Content(windowID : int)
{
    GUI.Label (Rect (10, 20, 1270, 550), "High fidelity gaming on hardware starting at £1500");
    
}

function OnGUI ()
{
    //Create a group for the system menu options
    GUI.BeginGroup(new Rect(0, 0, Screen.width, (screenHeight / 9))); 

    //Create backrground box
    GUI.Box (new Rect (0,0, Screen.width, (screenHeight / 5)), "Danveria Ver 0.02 - Target Hardware\nIn this section we will look at the different hardware targets that Danveria will focus on:");
  
    //breadcrumb trail
    //label  
    GUI.Label (Rect (270, 97, 125, 25), "<-You are here!");

    //Home
    if(GUI.Button (Rect (5, 95, 125, 25), "Home"))
    {
        Application.LoadLevel (0);
    } 
    
    //Current page)
    if(GUI.Button (Rect (135, 95, 125, 25), "Target hardware"))
    {
        Application.LoadLevel (2);
    } 

    
    //Create button 2 - Site intro
    HardwareOutline = GUI.Toggle(Rect(5, 40, 200, 40), HardwareOutline, "Hardware outline", "button");

    //Create button 3 - deeFive intro
    Class1 = GUI.Toggle(Rect(215, 40, 200, 40), Class1, " Class 1: Mobile devices", "button");

    //Create button 2 - evilloz intro
    Class2 = GUI.Toggle(Rect(425, 40, 200, 40), Class2, "Class 2:\n Tablets & Portable consoles", "button");
    
    //Create button 2 - broodie intro
    Class3 = GUI.Toggle(Rect(635, 40, 200, 40), Class3, "Class 3: Home consoles", "button");
    
    //Create button 2 - broodie intro
    Class4 = GUI.Toggle(Rect(845, 40, 200, 40), Class4, "Class 4: Gaming PC's", "button");
    
    //Create button 2 - broodie intro
    Class5 = GUI.Toggle(Rect(1055, 40, 200, 40), Class5, "Class 5: Hi-FI Gaming", "button");
    
    GUI.EndGroup();
    
    //Check to see which window should be active
    if(HardwareOutline)
    {
        GUI.Window (0, Rect (5, 140, 1270, 550), OutlineContent, "001 - Hardware outline");    
    }

    //Check to see which window should be active
    if(Class1)
    {
        GUI.Window (1, Rect (5, 140, 1270, 550), Class1Content, "002 - Class 1: Mobile devices");    
    }
    
    //Check to see which window should be active
    if(Class2)
    {
        GUI.Window (2, Rect (5, 140, 1270, 550), Class2Content, "003 - Class 2: Tablets & Portable consoles");    
    }
    
    //Check to see which window should be active
    if(Class3)
    {
        GUI.Window (3, Rect (5, 140, 1270, 550), Class3Content, "004 - Class 3: Home consoles");    
    }
    
    //Check to see which window should be active
    if(Class4)
    {
        GUI.Window (4, Rect (5, 140, 1270, 550), Class4Content, "004 - Class 4: Gaming PC's");    
    }
    
    //Check to see which window should be active
    if(Class5)
    {
        GUI.Window (5, Rect (5, 140, 1270, 550), Class5Content, "005 - Class 5: Hi-FI Gaming");    
    }


}

function Update () 
{

}