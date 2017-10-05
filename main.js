$(document).ready(function () {
	$.getJSON('https://freegeoip.net/json/?callback=?', function(data) {
		//console.log(JSON.stringify(data, null, 2));
		//JSON.minify(data).toString()
		//console.log(JSON.stringify(data, null, 2));
		$('#v4').html(data.ip.toString());
		$('#v6').html('<a href="https://docs.google.com/forms/d/e/1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ/viewform?usp=pp_url&entry.1359815136=1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ;'+data.ip.toString()+" from "+data.city.toString()+', '+data.region_name.toString()+' '+data.zip_code.toString()+', '+data.country_name.toString()+'('+data.latitude.toString()+', '+data.longitude.toString()+');'+(new Date()).toString()+';1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ">Click here.</a>');
	});
	/*$.getJSON("https://jsonip.com/?callback=?", function (data) {
        //console.log(data);
        //console.log(data.ip.toString());
        //alert(data.ip);
        $('#v4').html(data.ip.toString());
        $('#v6').html('<a href="https://docs.google.com/forms/d/e/1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ/viewform?usp=pp_url&entry.1359815136=1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ;'+data.ip.toString()+';'+(new Date()).toString()+';1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ">Click here.</a>');
    });*/
});