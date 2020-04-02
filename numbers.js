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