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

## Веб-интерфейс:
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

Еще, хочется отметить что интерфейс хорошо смотрится только на больших экранах, так как он достаточно сложный.
Хотелось бы сделать его адаптивным, но время - штука такая, не очень :)

Вернемся к описанию программной части, тут я хотел сказать об алгоритме распределения студентов и менторов.
Он не реализован в веб-интерфейсе, но хотелось бы провести некоторые тесты его работы, данные постараюсь представить в табличном формате.

Мнение студентов:

|**    |M1 |M2 |M3 |
|---   |---|---|---|
|**S1**| 1 | 1 | 1 |
|**S2**| 1 | 1 | 1 |
|**S3**| 1 | 1 | 1 |









