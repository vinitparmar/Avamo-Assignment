

function processData(data){
    // removing all the digits from the data
    data  =  data.replace(/[0-9]/gi, '');
    // passed the data to the map reduce function to get the word:count
    var wordCount =  map_Reduce(data);
    var arrayObj = Object.entries(wordCount);
    arrayObj.sort(function(a,b){return a[1] - b[1]});
    arrayObj.reverse();
    var arrObjList = [];
    //coverting the array to key value pair
    for(var i = 0; i < 10 ; i++){
        var tempOj = {
            "text":arrayObj[i][0],
            "count":arrayObj[i][1]
        }
        arrObjList.push(tempOj);
    }
    //call dictionary function
    for(var i = 0; i < arrObjList.length ; i++){
    var word = arrObjList[i].text;
    var count = arrObjList[i].count;
    var res = callDictionary(word,count);

  }
}

function map_Reduce(data){
    var wordcnt = data.replace(/[^\w\s]/gi, "").split(/\s+/).reduce(function(map,word){
    map[word] = (map[word]||0)+1;
    return map;
}, {});

return wordcnt;
}
