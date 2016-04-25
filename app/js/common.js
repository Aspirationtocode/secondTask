$(function() {

	// открытие дополнительной информации о студенте
	$('.column-student').on('click', '.list-item-student', openExtraInformationStudent)

	// открытие дополнительной информации о команде	
	$('.column-team').on('click', '.list-item-team', openExtraInformationTeam)

	// кнопка открытия формы студента
	$('.header-information-button-student').on('click', openFormStudent)

	// кнопка открытия формы команды
	$('.header-information-button-team').on('click', openFormTeam)

	// кнопка отправка формы студента	
	$('.form-submit-student').on('click', submitFormStudent)
	
	// кнопка отправка формы команды
	$('.form-submit-team').on('click', submitFormTeam)

	// Кнопка добавить студента		
	$('.column-team').on('click', '.add-student-button', addStudentsToTeam)

	// Выставление отметок
	$('.column-student').on('click', '.list-item-student', checkStudents)

	// Кнопка ОК для сформированной команды
	$('.column-team').on('click', '.add-student-complete',  completeCheckStudents)

	// табы задания // tabOpen
	$('.tasks-header').on('click', tabOpen)

	//кнопка выдачи задания студенту // giveTaskToStudent
	$('.column-student').on('click', '.give-task-student', giveTaskToStudent)

	// кнопка ок отправки задания студента CompleteGivingTaskToStudent
	$('.column-student').on('click', '.task-form-submit-student', CompleteGivingTaskToStudent)

	//кнопка выдачи задания команде // giveTaskToTeam
	$('.column-team').on('click', '.give-task-team', giveTaskToTeam)

	// кнопка ок отправки задания команды // CompleteGivingTaskToTeam
	$('.column-team').on('click', '.task-form-submit-team', CompleteGivingTaskToTeam)

	// оценивание задания студента // rateStudentTask
	$('.tasks-list-student').on('click', '.fa', rateStudentTask)

	// оценивание задания команды // rateTeamTask
	$('.tasks-list-team').on('click', '.fa', rateTeamTask)












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
