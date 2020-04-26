
function fetchData(){
    var res;
    var url = "http://norvig.com/big.txt";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var xhttp;
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         res = xhttp.responseText;
         // function called for procesing data
         processData(res);
        }
      };
      xhttp.open("GET",proxyurl+url, true);
      xhttp.send();
}

function callDictionary(word,count){
    var resData;
    var APIkey = "dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf";
    var url = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key="+APIkey+"&lang=en-ru&text="+word;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var xhttp;
    var obj= {};
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        try{
        if (this.readyState == 4 && this.status == 200) {
         res = xhttp.responseText;
         resData = JSON.parse(res);
           obj ={
              "Word":word,
              "Count":count,
              "Synonyms":resData.def[0].tr[0].mean[0].text,
              "pos":resData.def[0].pos
          }
          console.log(obj);
        }

  }catch(e){
      //throw new Error('value not found');
      console.log("pos or synonyms value not found ");
  }
  };
      xhttp.open("GET",url, true);
      xhttp.send();

}
