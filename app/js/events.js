// открытие дополнительной информации о студенте
function openExtraInformationStudent (e) {
	if ($('.fa-check-circle').length === 0 && $(e.target).hasClass('small-dscr-student')) {
		$(this).find('.extra-information-student').slideToggle(150)	
	}	
}
// открытие дополнительной информации о команде
function openExtraInformationTeam (e) {
	if (!$(e.target).hasClass('button') && $(e.target).hasClass('small-dscr-team')) {
		$(this).find('.extra-information-team').slideToggle(150)
	}	
}
// кнопка открытия формы студента
function openFormStudent (e) {
	if ($('.section-form-team').is(':visible')) {
		$('.section-form-team').slideToggle();
		$('.header-information-button-team').children().toggleClass('fa-plus');
		$('.header-information-button-team').children().toggleClass('fa-minus');
	}
	$('.section-form-student').slideToggle();
	$('.form-student').trigger('reset');
	$(this).children().toggleClass('fa-plus');
	$(this).children().toggleClass('fa-minus');
}
// кнопка открытия формы команды
function openFormTeam (e) {
	if ($('.section-form-student').is(':visible')) {
		$('.section-form-student').slideToggle();
		$('.header-information-button-student').children().toggleClass('fa-plus');
		$('.header-information-button-student').children().toggleClass('fa-minus');
	}
	$('.section-form-team').slideToggle();
	$('.form-team').trigger('reset');
	$(this).children().toggleClass('fa-plus');
	$(this).children().toggleClass('fa-minus');
}
// кнопка отправка формы студента
function submitFormStudent (e) {
	var studentInfo = $('.form-student').serializeArray();
	for (var i = 0; i < studentInfo.length; i++) {
		studentInfo[i] = studentInfo[i].value;
		if (studentInfo[i] === '') return;
	}
	var curStudent = yandexSchool.createStudent(...studentInfo);

	var li = $(`<li class='list-item-student list-item'>
						<div class='main-list-content-student main-list-content'>
							<span class='small-dscr small-dscr-student'>${curStudent.name}, ${curStudent.age} лет <img src="${curStudent.photoURL}" alt=""></span>

							<div class='extra-information extra-information-student'>
								<span class='skills-student'><b>Умения:</b> ${curStudent.skills}</span>
								<span class='status-student status'><b>Статус:</b> Не в команде</span>
								<button class='button give-task-student'>Дать задание</button>
							</div>
						</div>
					</li>`)
	li.data('id', yandexSchool.allStudents.length - 1);			
	li.css({
		opacity: 0
	})
	$('.main-list-student').append(li)
	li.animate({
		opacity: 1
	},{
		duration: 200,
	})
}
// кнопка отправка формы команды
function submitFormTeam (e) {
	var teamInfo = $('.form-team').serializeArray();
	for (var i = 0; i < teamInfo.length; i++) {
		teamInfo[i] = teamInfo[i].value;
		if (teamInfo[i] === '') return;
	}
	var currentTeam = yandexSchool.createTeam(null,...teamInfo);
	var li = $(`<li class='list-item-team list-item'>
						<div class='main-list-content-team main-list-content'>
							<span class='small-dscr small-dscr-team'>${currentTeam.name}<img src="${currentTeam.logoURL}" alt=""></span>
							<div class='extra-information extra-information-team'>
								<span class="slogan"><b>Наш девиз:</b> ${currentTeam.slogan}</span>
								<span class="number-of-students-in-team"><b>Состав команды:</b> <span>${0}</span></span>
								<ul class="line-up-list"></ul>
								<button class='add-student-button button'>Добавить студента в команду</button>
								<button class="button give-task-team">Дать задание</button>
							</div>
						</div>
					</li>`)
	li.data('id', yandexSchool.allTeams.length - 1);
	li.css({
		opacity: 0
	})
	$('.main-list-team').append(li);
	li.animate({
		opacity: 1
	},{
		duration: 200,
	})
}
// Кнопка добавить студента
function addStudentsToTeam (e) {
	if ($('.column-team').find('.fa-check-circle').length <= yandexSchool.allStudents.length && yandexSchool.allStudents.length > 0 && $('.list-item-student').find('.fa-check-circle').length === 0) {
		for (var i = 0; i < $('.list-item-student').length; i++) {
			var currLi = $('.list-item-student').eq(i);
			if (currLi.data('inTeam') !== true) {
				currLi.find('img').before('<i class="fa fa-check-circle"></i>')
			} else if (currLi.find('.in-team').length === 0) {
				currLi.find('img').before('<span class="in-team">Уже в команде</span>')
			}
		}	
		var formButtonStudent = $('.form-submit-student')[0];
		formButtonStudent.disabled = true;
		var headerInformationButtonTeam = $('.header-information-button-team')[0];
		headerInformationButtonTeam.disabled = true;
		$(e.target).after($(`<button class='add-student-complete button'>Ок!</button>`))
		e.target.disabled = true;
		var opacity = {
			opacity: .3
		}
		$('.header-information-button-team').css(opacity)
		$('.form-submit-student').css(opacity)
		$('.column-team').find('.add-student-button').css(opacity)	
	}	
}
// Выставление отметок
function checkStudents (e) {
	var icon = $(this).find('.fa');
	if (icon.hasClass('fa-check-circle')) {
		icon.toggleClass('checked')
	} else {
		return;
	}			
}
// Кнопка ОК для сформированной команды
function completeCheckStudents (e) {
	var checkedLi = $('.list-item-student').find('.checked').closest('.list-item-student');
	var arrOfCheckedLi = [];
	var currentTeam = yandexSchool.allTeams[$(e.target).closest('.list-item-team').data('id')];
	var ul = $(e.target).prev().prev();
	for (var i = 0; i < checkedLi.length; i++) {
		var checkedEl = yandexSchool.allStudents[checkedLi.eq(i).data('id')];
		checkedLi.eq(i).data('inTeam', true)
		checkedLi.eq(i).find('.status-student').text(`Статус: В команде ${currentTeam.name}`)
		arrOfCheckedLi.push(checkedEl)
		var teamListLi = $(`<li class='line-up-list-element'>
										<span class='student-number'>${ul.find('li').length+1}. </span><span class='dscr-student'>${checkedEl.name}, ${checkedEl.age} лет</span>
									</li>`) 
		teamListLi.css({
			opacity: 0
		})
		ul.append(teamListLi);
		teamListLi.animate({
				opacity: 1
			},{
				duration: 200,
		})
	}
	currentTeam.addStudents(...arrOfCheckedLi)
	ul.prev('.number-of-students-in-team').find('span').text(`${currentTeam.lineUp.length}`)
	var formButtonStudent = $('.form-submit-student')[0];
	formButtonStudent.disabled = false;
	var headerInformationButtonTeam = $('.header-information-button-team')[0];
	headerInformationButtonTeam.disabled = false;
	$('.add-student-button').removeAttr('disabled');
	var opacity = {
		opacity: 1
	}
	$('.header-information-button-team').css(opacity)
	$('.form-submit-student').css(opacity)			
	$('.column-team').find('.add-student-button').css(opacity)
	$('.fa-check-circle').fadeOut(400, function() {
		$('.fa-check-circle').remove();
	})
	$('.in-team').remove()
	$(this).remove();
}

