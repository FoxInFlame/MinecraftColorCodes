//Update 2.0
var styleMap = {
  '\n': 'display:block',
  '§4': 'color:#be0000',
  '§c': 'color:#fe3f3f',
  '§6': 'color:#d9a334',
  '§e': 'color:#fefe3f',
  '§2': 'color:#00be00',
  '§a': 'color:#3ffe3f',
  '§b': 'color:#3ffefe',
  '§3': 'color:#00bebe',
  '§1': 'color:#0000be',
  '§9': 'color:#3f3ffe',
  '§d': 'color:#fe3ffe',
  '§5': 'color:#be00be',
  '§f': 'color:#ffffff',
  '§7': 'color:#bebebe',
  '§8': 'color:#3f3f3f',
  '§0': 'color:#000000',
  '§l': 'font-weight:bold',
  '§n': 'text-decoration:underline',
  '§o': 'font-style:italic',
  '§m': 'text-decoration:line-through',
  '§r': 'font-style:normal;text-decoration:none;font-weight:normal'
};
function replaceColorCodes(string) {
    var codes = string.match(/§.{1}/g),
        indexes = [],
        apply = [],
        _tmpStr,
        final = document.createDocumentFragment();
    function applyCode(string, codes) {
        var elem;
        string = string.replace(/§*/g, '');
        elem = document.createElement('span');
        for(var i = 0, len = codes.length; i < len; i++) {
            elem.style.cssText += styleMap[codes[i]] + ';';
        }
        elem.innerHTML = string;
        return elem;
    }
    for(var i = 0, len = codes.length; i < len; i++) {
        indexes.push( string.indexOf(codes[i]) );
        string = string.replace(codes[i], '§§');
    }
    for(i = 0; i < len; i++) {
        if(indexes[i + 1] - indexes[i] <= 2) {
            apply.push( codes[i] );
            i++;
        }
        apply.push( codes[i] );
        _tmpStr = string.substring(indexes[i], indexes[i + 1]);
        final.appendChild( applyCode(_tmpStr, apply) );
        apply = [];
    }
    return final;
}

function cutString(str, cutStart, cutEnd){
  return str.substr(0,cutStart) + str.substr(cutEnd+1);
}
