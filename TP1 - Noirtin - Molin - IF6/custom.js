function homePageLoading() {
    url1 = "https://bitcoin.mubiz.com/info";
    elementID1 = "ID1";

    url2 = "https://bitcoin.mubiz.com/blockchaininfo ";
    elementID2 = "ID2";

    url3 = "https://bitcoin.mubiz.com/mininginfo ";
    elementID3 = "ID3";

    url4 = "https://bitcoin.mubiz.com/peerinfo";
    elementID4 = "ID4";

    function fonctionRequeteApi(url, elementID){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById(elementID).innerHTML = jsonPretty;
          }
        };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    };
    fonctionRequeteApi(url1, elementID1);
    fonctionRequeteApi(url2, elementID2);
    fonctionRequeteApi(url3, elementID3);
    fonctionRequeteApi(url4, elementID4);
}
