function changScript(js, index) {

    var oldst = document.getElementsByTagName("script").item(index);
    var newst = document.createElement("script");
    mewst.setAttribute("src", js);
    document.getElementsByTagName("head").item(0).replaceChild(newst, oldst);

};

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
};