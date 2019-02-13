(function() {
    let $ = function(id) {
        return document.getElementById(id);
    };
    let oBox = $("transImageBox"),
        oTrigger = $("transImageTrigger").getElementsByTagName("a"),
        lTrigger = oTrigger.length;

    console.log(oBox);
    console.log(oTrigger);
    if (oBox && lTrigger) {
        for (let i = 0; i<lTrigger; i+=1) {
            oTrigger[i].onclick = function() {
                console.log(1111111111111);
                let index = Number(this.href.replace(/.*#/g, "")) || 1;
                console.log(this.href.replace(/.*#/g, ""));
                oBox.style.marginLeft = (1 - index) * 400 + "px";
                return false;
            };
        }
    }
})();