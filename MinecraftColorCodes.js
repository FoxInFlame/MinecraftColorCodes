//Update 1.4
function replaceColorCodes(motd){
  var RAWmotd = "<p><var style='font-style:normal;font-weight:normal;text-decoration:none'>" + motd + "</var></p>";

  /*Then let's place the color ones...*/
  var motdCutRED = replaceAll("§4","</var></span><span style='color:#be0000'><var style='font-style:normal'>",RAWmotd);
  var motdCutLIGHT_RED = replaceAll("§c","</var></span><span style='color:#fe3f3f'><var style='font-style:normal'>",motdCutRED);
  var motdCutPOOP = replaceAll("§6","</var></span><span style='color:#d9a334'><var style='font-style:normal'>",motdCutLIGHT_RED);
  var motdCutYELLOW = replaceAll("§e","</var></span><span style='color:#fefe3f'><var style='font-style:normal'>",motdCutPOOP);
  var motdCutDARK_GREEN = replaceAll("§2","</var></span><span style='color:#00be00'><var style='font-style:normal'>",motdCutYELLOW);
  var motdCutGREEN = replaceAll("§a","</var></span><span style='color:#3ffe3f'><var style='font-style:normal'>",motdCutDARK_GREEN);
  var motdCutLIGHT_BLUE = replaceAll("§b","</var></span><span style='color:#3ffe3f'><var style='font-style:normal'>",motdCutGREEN);
  var motdCutCYAN = replaceAll("§3","</var></span><span style='color:#00bebe'><var style='font-style:normal'>",motdCutLIGHT_BLUE);
  var motdCutDARK_BLUE = replaceAll("§1","</var></span><span style='color:#0000be'><var style='font-style:normal'>",motdCutCYAN);
  var motdCutBLUE = replaceAll("§9","</var></span><span style='color:#3f3ffe'><var style='font-style:normal'>",motdCutDARK_BLUE);
  var motdCutPINK = replaceAll("§d","</var></span><span style='color:#fe3ffe'><var style='font-style:normal'>",motdCutBLUE);
  var motdCutPURPLE = replaceAll("§5","</var></span><span style='color:#be00be'><var style='font-style:normal'>",motdCutPINK);
  var motdCutWHITE = replaceAll("§f","</var></span><span style='color:#ffffff'><var style='font-style:normal'>",motdCutPURPLE);
  var motdCutLIGHT_GRAY = replaceAll("§7","</var></span><span style='color:#bebebe'><var style='font-style:normal'>",motdCutWHITE);
  var motdCutGRAY = replaceAll("§8","</var></span><span style='color:#3f3f3f'><var style='font-style:normal'>",motdCutLIGHT_GRAY);
  var motdCutBLACK = replaceAll("§0","</var></span><span style='color:#000000'><var style='font-style:normal'>",motdCutGRAY);
  
  /*Now, for the weird formatting stuff!*/
  var Formatting = "none";
  if(isEven(getMatches("§l",motdCutBLACK)) && getMatches("§l",motdCutBLACK) != 0){
    Formatting = "Strikethrough";
    var motdUntilFirst = motdCutBLACK.substring(0, motdCutBLACK.indexOf("§l"));
    var motdFromFirstToSecond = motdCutBLACK.substring(motdCutBLACK.indexOf("§l"),getMatches("§l",motdCutBLACK, 1));
  }
  
  var motdCutBOLD = replaceAll("§l","</var><var style='text-decoration:none;font-style:normal;font-weight:bold'>",motdCutBLACK);
  var motdCutUNDERLINE = replaceAll("§n","</var><var style='text-decoration:underline;font-style:normal;font-weight:normal",motdCutBOLD);
  var motdCutITALIC = replaceAll("§o","</var><var style='text-decoration:none;font-style:italic;font-weight:normal'>",motdCutUNDERLINE);
  var motdCutSTRIKE = replaceAll("§m","<strike>",motdCutITALIC);
  var motdCutRESET = replaceAll("§r","</var><var style='text-decoration:none;font-style:normal;font-weight:normal'>",motdCutSTRIKE);
  
  /*Now, for the New Line! Finally!*/
  var motdCutNEWLINE = replaceAll("\n","<br>",motdCutRESET);
  
  var motdFINAL = motdCutNEWLINE;
  return motdFINAL;
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}
function getMatches(find, str) {
  var RegularExp = new RegExp(find, "g");
  return str.match(RegularExp).length;
}
function isEven(n) {
   return isNumber(n) && (n % 2 == 0);
}
function isOdd(n) {
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}
function isNumber(n) {
  return n === parseFloat(n);
}
