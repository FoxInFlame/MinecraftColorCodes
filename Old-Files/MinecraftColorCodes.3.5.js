var obfuscators = [];
var styleMap = {
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
    '§n': 'text-decoration:underline;text-decoration-skip:spaces',
    '§o': 'font-style:italic',
    '§m': 'text-decoration:line-through;text-decoration-skip:spaces',
};
function obfuscate(string, elem) {
    var magicSpan,
        currNode;
    if(string.indexOf('<br>') > -1) {
        elem.innerHTML = string;
        for(var j = 0, len = elem.childNodes.length; j < len; j++) {
            currNode = elem.childNodes[j];
            if(currNode.nodeType === 3) {
                magicSpan = document.createElement('span');
                magicSpan.innerHTML = currNode.nodeValue;
                elem.replaceChild(magicSpan, currNode);
                init(magicSpan);
            }
        }
    } else {
        init(elem, string);
    }
    function init(el, str) {
        var i = 0,
            obsStr = str || el.innerHTML,
            len = obsStr.length;
        obfuscators.push( window.setInterval(function () {
            if(i >= len) i = 0;
            obsStr = replaceRand(obsStr, i);
            el.innerHTML = obsStr;
            i++;
        }, 0) );
    }
    function randInt(min, max) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }
    function replaceRand(string, i) {
        var randChar = String.fromCharCode( randInt(64,90) ); /*Numbers: 48-57 Al:64-90*/
        return string.substr(0, i) + randChar + string.substr(i + 1, string.length);
    }
}
function applyCode(string, codes) {
    var elem = document.createElement('span'),
        obfuscated = false;
    for(var i = 0, len = codes.length; i < len; i++) {
        elem.style.cssText += styleMap[codes[i]] + ';';
        if(codes[i] === '§k') {
            obfuscate(string, elem);
            obfuscated = true;
        }
    }
    if(!obfuscated) elem.innerHTML = string;
    return elem;
}
function parseStyle(string) {
    var codes = string.match(/§.{1}/g) || [],
        indexes = [],
        apply = [],
        tmpStr,
        deltaIndex,
        noCode,
        final = document.createDocumentFragment(),
        i;
    string = string.replace(/\n|\\n/g, '<br>');
    for(i = 0, len = codes.length; i < len; i++) {
        indexes.push( string.indexOf(codes[i]) );
        string = string.replace(codes[i], '\x00\x00');
    }
    if(indexes[0] !== 0) {
        final.appendChild( applyCode( string.substring(0, indexes[0]), [] ) );
    }
    for(i = 0; i < len; i++) {
    	indexDelta = indexes[i + 1] - indexes[i];
        if(indexDelta === 2) {
            while(indexDelta === 2) {
                apply.push ( codes[i] );
                i++;
                indexDelta = indexes[i + 1] - indexes[i];
            }
            apply.push ( codes[i] );
        } else {
            apply.push( codes[i] );
        }
        if( apply.lastIndexOf('§r') > -1) {
            apply = apply.slice( apply.lastIndexOf('§r') + 1 );
        }
        tmpStr = string.substring( indexes[i], indexes[i + 1] );
        final.appendChild( applyCode(tmpStr, apply) );
    }
    return final;
}
function clearObfuscators() {
    var i = obfuscators.length;
    for(;i--;) {
        clearInterval(obfuscators[i]);
    }
    obfuscators = [];
}
function replaceColorCodes(str, final, classNumber) {
    clearObfuscators();
    var parsed = parseStyle(str);
        output = document.getElementById(final);
        if(output === null) {
          if(typeof classNumber === "undefined"){
            classNumber = "0";
          } else {
            classNumber = classNumber - 1;
          }
          output = document.getElementsByClassName(final)[classNumber];
        }
    output.innerHTML = '';
    output.appendChild(parsed);
    output.style.whiteSpace = "pre";
}

/////////////////////////////////////////////////
function cutString(str, cutStart, cutEnd){
  return str.substr(0,cutStart) + str.substr(cutEnd+1);
}
