$(function() {

		$('.column-student').on('click', '.list-item-student', openExtraInformationStudent)
		
		$('.column-team').on('click', '.list-item-team', openExtraInformationTeam)

		$('.header-information-button-student').on('click', openFormStudent)
		
		$('.header-information-button-team').on('click', openFormTeam)
		
		$('.form-submit-student').on('click', submitFormStudent)
		
		$('.form-submit-team').on('click', submitFormTeam)
				
		$('.column-team').on('click', '.add-student-button', addStudentsToTeam)
		
		$('.column-student').on('click', '.list-item-student', checkStudents)
	
		$('.column-team').on('click', '.add-student-complete',  completeCheckStudents)

		// //кнопка выдачи задания студенту
		// $('.column-student').on('click', '.give-task-student', function() {
		// 	var taskForm = $(`<div class='form-wrapper'><form class="task-form-student">						
		// 					<span class='input-dscr'><b>Текст задания:</b></span>
		// 					<textarea rows="7" cols="45" name="text-task-student" required></textarea>
		// 					<input type="submit" value='Ок!' class='form-submit form-submit-student button'>
		// 				</form></div>`)
		// 	if ($(this).parent().find('.form-wrapper').length === 0) {
		// 		$(this).after(taskForm)
		// 	}
		// })


		// $('.column-student').on('click', '.form-submit-student', function() {
		// 	var currentTaskText = $(this).parent();
		// 	console.log(currentTaskText)
		// })
		// var teamInfo = $('.form-team').serializeArray();



	



	









































	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


});
