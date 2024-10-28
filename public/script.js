document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == "interactive") {
      document.getElementById("loader").style.visibility = "visible";
      document.getElementById("body").style.overflow = "hidden";
    } else if (state == "complete") {
      setTimeout(function () {
        document.getElementById("interactive");
        document.getElementById("loader").style.visibility = "hidden";
        document.getElementById("load-holder").style.visibility = "hidden";
        document.getElementById("body").style.overflow = "auto";
      }, 0);
    }
  };