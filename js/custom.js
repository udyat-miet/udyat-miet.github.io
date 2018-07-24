(function(){
	var anchors = document.querySelectorAll("a[href^='#'");
	for (var i = 0; i < anchors.length; i++) {
		anchors[i].onclick = function(e) {
			e.preventDefault();
			var target_id = this.href.substring(this.href.indexOf('#'));
			// because our audience is not legacy
			document.querySelector(target_id).scrollIntoView({behavior: 'smooth'});
		};
	}
})();