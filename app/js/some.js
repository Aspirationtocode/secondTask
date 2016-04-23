// Объявление класса Студент
class Student {
	constructor (name, age, skills, photoURL) {
		this.name = name;
		this.age = age;
		this.photoURL = photoURL;
		this.skills = skills;
		this.tasks = [];
		yandexSchool.allStudents.push(this)
		this.id = yandexSchool.allStudents.length - 1;
	}
}
// Объявление класса Команда
class Team {
	constructor(arrOfStudents, name, slogan, logoURL) {
		this.lineUp = arrOfStudents || [];
		this.name = name;
		this.logoURL = logoURL;
		this.slogan = slogan;
		this.tasks = [];
		yandexSchool.allTeams.push(this);
	}
	// функция добавления студента в команду
	addStudents() {
		var students = [];
		for (var i = 0; i < arguments.length; i++) {
			students[i] = arguments[i];
			this.lineUp.push(students[i])
		}
	}
}
// объявление объекта яндекс школа
var yandexSchool = {
	allStudents: [],
	allTeams: [],
	createStudent: (name, age, skills, photoURL) => {
		return new Student(name, age, skills, photoURL);
	},
	createTeam: (arrOfStudents, name, slogan, logoURL) => {
		return new Team(arrOfStudents, name, slogan, logoURL);
	},
	// Создание задания для студента
	createStudentTask: (student, taskText) => {
		var currentTask = {
			text: taskText,
			realPoints: -1
		};
		student.tasks.push(currentTask);
		return currentTask;
	},
	// Создание задания для команды
	createTeamTask: (team, taskText) => {
		var currentTask = {
			text: taskText,
			realPoints: -1
		};
		team.tasks.push(currentTask);
		return currentTask;
	},
	// Оценивание заданий
	rateTask: (task, realPoints) => {
		task.realPoints = realPoints;
	},
	// Алгоритм распределения студентов и менторов
	distribution: distribution

}
	
function distribution (numberOfMentors, numberOfStudents, mOp, sOp) {
	// функция обнуления ряда
	var rowToNil = (row, array) => {	
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array[i].length; j++) {
				if (i === row) {
					array[i][j] = 0;
				}
			}
		}
	}

	// функция обнуления колонки
	var colToNil = (col, array) => {
		array.forEach((item, i, arr) => {
			item[col] = 0;
		})
	}
	// функции инвертирования очков
	mentorOpinionRate = (n) => numberOfStudents - n + 1
	studentOpinionRate = (n) => numberOfMentors - n + 1
	var res =  [];
  for (var i = 0; i < numberOfMentors; i++) {
  	res[i] = [];
  }

	for (var i = 0; i < numberOfStudents; i++) {
		for (var j = 0; j < numberOfMentors; j++) {
			sOp[i][j] = studentOpinionRate(sOp[i][j]);
			mOp[i][j] = mentorOpinionRate(mOp[i][j]);
			sOp[i][j] += mOp[i][j];
		}
	}
	
	var k = 0;
	while (k < numberOfStudents) {
		var max = -1;
		var maxI = -1;
		var maxJ = -1;
		for (var i = 0; i < sOp.length; i++) {
			for (var j = 0; j < sOp[i].length; j++) {
				if (sOp[i][j] >= max) {
					max = sOp[i][j];
					maxI = i;
					maxJ = j;
				}
			}
		}
		rowToNil(maxI, sOp)
		res[maxJ].push(maxI + 1)
		if (res[maxJ].length === numberOfStudents / numberOfMentors) {
			colToNil(maxJ, sOp)
		}
		k++;
	}
	return res;
}
	

	var mOp =  [[3, 4, 8],
  					 	[4, 5, 2],
  					 	[5, 6, 4],
  					 	[9, 3, 3],
  					 	[8, 7, 6],
  					 	[6, 9, 5],
  					 	[2, 2, 7],
  					 	[7, 1, 1],
  					 	[1, 8, 9]];
  // мнение студентов
	var sOp =  [[3, 1, 2],
	  					[1, 2, 3],
							[3, 2, 1],
							[2, 3, 1],
							[2, 1, 3],
							[3, 1, 2],
							[1, 2, 3],
							[1, 3, 2],
							[2, 3, 1]];

	console.log(yandexSchool.distribution(3, 9, mOp, sOp))

	
	// 	function showArray(arr) {
	// 		var s = '';
	// 		for (var i = 0; i < arr.length; i++) {
	// 			s = '';
	// 			for (var j = 0; j < arr[i].length; j++) {
	// 				s += arr[i][j] + ' ';
	// 			}
	// 			console.log(s)
	// 		}
	// 	}

		
		





























