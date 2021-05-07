
let obfuscators = [];
const styleMap = {
    "§4": "font-weight:normal;text-decoration:none;color:#be0000",
    "§c": "font-weight:normal;text-decoration:none;color:#fe3f3f",
    "§6": "font-weight:normal;text-decoration:none;color:#d9a334",
    "§e": "font-weight:normal;text-decoration:none;color:#fefe3f",
    "§2": "font-weight:normal;text-decoration:none;color:#00be00",
    "§a": "font-weight:normal;text-decoration:none;color:#3ffe3f",
    "§b": "font-weight:normal;text-decoration:none;color:#3ffefe",
    "§3": "font-weight:normal;text-decoration:none;color:#00bebe",
    "§1": "font-weight:normal;text-decoration:none;color:#0000be",
    "§9": "font-weight:normal;text-decoration:none;color:#3f3ffe",
    "§d": "font-weight:normal;text-decoration:none;color:#fe3ffe",
    "§5": "font-weight:normal;text-decoration:none;color:#be00be",
    "§f": "font-weight:normal;text-decoration:none;color:#ffffff",
    "§7": "font-weight:normal;text-decoration:none;color:#bebebe",
    "§8": "font-weight:normal;text-decoration:none;color:#3f3f3f",
    "§0": "font-weight:normal;text-decoration:none;color:#000000",
    "§l": "font-weight:bold",
    "§n": "text-decoration:underline;text-decoration-skip:spaces",
    "§o": "font-style:italic",
    "§m": "text-decoration:line-through;text-decoration-skip:spaces",
};

function obfuscate(string, elem) {
    if (string.includes("<br>")) {
        elem.innerHTML = string;
        for (let currNode of elem.childNodes) if (currNode.nodeType === 3) {
            let magicSpan = document.createElement("span");
            magicSpan.innerHTML = currNode.nodeValue;
            elem.replaceChild(magicSpan, currNode);
            init(magicSpan);
        }
    }
    else init(elem, string);
    function init(el, str) {
        let i = 0,
            obsStr = str || el.innerHTML;
        obfuscators.push(window.setInterval(function () {
            if (i >= obsStr.length) i = 0;
            obsStr = replaceRand(obsStr, i);
            el.innerHTML = obsStr;
            ++i;
        }, 0));
    }
    function replaceRand(string, i) {
        let randChar = String.fromCharCode(Math.floor(Math.random() * 27) + 64);
        return string.substr(0, i) + randChar + string.substr(i + 1, string.length);
    }
}

function applyCode(string, codes) {
    let elem = document.createElement("span"),
        obfuscated = false;
    for (let code of codes) {
        elem.style.cssText += styleMap[code] + ";";
        if (code === "§k") {
            obfuscate(string, elem);
            obfuscated = true;
        }
    }
    if (!obfuscated) elem.innerHTML = string;
    return elem;
}

function parseStyle(string) {
    let codes = string.match(/§.{1}/g) || [],
        indices = [],
        apply = [],
        tmpStr,
        indexDelta,
        noCode,
        final = document.createDocumentFragment();
    string = string.replace(/\n|\\n/g, "<br>");
    
    for (let code of codes) {
        indices.push(string.indexOf(code));
        string = string.replace(code, "\x00\x00");
    }

    if (indices[0] !== 0) final.appendChild(applyCode(string.substring(0, indices[0]), []));

    for (let i in codes) {
    	indexDelta = indices[i + 1] - indices[i];
        if (indexDelta === 2) {
            while (indexDelta === 2) {
                apply.push(codes[i]);
                ++i;
                indexDelta = indices[i + 1] - indices[i];
            }
            apply.push(codes[i]);
        }
        else apply.push(codes[i]);
        if (apply.lastIndexOf("§r") > -1) apply = apply.slice(apply.lastIndexOf("§r") + 1);
        tmpStr = string.substring(indices[i], indices[i + 1]);
        final.appendChild(applyCode(tmpStr, apply));
    }
    return final;
}

function clearObfuscators() {
    for (let obfuscator of obfuscators) clearInterval(obfuscator);
    obfuscators = [];
}

String.prototype.replaceColorCodes = function() {
  clearObfuscators();
  let outputString = parseStyle(String(this));
  return outputString;
};
