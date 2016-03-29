# MinecraftColorCodes
This is my first JS file, so please, be patient if you find any bugs. I will try and fix it.
Minecraft has it's own Color Code system, in which they use § characters.
This JS file I made will translate all color codes into HTML, so you can insert it in your website.

##Installation
Download this as a zip, and open the zip.
Place MinecraftColorCodes.js in the directory you want.
In the file you have the string want to translate, link the JS file in your ``` head ``` tag.
Like so:
```
<head>
<script src="MinecraftColorCodes.js"></script>
</head>
```
Now you can use it!

##Usage
Example:
```
<script>
var yourMOTD = "§d§lnerd.nu§8: §6§oCreative Rev 28";
replaceColorCodes(yourMOTD, "outputDiv");
<script>
<div id="outputDiv"></div>
```
Simple enough. Put the string you want in the function ```replaceColorCodes()```, and place the ID or class of the output element, and voila! You can then do whatever you like with it!
When using a class, the script will find the first match. 

Do note that the script will probably overwrite anything inside the element. I would suggest you use a ```span``` element with the class or id of your choice.

##Extras
You might want to get your server's MOTD, but you don't know how to access the server from your website?
Use this code! (jQuery needed)
```
$(document).ready(function(){
  $.getJSON('https://mcapi.us/server/status?ip=c.nerd.nu', function(obj){
    if(obj.online === true){
      motdHTML = replaceColorCodes(obj.motd, "myDiv");
    } else {
      document.getElementById("myDiv").innerHTML = "Server is offline...";
    }
  });
})
```
https://mcapi.us provides JSON responses from the server provided in the URL. By using this, you can parse the JSON, and get your desired information! Visit http://mcapi.us for more information on the JSON format.


##Bugs / ToDo

- #1 §k does not work.
- #2 Having multiple formatting codes does not work.
- #3 The spaces disappear, and the output is a whole big chunk of letters.
- #4 Color Codes should reset previous occuring formatting codes, yet they seem to keep the formatting.

If you find one, please submit a ticket.

- Add Class support (DONE!)
- Add Support for custom class, like first match, second match, etc... (Coming Soon)

##Updates
v1.0 - Created this file, added replacements for color codes

v1.1 - Added formatting replacements (e.g. §l)

v1.2 - Added support for multiple occurence of one color code in a string

v1.3 - Added support for New Line, and Spaces because spaces were buggy. The ```\n``` character translates into ```<br>```, and the spaces translate into Unicode spaces (```&#32;```).

v2.0 - A complete recode. Now fixed Bug #2, 'Having multiple formatting codes does not work'. New line and spaces was removed.

v3.0 - Added §k, §r, and \n support. Now also requires the output element ID.

v3.1 - Finally! Support for class names too!

v3.5 - Fixed Bug #3, 'Spaces dissappear', by adding a CSS property to the output element.

##Terms of Service
By using this JS file, you agree to the Terms of Conditions below.
- You can not modify this file in any way.
- You can not sell this file for a price.
- You can not give away this file without giving credit to me.
