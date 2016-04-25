# 2 задание. Яндекс Мобилизация
Создайте библиотеку, которая реализует такой программный интерфейс: 
- добавление студентов-участников и объединение их в команды; 
- создание командных и индивидуальных заданий; 
- выставление оценок за задание; 
- создание приоритизированных списков менторов и студентов; 
- решение задачи распределения студентов среди менторов в соответствии с приоритизированными списками.

Выполнение одной или нескольких дополнительных задач будет плюсом: 
- организуйте процесс сериализации/десериализации в разных форматах данных; 
- создайте тесты к библиотеке; 
- реализуйте веб-интерфейс или интерфейс командной строки для своей библиотеки.

# Реализация

## Программный интерфейс:
Мною были реализованы:
- добавление студентов-участников и объединение их в команды; 
- создание командных и индивидуальных заданий; 
- выставление оценок за задание; 
- решение задачи распределения студентов среди менторов в соответствии с приоритизированными списками. 
Сама библиотека находится в файле app/js/school.js

## Веб-интерфейс: [Ссылка на интерфейс](http://aspirationtocode.github.io/second/app/ "Школа")
Была реализована страничка, позволяющаяя:
- добавлять студентов с помощью формы
- добавлять команды с помощью формы
- просматривать дополнительную информацию о студенте
- просматривать дополнительную информацию о команде
- добавлять студентов в команды
- добавлять персональные задания
- добавлять командные задания
- оценивать персональные задания
- оценивать командные задания

При реализации интерфейса и поведения кнопок и форм на странице были использованы:
- сетка `Bootstrap`
- библиотека `jQuery`
- иконический шрифт `Font Awesome`
- сборщик проекта gulp
- препроцессор sass

Еще, хочется отметить, что интерфейс хорошо смотрится только на больших экранах, так как он достаточно сложный.
Хотелось бы сделать его адаптивным, но время - штука такая, не очень :)

Вернемся к описанию программной части, тут я хотел сказать об алгоритме распределения студентов и менторов.
Он не реализован в веб-интерфейсе, но хотелось бы провести некоторые тесты его работы, данные постараюсь представить в табличном формате. Результат функции `distribution` возвращается из переменной res, которая является двумерным массивом из индексов студентов, которые уже распределены среди менторов. Индексы студентов в итоговом массиве начинаются с единицы. Предполагается, что в функцию поступят на вход число студентов (`1 аргумент функции`) которое будет делиться на число менторов (`2 аргумент функции`).
В таблице: ` M1` - первый ментор, `S1` - первый студент, дальше соответственно.

Мнение студентов: (массив `sOp` - параметр функции distribution )

|**    |M1 |M2 |M3 |
|---   |---|---|---|
|**S1**| 3 | 1 | 2 |
|**S2**| 1 | 2 | 3 |
|**S3**| 3 | 2 | 1 |
|**S4**| 2 | 3 | 1 |
|**S5**| 2 | 1 | 3 |
|**S6**| 3 | 1 | 2 |
|**S7**| 1 | 2 | 3 |
|**S8**| 1 | 3 | 2 |
|**S9**| 2 | 3 | 1 |

Мнение менторов: (массив `mOp` - параметр функции distribution)

|**    |M1 |M2 |M3 |
|---   |---|---|---|
|**S1**| 3 | 4 | 8 |
|**S2**| 4 | 5 | 2 |
|**S3**| 5 | 6 | 4 |
|**S4**| 9 | 3 | 3 |
|**S5**| 8 | 7 | 6 |
|**S6**| 6 | 9 | 5 |
|**S7**| 2 | 2 | 7 |
|**S8**| 7 | 1 | 1 |
|**S9**| 1 | 8 | 9 |

Результат получился следующим: 

|**    |M1 |M2 |M3 |
|---   |---|---|---|
|**S1**| 9 | 1 | 8 |
|**S2**| 7 | 5 | 4 |
|**S3**| 2 | 6 | 3 |

Мнение студентов: (массив `sOp` - параметр функции distribution)

|**    |M1 |M2 |
|---   |---|---|
|**S1**| 2 | 1 |
|**S2**| 1 | 2 |
|**S3**| 1 | 2 |
|**S4**| 2 | 1 |
|**S5**| 2 | 1 |
|**S6**| 1 | 2 |
|**S7**| 2 | 1 |
|**S8**| 2 | 1 |

Мнение менторов: (массив `mOp` - параметр функции distribution)

|**    |M1 |M2 |
|---   |---|---|
|**S1**| 8 | 4 |
|**S2**| 6 | 3 |
|**S3**| 5 | 7 |
|**S4**| 4 | 1 |
|**S5**| 1 | 8 |
|**S6**| 3 | 5 |
|**S7**| 2 | 2 |
|**S8**| 7 | 6 |

Результат получился следующим: 

|**    |M1 |M2 |
|---   |---|---|
|**S1**| 5 | 4 |
|**S2**| 6 | 7 |
|**S3**| 3 | 2 |
|**S4**| 8 | 1 |

Исходя из моих расчетов и моего алгоритма, студенты должны верно распределяться среди менторов. Было приведено 2 примера(теста), 
по которым можно судить о выходных данных работы моей функции distribution. Код частично прокомментирован в самой библиотеке.









