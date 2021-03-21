const text = document.getElementById("mainText");

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function TextAlign(cmd){
    if(cmd == "text-align-center"){
        text.style.textAlign="center";
    }
    else if (cmd == "text-align-left"){
        text.style.textAlign="left";
    }
    else if (cmd == "text-align-right"){
        text.style.textAlign="right";
    }
}

function fontType(cmd){
    if(cmd == "bold"){

    }
    else if (cmd == "italic"){

    }
    else if (cmd == ""){

    }
}

/** Another possibility is this: */
  function format(cmd, value){
  document.execCommand(cmd, false, value);
  }

  /**
   * Storage : 
   */