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
    else if(cmd == "text-align-justify"){
        text.style.textAlign="justify";
    }
}

function fontweight(cmd){
    if(cmd == "bold"){
        text.style.fontWeight="bold"
    }
    else if (cmd == "italic"){
        text.style.fontWeight="italic"
    }
    else if (cmd == ""){
        text.style.fontWeight="normal"
    }
}

/** Another possibility is this: */
  function format(cmd, value){
  document.execCommand(cmd, false, value);
  }

  /**
   * Storage : 
   */