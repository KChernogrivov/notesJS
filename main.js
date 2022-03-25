/* ТИПЫ ДАННЫХ */

/*
    number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
    bigint для целых чисел произвольной длины.
    string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
    boolean для true/false.
    null для неизвестных значений – отдельный тип, имеющий одно значение null.
    undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
    object для более сложных структур данных.
    symbol для уникальных идентификаторов.

    Number(undefined) = NaN

    null - "ПУСТОЙ, ПУСТОЙ, ЗНАЧЕНИЕ НЕИЗВЕСТНО"
    Для typeof(null) возвращается "object" – это ошибка в языке, на самом деле это не объект.

    в то время Undefined - переменная объявлена, но значение не присвоено.

    let name = "Ilya";

    // выражение - число 1
    alert( `hello ${1}` ); // hello 1

    // выражение - строка "name"
    alert( `hello ${"name"}` ); // hello name

    // выражение - переменная, вставим её в строку
    alert( `hello ${name}` ); // hello Ilya
 */

/* МАТЕМАТИЧЕСКИЕ ДЕЙСТВИЯ */

/*
    Let num1 = 2;
    Let num1 = -num1; (Будет -2) В этом случае минус – УНАРНЫЙ

    Let num2 = 3;
    Let num2 = num2 - num2 В этом случае минус – БИНАРНЫЙ

    При сложении 1 или 2 операнда, если хотя бы 1 операнд является строкой, второй также приводится к строке,
    в то время как деление и вычитание приводит к числу ВСЕГДА.

    Бинарный плюс ( + ) преобразует не числа в числа, но не меняет знаки.
    let x = 1;
    alert( +x ); // 1

    +true = 1;
    +”” = 0;

    null становится 0 после численного преобразования.
    undefined становится NaN после численного преобразования.
    Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число,
    так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.

    Инкремент - ++
    Декремент - --

    Когда оператор идёт после переменной — это «постфиксная форма»: counter++.
    Возвращает старое значение
    «Префиксная форма» — это когда оператор идёт перед переменной: ++counter.
    возвращает новое значение

    let a = (1 + 2, 3 + 4);
    alert( a ); // 7 (результат вычисления 3 + 4)

    Оператор Запятая имеет очень низкий приоритет
    Пожалуйста, обратите внимание, что оператор , имеет очень низкий приоритет, ниже =, поэтому скобки важны в приведённом выше примере.
    Без них в a = 1 + 2, 3 + 4 сначала выполнится +, суммируя числа в a = 3, 7,
    затем оператор присваивания = присвоит a = 3, а то, что идёт дальше, будет игнорировано. Всё так же, как в (a = 1 + 2), 3 + 4.

    // три операции в одной строке
    for (a = 1, b = 3, c = a * b; a < 10; a++) {
    ...
    }
    Такие трюки используются во многих JavaScript-фреймворках. Вот почему мы упоминаем их.
    Но обычно они не улучшают читабельность кода, поэтому стоит хорошо подумать, прежде чем их использовать.
 */

/* СРАВНЕНИЕ */

/*
    При сравнении двух строк JS сравнивает код букв последовательно, кодировка - UNICODE. (маленькая буква больше заглавной).
    alert( 'Я' > 'А' ); // true
    alert( 'Коты' > 'Кода' ); // true
    alert( 'Сонный' > 'Сон' ); // true
    Сначала сравниваются первые символы строк.
    Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.
    Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
    Сравнение продолжается, пока не закончится одна из строк.
    Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.

    При сравнении разных типов, JS привод их к числу.
    alert( '2' > 1 ); // true, строка '2' становится числом 2
    alert( '01' == 1 ); // true, строка '01' становится числом 1

    обычное сравнение == привод все к одному типу и сравниет,
    Строгое - не приводит к одному типу.

    undefined и null

    При "мягком сравнении" эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
    при строгом false.

    При использовании математических операторов и других операторов сравнения < > <= >=
    Значения null/undefined преобразуются к числам:
    null становится 0, а undefined – NaN.

    alert( null > 0 );  // (1) false
    alert( null == 0 ); // (2) false
    alert( null >= 0 ); // (3) true

    alert( undefined > 0 ); // false (1)
    alert( undefined < 0 ); // false (2)
    alert( undefined == 0 ); // false (3)

    Почему же сравнение undefined с нулём всегда ложно?

    На это есть следующие причины:

    Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN, а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.
    Нестрогое равенство (3) возвращает false, потому что undefined равно только null, undefined и ничему больше.

    5 > 4 → true
    "ананас" > "яблоко" → false
    "2" > "12" → true
    undefined == null → true
    undefined === null → false
    null == "\n0\n" → false
    null === +"\n0\n" → false
    Разъяснения:

    Очевидно, true.
    Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
    Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
    Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
    Строгое сравнение разных типов, поэтому false.
    Аналогично (4), null равен только undefined.
    Строгое сравнение разных типов.
 */

