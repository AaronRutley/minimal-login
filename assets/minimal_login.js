(function($){

	$(document).ready(function() {

		// temp - set placeholder with JS
		$("#user_login").attr("placeholder", "Username or Email");
		$("#user_pass").attr("placeholder", "Password");

		// temp - hacky JS to fix the markup
		var login_form_html = $("#loginform").html();
		var br_regex = /<br\s*[\/]?>/gi;
		var label_close_regex = /<\/label>/g;
		$("#loginform").html(login_form_html.replace(label_close_regex, ""));
		$("#loginform").html(login_form_html.replace(br_regex, "</label>"));

		// toggle p class
		$('#loginform p').each(function() {

			var wrap = $(this);
			var field = wrap.find('input');
			var label = wrap.find('label');

			// when we have a value
			field.on('keyup focus blur', function() {
				if(field.val().length > 0) {
					wrap.addClass('js--filled');
				} else {
					wrap.removeClass('js--filled');
				}
			})

			// also toggle class if we have data prefilled
			if(field.val().length > 0) {
				wrap.addClass('js--filled');
			} else {
				wrap.removeClass('js--filled');
			}
		});
	});
})(jQuery);