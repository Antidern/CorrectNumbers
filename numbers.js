var test;
$.ajax({
    url: "test.txt",
    dataType: "text",
    async: true,
    success: function(msg){
        test = msg;
        // alert('Содержимое файла: '+test);
        document.getElementById("content").innerHTML = (test);
    }
});
jQuery(function(){
    let test1 = new String;
    test1 = document.getElementById("content").innerHTML;
    test2 = test1.replace(/миллион(ов|ом|ах|ами|а|е|у|ы|)/ig , " 1000000");
    test2 = test2.replace(/тысяч(ов|ей |ах|ех|ях|ами|ями|а|о|е|и|у|ы|на|)/ig, " 1000");
    test2 = test2.replace(/девяност(о|а)/ig, " 90");
    test2 = test2.replace(/ст(ам |ах |ами |а |о|и|у|ы|на)/ig, " 100");
    test2 = test2.replace(/сот/ig, " 100");
    test2 = test2.replace(/девятнадцат(ь|ью|и)/ig, " 19");
    test2 = test2.replace(/восемнадцат(ь|ью|и)/ig, " 18");
    test2 = test2.replace(/семнадцат(ь|ью|и)/ig, " 17");
    test2 = test2.replace(/шестнадцат(ь|ью|и)/ig, " 16");
    test2 = test2.replace(/пятнадцат(ь|ью|и)/ig, " 15");
    test2 = test2.replace(/четырнадцат(ь|ью|и)/ig, " 14");
    test2 = test2.replace(/тринадцат(ь|ью|и)/ig, " 13");
    test2 = test2.replace(/двенадцат(ь|ью|и)/ig, " 12");
    test2 = test2.replace(/одиннадцат(ь|ью|и)/ig, " 11");
    test2 = test2.replace(/дцат(ь |ью |и |у )/ig, " 10");
    test2 = test2.replace(/десят(ь |ом |ой |ью |и |)/ig, " 10");
    test2 = test2.replace(/девят(ь|ью|и|)/ig, " 9 ");
    test2 = test2.replace(/вос(емь|емью|ьми )/ig, " 8 ");
    test2 = test2.replace(/сем(ь|и|ью)/ig, " 7 ");
    test2 = test2.replace(/шест(ь|и|на|ью|)/ig, " 6 ");
    test2 = test2.replace(/пят(ь|и|на|ью)/ig, " 5 ");
    test2 = test2.replace(/четыр(ём|е|на|ёх|ех)/ig, " 4 ");
    test2 = test2.replace(/тр(ём|и|ёх|ех)/ig, " 3 ");
    test2 = test2.replace(/дв(а|умя|ух|ум|е)/ig, " 2");
    test2 = test2.replace(/од(ин |ного |ном |ним |на )/ig, " 1 ");
    test2 = test2.replace(/  /ig, " ");
    let arr = test2.split(' ');
    console.log(arr);
});