/* Условное ветвление: if, '?' */

/*

    Оператор представлен знаком вопроса ?. Его также называют «тернарный», так как этот оператор, единственный в своём роде, имеет три аргумента.

    Синтаксис:
    let result = условие ? значение1 : значение2;

    Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.

    Например:
    let accessAllowed = (age > 18) ? true : false;

    Последовательность операторов вопросительного знака ? позволяет вернуть значение, которое зависит от более чем одного условия.
    Например:

    let age = prompt('Возраст?', 18);

    let message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
    (age < 100) ? 'Здравствуйте!' :
    'Какой необычный возраст!';

    alert( message );

    также иногда используют как:
    let company = prompt('Какая компания создала JavaScript?', '');

    (company == 'Netscape') ?
    alert('Верно!') : alert('Неправильно.');
    */

/*  Логические операторы  */

/*
    В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).
    Если значение не логического типа, то оно к нему приводится в целях вычислений.

    ИЛИ ||

    Вычисляет операнды слева направо.
    Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
    Если все операнды являются ложными (false), возвращает последний из них.
    Значение возвращается в исходном виде, без преобразования.

    Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.

    Например:

    alert( 1 || 0 ); // 1
    alert( true || 'no matter what' ); // true

    alert( null || 1 ); // 1 (первое истинное значение)
    alert( null || 0 || 1 ); // 1 (первое истинное значение)
    alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее

    let currentUser = null;
    let defaultUser = "John";

    let name = currentUser || defaultUser || "unnamed";

    alert( name ); // выбирается "John" – первое истинное значение

    Использование присваивания
    let x;

    false || (x = 1);

    alert(x); // 1

    && И

    Оператор && выполняет следующие действия:

    Вычисляет операнды слева направо.
    Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
    Если все операнды были истинными, возвращается последний.
    Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.

    Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.

    Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.

    Примеры:

    // Если первый операнд истинный,
    // И возвращает второй:
    alert( 1 && 0 ); // 0
    alert( 1 && 5 ); // 5

    // Если первый операнд ложный,
    // И возвращает его. Второй операнд игнорируется
    alert( null && 5 ); // null
    alert( 0 && "no matter what" ); // 0

    Приоритет оператора && больше, чем у ||

    Как и оператор ИЛИ ||, И && иногда может заменять if.
    К примеру:

    let x = 1;

    (x > 0) && alert( 'Greater than zero!' );
    но использование операторов для замены if - плохая затея.


    Оператор ! НЕ

    Оператор принимает один аргумент и выполняет следующие действия:

    Сначала приводит аргумент к логическому типу true/false.
    Затем возвращает противоположное значение.

    alert( alert(1) || 2 || alert(3) );
    Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

    Первый оператор ИЛИ || выполнит первый alert(1).
    Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
    Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
    Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.

    alert( null || 2 && 3 || 4 );
    Приоритет оператора && выше, чем ||, поэтому он выполнится первым.

    Результат 2 && 3 = 3, поэтому выражение приобретает вид:

    null || 3 || 4
    Теперь результатом является первое истинное значение: 3.
 */

/* Оператор нулевого слияния */

