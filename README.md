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
var yourMOTD = "§d§lnerd.nu§8: §6§oCreative Rev 28";
var myHTMLMotd = replaceColorCodes(yourMOTD);
//console.log(myHTMLMotd);
```
Simple enough. Put the string you want in the function ```replaceColorCodes()```, and voila! You can then do whatever you like with it!

##Extras
You might want to get your server's MOTD, but you don't know how to access the server from your website?
Use this code! (jQuery needed)
```
$(document).ready(function(){
  $.getJSON('https://mcapi.us/server/status?ip=c.nerd.nu', function(obj){
    if(obj.online === true){
      motdHTML = replaceColorCodes(obj.motd);
      console.log(motdHTML);
    } else {
      console.log("Server is offline...");
    }
  });
})
```
https://mcapi.us provides JSON responses from the server provided in the URL. By using this, you can parse the JSON, and get your desired information! Visit http://mcapi.us for more information on the JSON format.


##Bugs
- §k does not work.   ->This is not supposed to work yet. I have not found a way to randomize the text that often in javascript.

If you find more, please submit a ticket.

##Updates
v1.0 - Created this file, added replacements for color codes
v1.1 - Added formatting replacements (e.g. §l)
v1.2 - Added support for multiple occurence of one color code in a string

##Terms of Service
By using this JS file, you agree to the Terms of Conditions below.
- You can not modify this file in any way.
- You can not sell this file for a price.
- You can not give away this file without giving credit to me.