function tabOpen(e) {
	$('.tasks-header').removeClass('active');
	$(this).addClass('active');
	if ($(this).hasClass('tasks-header-student')) {
		$('.tasks-list-student').slideDown(200);	
		$('.tasks-list-team').slideUp(200);
	} else if ($(this).hasClass('tasks-header-team')) {
		$('.tasks-list-team').slideDown(200);
		$('.tasks-list-student').slideUp(200);
	}
}

function giveTaskToStudent(e) {
	if ($(this).text() === 'Отмена') {
		$('.task-form-student').remove();
		$(this).text('Дать задание');
	} else {
		var taskForm = $(`<form class="task-form-student task-form">						
					<span class='input-dscr'><b>Текст задания:</b></span>
					<textarea style="width:100%; height:150px;" name="text-task-student" required></textarea>
					<input type="submit" value='Ок!' class='task-form-submit task-form-submit-student button'>
				</form>`)
		if ($(this).parent().find('.task-form-student').length === 0) {
			$(this).after(taskForm);
		}
		$(this).text('Отмена');
	}
}

function CompleteGivingTaskToStudent(e) {
	var studentId = $(this).closest('.list-item-student').data('id');
	var currentStudent = yandexSchool.allStudents[studentId];
	var taskText = $('.task-form-student').serializeArray()[0].value;
	if (taskText === '') return;
	var li = $(`<li class='tasks-list-item-student tasks-list-item'>
								<div class="task-dscr">
									<h3 class="task-header">Текст задания:</h3>
									<p class='tesk-text'>${taskText}</p>
									<h3>Оценка за задание: 
										<span class='rate-stars-student'>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</span>
									</h3>		
								</div>
								<div class="task-performer-student task-performer">
									<h3>Исполнитель:</h3>
									<p>Студент ${currentStudent.name}, ${currentStudent.age} лет</p>
								</div>
							</li>`);
	li.data('studentId', studentId);
	$('.tasks-list-student').find('.no-tasks').remove();
	$('.tasks-list-student').append(li);
	var task = yandexSchool.createStudentTask(currentStudent, taskText);
	li.data('taskId', task.id);
	$('.task-form-student').remove();
	$('.give-task-student').text('Дать задание');
}