/*
    Оператор нулевого слияния представляет собой два вопросительных знака ??.

    значение выражения «определено», если оно отличается от null или undefined.

    Результат выражения a ?? b будет следующим:

    a, если значение a определено,
    b, если значение a не определено.

    let user;

    alert(user ?? "Аноним"); // Аноним

    за место этого использовали -
    let firstName = null;
    let lastName = null;
    let nickName = "Суперкодер";

    // показывает первое истинное значение:
    alert(firstName || lastName || nickName || "Аноним"); // Суперкодер

    Важное различие между ними заключается в том, что:

    || возвращает первое истинное значение.
    ?? возвращает первое определённое значение.
    Проще говоря, оператор || не различает false, 0, пустую строку "" и null/undefined.

    let height = 0;

    alert(height || 100); // 100
    alert(height ?? 100); // 0
    height || 100 проверяет, имеет ли переменная height ложное значение, что так и есть,
    поэтому результатом является второй аргумент, т.е. 100.
    height ?? 100 проверяет, что переменная height содержит null/undefined, а поскольку это не так,
    то результатом является сама переменная height, т.е. 0.

    Использование ?? вместе с && или ||
    По соображениям безопасности JavaScript запрещает использование оператора ?? вместе с && и ||, если только приоритет явно не указан в круглых скобках.

    let x = 1 && 2 ?? 3; // Синтаксическая ошибка
    let x = (1 && 2) ?? 3; // Работает без ошибок

    alert(x); // 2
 */

/* циклы white, for и метки break, continue */

/*
    В цикле for можно не задавать параметры

    let i = 0;

    for (; i < 3;) {
    alert( i++ );
    }

    for (;;) {
    // будет выполняться вечно
    }

    Нельзя использовать break/continue справа от оператора „?“

    (i > 5) ? alert(i) : continue; // continue здесь приведёт к ошибке

    Метки.
    Бывает, нужно выйти одновременно из нескольких уровней цикла сразу.

    for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');

     // Что если мы захотим перейти к Готово (ниже) прямо отсюда?

        }
    }
    alert('Готово!');

    Метка имеет вид идентификатора с двоеточием перед циклом:

    labelName: for (...) {
    ...
    }

    Вызов break <labelName> в цикле ниже ищет ближайший внешний цикл с такой меткой и переходит в его конец.
    Директива continue также может быть использована с меткой. В этом случае управление перейдёт на следующую итерацию цикла с меткой.

    Метки не позволяют «прыгнуть» куда угодно
    Метки не дают возможности передавать управление в произвольное место кода.

    Например, нет возможности сделать следующее:

    break label; // не прыгает к метке ниже

    label: for (...)
    Вызов break/continue возможен только внутри цикла, и метка должна находиться где-то выше этой директивы.

    Задача демонстрирует, как постфиксные/префиксные варианты могут повлиять на результат, когда используются в сравнениях.

    От 1 до 4

    let i = 0;
    while (++i < 5) alert( i );
    Первое значение: i = 1, так как операция ++i сначала увеличит i, а потом уже произойдёт сравнение и выполнение alert.

    Далее 2, 3, 4… Значения выводятся одно за другим. Для каждого значения сначала происходит увеличение, а потом – сравнение, так как ++ стоит перед переменной.

    При i = 4 произойдёт увеличение i до 5, а потом сравнение while (5 < 5) – это неверно. Поэтому на этом цикл остановится, и значение 5 выведено не будет.

    От 1 до 5

    let i = 0;
    while (i++ < 5) alert( i );
    Первое значение: i = 1. Остановимся на нём подробнее. Оператор i++ увеличивает i, возвращая старое значение, так что в сравнении i++ < 5 будет участвовать старое i = 0.

    Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 1.

    Далее 2, 3, 4… Для каждого значения сначала происходит сравнение, а потом – увеличение, и затем срабатывание alert.

    Окончание цикла: при i = 4 произойдёт сравнение while (4 < 5) – верно, после этого сработает i++, увеличив i до 5, так что значение 5 будет выведено. Оно станет последним.

    Значение i = 5 последнее, потому что на следующем шаге while (5 < 5) ложно.
 */

/* Конструкция "switch" */

