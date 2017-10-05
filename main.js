$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        //console.log(data);
        //console.log(data.ip.toString());
        //alert(data.ip);
        $('#v4').html(data.ip.toString());
        $('#v6').html('<a href="https://docs.google.com/forms/d/e/1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ/viewform?usp=pp_url&entry.1359815136=1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ;'+data.ip.toString()+';'+(new Date()).toString()+'">Click here.</a>');
    });
});