function giveTaskToTeam(e) {
	if ($(this).text() === 'Отмена') {
		$('.task-form-team').remove();
		$(this).text('Дать задание');
	} else {
		var taskForm = $(`<form class="task-form-team task-form">						
					<span class='input-dscr'><b>Текст задания:</b></span>
					<textarea rows="7" cols="45" name="text-task-team" required></textarea>
					<input type="submit" value='Ок!' class='task-form-submit task-form-submit-team button'>
				</form>`)
		if ($(this).parent().find('.task-form-team').length === 0) {
			$(this).after(taskForm);
		}
		$(this).text('Отмена');
	}
}

function CompleteGivingTaskToTeam(e) {
	var teamId = $(this).closest('.list-item-team').data('id');
	var currentTeam = yandexSchool.allTeams[teamId];
	var taskText = $('.task-form-team').serializeArray()[0].value;
	if (taskText === '') return;
	var li = $(`<li class='tasks-list-item-team tasks-list-item'>
								<div class="task-dscr">
									<h3 class="task-header">Текст задания:</h3>
									<p class='tesk-text'>${taskText}</p>
									<h3>Оценка за задание: 
										<span class='rate-stars-student'>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</span>
									</h3>	
								</div>
								<div class="task-performer-team task-performer">
									<h3>Исполнитель:</h3>
									<p>Команда ${currentTeam.name}</p>		
								</div>
							</li>`);
	li.data('teamId', teamId);
	$('.tasks-list-team').find('.no-tasks').remove();
	$('.tasks-list-team').append(li);
	var task = yandexSchool.createTeamTask(currentTeam, taskText);
	li.data('taskId', task.id);
	$('.task-form-team').remove();
	$('.give-task-team').text('Дать задание');
}

function rateStudentTask(e) {
	var taskId = $(this).closest('li').data('taskId');
	var studentId = $(this).closest('li').data('studentId');
	var stars = $(this).parent().find('.fa'); 
	var index = $(this).index();
	stars.addClass('fa-star-o');
	for (var i = 0; i <= index; i++) {
		stars.eq(i)
			.removeClass('fa-star-o')
			.addClass('fa-star')
	}
	yandexSchool.rateTask(yandexSchool.allStudentsTasks[taskId], index + 1);
}

function rateTeamTask(e) {
	var taskId = $(this).closest('li').data('taskId');
	var studentId = $(this).closest('li').data('teamId');
	var stars = $(this).parent().find('.fa'); 
	var index = $(this).index();
	stars.addClass('fa-star-o');
	for (var i = 0; i <= index; i++) {
		stars.eq(i)
			.removeClass('fa-star-o')
			.addClass('fa-star')
	}
	yandexSchool.rateTask(yandexSchool.allTeamsTasks[taskId], index + 1);
}