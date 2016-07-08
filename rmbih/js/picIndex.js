var picModule = (function() {
	var my = {};

	function getPicList(userId) {
		$.ajax({
			type : "get",
			url : "http://210.83.195.229:380/rmbih/pic/getPicList",
			data : {
				userId : userId
			},
			dataType : "json",
			async : false,
			success : function(data) {
				console.log(data);
				$("#sb-slider").html(template('picList', {
					list : data
				}));
				/*slicebox = $('#sb-slider').slicebox({
					cuboidsCount:10,
					cuboidsRandom:true,
					autoplay:true,
					interval:3000,
					disperseFactor : 30
				});*/
				Page.init();
			},
			error: function(e) {
				console.log(e);
			}
		});
	}

	my.getPicList = function(userId) {
		getPicList(userId);
	};

	return my;
}());