/*
    Конструкция switch имеет один или более блок case и необязательный блок default.

    Выглядит она так:

    switch(x) {
      case 'value1':  // if (x === 'value1')
        ...
        [break]

      case 'value2':  // if (x === 'value2')
        ...
        [break]

      default:
        ...
        [break]
    }
    Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
    Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
    Если ни один case не совпал – выполняется (если есть) вариант default.

    !! Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются. !!

    Пример без break:

    let a = 2 + 2;

    switch (a) {
      case 3:
        alert( 'Маловато' );
      case 4:
        alert( 'В точку!' );
      case 5:
        alert( 'Перебор' );
      default:
        alert( "Нет таких значений" );
    }
    В примере выше последовательно выполнятся три alert:

    alert( 'В точку!' );
    alert( 'Перебор' );
    alert( "Нет таких значений" );

    Любое выражение может быть аргументом для switch/case
    И switch и case допускают любое выражение в качестве аргумента.

    Например:

    let a = "1";
    let b = 0;

    switch (+a) {
      case b + 1:
        alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
        break;

      default:
        alert("Это не выполнится");
    }

    Группировка «case»

    Несколько вариантов case, использующих один код, можно группировать.

    Для примера, выполним один и тот же код для case 3 и case 5, сгруппировав их:

    let a = 2 + 2;

    switch (a) {
      case 4:
        alert('Правильно!');
        break;

      case 3: // (*) группируем оба case
      case 5:
        alert('Неправильно!');
        alert("Может вам посетить урок математики?");
        break;

      default:
        alert('Результат выглядит странновато. Честно.');
    }
    Теперь оба варианта 3 и 5 выводят одно сообщение.

    Возможность группировать case – это побочный эффект того, как switch/case работает без break.
    Здесь выполнение case 3 начинается со строки (*) и продолжается в case 5, потому что отсутствует break.
 */

/* Функции */

/*
    function имя(параметры) {
  ...тело...
    }

    !вызов функции:

    имя функции(параметры);

    !Локальные переменные

    Переменные, объявленные внутри функции, видны только внутри этой функции.

    !Внешние переменные

    У функции есть доступ к внешним переменным
    Функция обладает полным доступом к внешним переменным и может изменять их значение.

    Внешняя переменная используется, только если внутри функции нет такой локальной.

    Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. Например, в коде ниже функция использует локальную переменную userName. Внешняя будет проигнорирована:

    let userName = 'Вася';

    function showMessage() {
      let userName = "Петя"; // объявляем локальную переменную

      let message = 'Привет, ' + userName; // Петя
      alert(message);
    }

    // функция создаст и будет использовать свою собственную локальную переменную userName
    showMessage();

    alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную

    !Параметры

    function showMessage(from, text) { // аргументы: from, text
      alert(from + ': ' + text);
    }

    showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
    showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

    Когда функция вызывается в строках (*) и (**), переданные значения копируются в локальные переменные from и text.
    Затем они используются в теле функции.

    у нас есть переменная from, и мы передаём её функции. Обратите внимание: функция изменяет значение from, но это изменение не видно снаружи.
    Функция всегда получает только копию значения:

    function showMessage(from, text) {

      from = '*' + from + '*'; // немного украсим "from"

      alert( from + ': ' + text );
    }

    let from = "Аня";

    showMessage(from, "Привет"); // *Аня*: Привет

    // значение "from" осталось прежним, функция изменила значение локальной переменной
    alert( from ); // Аня

    Параметр – это переменная, указанная в круглых скобках в объявлении функции.
    Аргумент – это значение, которое передаётся функции при её вызове.

    В приведённом выше примере можно было бы сказать:
    "функция showMessage объявляется с двумя параметрами, затем вызывается с двумя аргументами: from и "Hello"".

    Параметры по умолчанию

    Если параметр не указан, то его значением становится undefined.

    Например, вышеупомянутая функция showMessage(from, text) может быть вызвана с одним аргументом:

    showMessage("Аня");
    Это не приведёт к ошибке. Такой вызов выведет "*Аня*: undefined".
    В вызове не указан параметр text, поэтому предполагается, что text === undefined.

    Если мы хотим задать параметру text значение по умолчанию, мы должны указать его после =:

    function showMessage(from, text = "текст не добавлен") {
      alert( from + ": " + text );
    }

    showMessage("Аня"); // Аня: текст не добавлен

    В данном случае "текст не добавлен" это строка, но на её месте могло бы быть и более сложное выражение, которое бы вычислялось и присваивалось при отсутствии параметра. Например:

    function showMessage(from, text = anotherFunction()) {
      // anotherFunction() выполнится только если не передан text
      // результатом будет значение text
    }

    Ранние версии JavaScript не поддерживали параметры по умолчанию. Поэтому существуют альтернативные способы, которые могут встречаться в старых скриптах.

    Например, явная проверка на undefined:

    function showMessage(from, text) {
      if (text === undefined) {
        text = 'текст не добавлен';
      }

      alert( from + ": " + text );
    }

    !Возврат значения

    Функция может вернуть результат, который будет передан в вызвавший её код.

    Простейшим примером может служить функция сложения двух чисел:

    function sum(a, b) {
      return a + b;
    }

    let result = sum(1, 2);
    alert( result ); // 3

    Директива return может находиться в любом месте тела функции.
    Как только выполнение доходит до этого места, функция останавливается,
    и значение возвращается в вызвавший её код (присваивается переменной result выше).

    Вызовов return может быть несколько, например:

    function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        return confirm('А родители разрешили?');
      }
    }

    let age = prompt('Сколько вам лет?', 18);

    if ( checkAge(age) ) {
      alert( 'Доступ получен' );
    } else {
      alert( 'Доступ закрыт' );
    }
    Возможно использовать return и без значения. Это приведёт к немедленному выходу из функции.

    !!! Результат функции с пустым return или без него – undefined !!!

    Никогда не добавляйте перевод строки между return и его значением
    Для длинного выражения в return может быть заманчиво разместить его на нескольких отдельных строках, например так:

    return
     (some + long + expression + or + whatever * f(a) + f(b))
    Код не выполнится, потому что интерпретатор JavaScript подставит точку с запятой после return. Для него это будет выглядеть так:

    return;
     (some + long + expression + or + whatever * f(a) + f(b))
    Таким образом, это фактически стало пустым return.

    Если мы хотим, чтобы возвращаемое выражение занимало несколько строк, нужно начать его на той же строке, что и return. Или, хотя бы, поставить там открывающую скобку, вот так:

    return (
      some + long + expression
      + or +
      whatever * f(a) + f(b)
      )
    И тогда всё сработает, как задумано.

 */

