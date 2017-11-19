$(document).ready(function () {
	$.getJSON('https://freegeoip.net/json/?callback=?', function(data) {
		//console.log(JSON.stringify(data, null, 2));
		//JSON.minify(data).toString()
		//console.log(JSON.stringify(data, null, 2));
		$('#v4').html(data.ip.toString());
		$('#v6').html('<a href="https://docs.google.com/forms/d/e/1FAIpQLSeLmDVmEDuoPtnAzhBbQah1iv3n6JuFBDdO3IZDyNzgq5UyNQ/viewform?usp=pp_url&entry.1359815136=1FAIpQLSeLmDVmEDuoPtnAzhBbQah1iv3n6JuFBDdO3IZDyNzgq5UyNQ;'+data.ip.toString()+" from "+data.city.toString()+', '+data.region_name.toString()+' '+data.zip_code.toString()+', '+data.country_name.toString()+'('+data.latitude.toString()+', '+data.longitude.toString()+');'+(new Date()).toString()+';1FAIpQLSeLmDVmEDuoPtnAzhBbQah1iv3n6JuFBDdO3IZDyNzgq5UyNQ">Click here.</a>');
	});
	/*$.getJSON("https://jsonip.com/?callback=?", function (data) {
        //console.log(data);
        //console.log(data.ip.toString());
        //alert(data.ip);
        $('#v4').html(data.ip.toString());
        $('#v6').html('<a href="https://docs.google.com/forms/d/e/1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ/viewform?usp=pp_url&entry.1359815136=1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ;'+data.ip.toString()+';'+(new Date()).toString()+';1FAIpQLSfDu6nPVmRxvk1AC0jgd9BpVLBKgUoLSAO14wwe6hgSOkJuvQ">Click here.</a>');
    });*/
	window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
    var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
    pc.createDataChannel("");    //create a bogus data channel
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
    pc.onicecandidate = function(ice){  //listen for candidate events
        if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
        var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
        console.log(myIP);
        pc.onicecandidate = noop;
    };
});
