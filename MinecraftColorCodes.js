function replaceColorCodes(motd){
  var RAWmotd = "<p><var style='font-style:normal'>" + motd + "</var></p>";
  /*First let's place the color ones...*/
  var motdCutRED = RAWmotd.replace("§4","</var></span><span style='color:#be0000'>");
  var motdCutLIGHT_RED = motdCutRED.replace("§c","</var></span><span style='color:#fe3f3f'>");
  var motdCutPOOP = motdCutLIGHT_RED.replace("§6","</var></span><span style='color:#d9a334'>");
  var motdCutYELLOW = motdCutPOOP.replace("§e","</var></span><span style='color:#fefe3f'>");
  var motdCutDARK_GREEN = motdCutYELLOW.replace("§2","</var></span><span style='color:#00be00'>");
  var motdCutGREEN = motdCutDARK_GREEN.replace("§a","</var></span><span style='color:#3ffe3f'>");
  var motdCutLIGHT_BLUE = motdCutGREEN.replace("§b","</var></span><span style='color:#3ffe3f'>");
  var motdCutCYAN = motdCutLIGHT_BLUE.replace("§3","</var></span><span style='color:#00bebe'>");
  var motdCutDARK_BLUE = motdCutCYAN.replace("§1","</var></span><span style='color:#0000be'>");
  var motdCutBLUE = motdCutDARK_BLUE.replace("§1","</var></span><span style='color:#3f3ffe'>");
  var motdCutPINK = motdCutBLUE.replace("§d","</var></span><span style='color:#fe3ffe'>");
  var motdCutPURPLE = motdCutPINK.replace("§5","</var></span><span style='color:#be00be'>");
  var motdCutWHITE = motdCutPURPLE.replace("§f","</var></span><span style='color:#ffffff'>");
  var motdCutLIGHT_GRAY = motdCutWHITE.replace("§7","</var></span><span style='color:#bebebe'>");
  var motdCutGRAY = motdCutLIGHT_GRAY.replace("§8","</var></span><span style='color:#3f3f3f'>");
  var motdCutBLACK = motdCutGRAY.replace("§0","</var></span><span style='color:#000000'>");
    
  /*Now, for the weird formatting stuff!*/
  var motdCutBOLD = motdCutBLACK.replace("§l","</var><var style='text-decoration:none;font-style:normal;font-weight:bold'>");
  var motdCutUNDERLINE = motdCutBOLD.replace("§n","</var><var style='font-style:normal;font-weight:normaltext-decoration:underline");
  var motdCutITALIC = motdCutUNDERLINE.replace("§o","</var><var style='text-decoration:none;font-weight:normal;font-style:italic'>");
  var motdCutSTRIKE = motdCutITALIC.replace("§m","</var><var style='font-style:normal;font-weight:normaltext-decoration:line-through>");
  var motdCutRESET = motdCutSTRIKE.replace("§r","</var><var style='text-decoration:none;font-style:normal;font-weight:normal'>");
  var motdFINAL = motdCutRESET;
  return motdFINAL;
}