/*
    Выбор имени функции

    Например, функции, начинающиеся с "show" обычно что-то показывают.

    Функции, начинающиеся с…

    "get…" – возвращают значение,
    "calc…" – что-то вычисляют,
    "create…" – что-то создают,
    "check…" – что-то проверяют и возвращают логическое значение, и т.д.

    Примеры таких имён:

    showMessage(..)     // показывает сообщение
    getAge(..)          // возвращает возраст (в каком-либо значении)
    calcSum(..)         // вычисляет сумму и возвращает результат
    createForm(..)      // создаёт форму (и обычно возвращает её)
    checkPermission(..) // проверяет доступ, возвращая true/false

    Одна функция – одно действие
    Функция должна делать только то, что явно подразумевается её названием. И это должно быть одним действием.

    Два независимых действия обычно подразумевают две функции, даже если предполагается,
    то они будут вызываться вместе (в этом случае мы можем создать третью функцию, которая будет их вызывать).

    Несколько примеров, которые нарушают это правило:

    getAge – будет плохим выбором, если функция будет выводить alert с возрастом (должна только возвращать его).
    createForm – будет плохим выбором, если функция будет изменять документ, добавляя форму в него (должна только создавать форму и возвращать её).
    checkPermission – будет плохим выбором, если функция будет отображать сообщение с текстом доступ разрешён/запрещён
    (должна только выполнять проверку и возвращать её результат).

*/

/* Функции == Комментарии */

/*
    Например, сравним ниже две функции showPrimes(n). Каждая из них выводит простое число до n.

    Первый вариант использует метку nextPrime:

    function showPrimes(n) {
      nextPrime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }

        alert( i ); // простое
      }
    }
    Второй вариант использует дополнительную функцию isPrime(n) для проверки на простое:

    function showPrimes(n) {

      for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);  // простое
      }
    }

    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
      }
      return true;
    }
 */