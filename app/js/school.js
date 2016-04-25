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
		this.id = yandexSchool.allTeams.length - 1;
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
	allStudentsTasks: [],
	allTeamsTasks: [],
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
			realPoints: -1,
			id: yandexSchool.allStudentsTasks.length,
			ownerOfTask: student
		};
		yandexSchool.allStudentsTasks.push(currentTask);
		return currentTask;
	},
	// Создание задания для команды
	createTeamTask: (team, taskText) => {
		var currentTask = {
			text: taskText,
			realPoints: -1,
			id: yandexSchool.allTeamsTasks.length,
			ownerOfTask: team
		};
		yandexSchool.allTeamsTasks.push(currentTask);
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
	
	

	
	
		
		





























