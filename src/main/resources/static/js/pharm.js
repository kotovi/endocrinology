

Vue.component('greeting-row' , {

    template:
    <!-- Header -->
    '<div style="background: #fdffff;">'+
    '<header class="py-5 mb-5" style="background: #68a225;">'+
        '<div class="container h-100">'+
            '<div class="row h-100 align-items-center">'+
            '<div class="col-lg-12">'+
                    '<h1 class="display-6 text-white  mt-5 mb-2">Всероссийская научно-практическая конференция студентов и молодых ученых c международным участием</h1>'+
                    '<h1 class="display-6 text-white">«ПРИРОДНЫЕ СОЕДИНЕНИЯ И ЗДОРОВЬЕ ЧЕЛОВЕКА»</h1>'+
                    '<h3 class="display-6 text-white">4 декабря 2020г.</h3>'+
                    '<h5 class="display-9 text-white">Федеральное государственное бюджетное образовательное учреждение высшего образования «Иркутский государственный медицинский университет» Министерства здравоохранения Российской Федерации</h5>'+
            '</div>'+
        '<a class="btn btn-outline-light"  href="https://youtu.be/Ft2-x6-i3D0">Просмотр материалов&raquo;</a>'+
            '</div>'+
        '</div>'+
        '</header>'+

        '<div class="container" style="background: #fff;">'+
        '<h5 class="display-4 mt-5 mb-2">Программа конференции</h5>'+
        '<hr>'+

        '<div class="card-columns">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #b6af2b;"><h5>ВСТУПЛЕНИЕ</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Приветственное слово ректора ФГБОУ ВО «Иркутский государственный медицинский университет» Минздрава России, д.м.н., профессора Игоря Владимировича Малова.</h4>'+
            '</div>'+
        '</div>'+



        '</div>'+
        '<hr>'+
        '<div class="card-columns">'+

        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«АНАЛИЗ АССОРТИМЕНТНОЙ СТРУКТУРЫ АПТЕЧНЫХ ПРЕПАРАТОВ, ОБЛАДАЮЩИХ СЕДАТИВНЫМ ДЕЙСТВИЕМ».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Докладчик: </b>Митина Анастасия Эдуардовна, студентка 5 курса фармацевтического факультета. </p>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Научный руководитель: </b>к.фарм. н. Петухова С.А., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия</p>'+
            '</div>'+
        '</div>'+

        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«ИЗУЧЕНИЕ АНТИРАДИКАЛЬНЫХ СВОЙСТВ ЭКСТРАКТОВ ПОДЗЕМНОЙ ЧАСТИ ЛАПЧАТКИ ГУСИНОЙ».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Докладчик: </b>Кучеренко Андрей Михайлович, студент 2 курса медико-психолого-фармацевтического факультета.</p>'+
            '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научные руководители: </b>Доцент, к.б.н. Лапкина Е.З., доцент, к.фарм.н. Савельева Е.Е., Кафедра фармакогнозии и фармацевтической технологии с курсом ПО, Красноярский государственный медицинский университет им. В.Ф. Войно-Ясенецкого, г. Красноярск, Россия</p>'+
        '</div>'+
        '</div>'+



        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«ТЕХНОЛОГИЧЕСКИЕ ИССЛЕДОВАНИЯ ДЛЯ РАЗРАБОТКИ ЖИДКОГО ЭКСТРАКТА ЧАГИ».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Цетенко Наталья Алексеевна, студентка 5 курса фармацевтического факультета.</p>'+
            '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>доцент, к.фарм.н. Мурашкина И. А., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет</p>'+
        '</div>'+

        '</div>'+

        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«ПЕРСПЕКТИВЫ ИСПОЛЬЗОВАНИЯ ТЕХНОЛОГИИ МИКРОКЛОНАЛЬНОГО РАЗМНОЖЕНИЯ ДЛЯ ВВЕДЕНИЯ В КУЛЬТУРУ ЦИКОРИЯ ОБЫКНОВЕННОГО (CICHORIUM INTYBUS L.)».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Докладчик: </b>Некрасова Дарья Алексеевна, студентка 5 курса фармацевтического факультета.</p>'+
            '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>доцент, к.фарм.н., д.б.н. Повыдыш М.Н., доцент, к.фарм.н. Пивоварова Н.С.,Кафедра фармакогнозии, кафедра промышленной технологии лекарственных препаратов, Санкт-Петербургский химико-фармацевтический университет Министерства здравоохранения Российской Федерации, г.Санкт-Петербург, Россия</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«ФИТОХИМИЧЕСКОЕ ИССЛЕДОВАНИЕ НАДЗЕМНЫХ ОРГАНОВ ШЛЕМНИКА ОБЫКНОВЕННОГО, КУЛЬТИВИРУЕМОГО В ПРИБАЙКАЛЬЕ».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Докладчик: </b>Замолина Алина Андреевна, студентка 4 курса фармацевтического факультета.</p>'+
            '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>профессор, д.фарм.н. Мирович В.М., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ИССЛЕДОВАНИЕ СВОЙСТВ СЕЛЕНОБОГАЩЕННЫХ ПРОРОСТКОВ ПШЕНИЦЫ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Скорина Есения Викторовна, студентка 4 курса медико-психолого-фармацевтического факультета.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научные руководители: </b>доцент, к.х.н. Булгакова Н.А, доцент, к.б.н. Лапкина Е.З., Кафедра фармакогнозии и фармацевтической технологии с курсом ПО, Красноярский государственный медицинский университет, г. Красноярск, Россия</p>'+
        '</div>'+
        '</div>'+


        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«МИКРОСКОПИЧЕСКОЕ ИЗУЧЕНИЕ PATRINIA SIBIRICA».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Докладчик: </b>Орсоева Валерия Александровна, студентка 2 курса фармацевтического факультета</p>'+
            '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>к. фарм. н., доцент, Привалова Е.Г.Э,Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия\n</p>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<hr>'+
        '<div class="card-columns">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #25a270;"><h5>ПОСТЕРНЫЙ ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«УЯЗВИМЫЕ РАСТЕНИЯ РОДА CYPRIPEDIUM ФЛОРЫ ПРИБАЙКАЛЬЯ».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Докладчик: </b>Карпова Тамара Игоревна, студентка 2 курса фармацевтического факультета</p>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Научный руководитель: </b>старший преподаватель, к.фарм.н Петухова С.А., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия\n</p>'+
            '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #25a270;"><h5>ПОСТЕРНЫЙ ДОКЛАД</h5></div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">«ПРЕДСТАВИТЕЛИ СЕМЕЙСТВА IRIDACEAE ФЛОРЫ БАЙКАЛЬСКОГО ЗАПОВЕДНИКА».</h4>'+
            '</div>'+
            '<div class="card-footer text-muted">'+
                '<p class="card-text"><b>Докладчик: </b>Нефедьева Ксения Павловна, студентка 2 курса фармацевтического факультета</p>'+
            '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>старший преподаватель, к.фарм.н Петухова С.А., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия</p>'+
        '</div>'+
        '</div>'+


        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #25a270;"><h5>ПОСТЕРНЫЙ ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«СРАВНИТЕЛЬНЫЙ АНАЛИЗ МОРФОЛОГИЧЕСКИХ ПРИЗНАКОВ ПРЕДСТАВИТЕЛЕЙ РОДОВ ORTIHILIA И PYROLA ИРКУТСКОЙ ОБЛАСТИ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Орсоева Валерия Александровна, студентка 2 курса фармацевтического факультета</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b> к. фарм. н., доцент, Привалова Е.Г., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #25a270;"><h5>ПОСТЕРНЫЙ ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«БОТАНИЧЕСКАЯ ХАРАКТЕРИСТИКА КУЛЬТИВИРУЕМЫХ СУККУЛЕНТНЫХ РАСТЕНИЙ, ПРИМЕНЯЕМЫХ В ОФИЦИНАЛЬНОЙ И НАРОДНОЙ МЕДИЦИНЕ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Чичканова Надежда Михайловна, студентка 2 курса фармацевтического факультета </p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>старший преподаватель, к.фарм.н. Петухова С.А., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #25a270;"><h5>ПОСТЕРНЫЙ ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ИСТОЧНИКИ ПОЛУЧЕНИЯ СЕРЫ – АНАЛОГА ЖЕВАТЕЛЬНОЙ РЕЗИНКИ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Якушевская Татьяна Алексеевна, студентка 2 курса фармацевтического факультета.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>старший преподаватель, к.фарм.н. Петухова С.А., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '<hr>'+
        '<div class="card-columns">'+



        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ВИТАМИН С В ЛЕКАРСТВЕННЫХ ПРЕПАРАТАХ СИНТЕТИЧЕСКОГО И РАСТИТЕЛЬНОГО ПРОИСХОЖДЕНИЯ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчики: </b>Адыг-Тюлюш Аюш Адыгжыевна, Куулар Алдынай Маадыровна, студентки 5 курса фармацевтического факультета</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>к. фарм. н., доцент, Привалова Е.Г., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+


        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«СОДЕРЖАНИЕ ФЕНОЛЬНЫХ СОЕДИНЕНИЙ И ПОЛИСАХАРИДОВ В ТОПИНАМБУРЕ, КУЛЬТИВИРУЕМОМ В ЮЖНЫХ РАЙОНАХ ИРКУТСКОЙ ОБЛАСТИ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчики: </b>Зырянова Галина Викторовна, Баженова Маргарита Анатольевн, студентки 5 курса фармацевтического факультета.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>профессор, д.фарм.н. Мирович В.М., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия</p>'+
        '</div>'+
        '</div>'+



        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ВЛИЯНИЕ ФАЗЫ ВЕГЕТАЦИИ НА НАКОПЛЕНИЕ ФЕНОЛЬНЫХ СОЕДИНЕНИЙ В ЗУБЧАТКЕ ПОЗДНЕЙ В УСЛОВИЯХ ПРИБАЙКАЛЬЯ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчики: </b>Лихова Алена Николаевна, Шагланова Елизавета Сергеевна, студентки 5 курса фармацевтического факультета.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>профессор, д.фарм.н. Мирович В.М., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«АНАТОМО-ДИАГНОСТИЧЕСКИЕ ПРИЗНАКИ ЛИСТЬЕВ И СТЕБЛЕЙ ШИПОВНИКА МОРЩИНИСТОГО (ROSA RUGOSA THUNB.)».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Нордопова Светлана Доржиевна, студентка 4 курса фармацевтического факультета.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>профессор, д.фарм.н. Мирович В.М., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ИССЛЕДОВАНИЕ ШРОТА ЛАПЧАТКИ ГУСИНОЙ ПОСЛЕ ПОЛУЧЕНИЯ НАСТОЙКИ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчики: </b>Петренко Дарья Александровна,Савельева Елена Евгеньевна, Булгакова Надежда Анатольевна, кафедра фармацевтической технологии и фармакогнозии с курсом ПО.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>Красноярский государственный медицинский университет им. проф. В.Ф.Войно-Ясенецкого Минздрава России, г. Красноярск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«КАЧЕСТВЕННЫЙ И КОЛИЧЕСТВЕННЫЙ СОСТАВ ФЛАВОНОИДОВ ТРАВЫ ALCHEMILLA SUBCRENATA BUSER».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Фетцова Анна Алексеевна, студентка 4 курса фармацевтического факультета.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>старший преподаватель, к.фарм.н. Петухова С.А., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ФЕНОЛЬНЫЕ СОЕДИНЕНИЯ ЛИСТЬЕВ ЗЕМЛЯНИКИ ЗЕЛЕНОЙ, ПРОИЗРАСТАЮЩЕЙ В ПРИБАЙКАЛЬЕ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчики: </b>Цетенко Наталья Алексеевна, Токарева Анна Юрьевна, студентки 5 курса фармацевтического факультета.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>профессор, д.фарм.н. Мирович В.М., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+


        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«САПОНИНЫ PATRINIA SCABIOSOFOLIA».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Яковлева Вероника Александровна.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>к. фарм. н., доцент, Привалова Е.Г., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет, г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ОПРЕДЕЛЕНИЕ НОРМ ТОВАРОВЕДЧЕСКИХ ПОКАЗАТЕЛЕЙ В СБОРЕ АНГИОПРОТЕКТОРНОМ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Посохина Алина Алексеевна.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>профессор, д.фарм.н. Мирович В.М., Кафедра фармакогнозии и фармацевтической технологии, Иркутский государственный медицинский университет,г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '</div>'+

        '<hr>'+
        '<div class="card-columns">'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #25a289;"><h5>ШКОЛЬНИКИ</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«ПИЩЕВЫЕ ДОБАВКИ В ПРОДУКТАХ ПИТАНИЯ, ИХ ПОЛЬЗА И ВРЕД ДЛЯ ЗДОРОВЬЯ».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Плотникова Анастасия Александровна.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>учитель географии Перфильева И.Н., Муниципальное бюджетное общеобразовательное учреждение города Иркутска средняя общеобразовательная школа № 5, г. Иркутск, Россия.</p>'+
        '</div>'+
        '</div>'+

        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #25a289;"><h5>ШКОЛЬНИКИ</h5></div>'+
        '<div class="card-body">'+
        '<h4 class="card-title">«РАСТЕНИЯ, ПРОИЗРАСТАЮЩИЕ НА ПРИУСАДЕБНОМ УЧАСТКЕ, СОДЕРЖАЩИЕ ВИТАМИН С».</h4>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Докладчик: </b>Чернигова Ника Александровна.</p>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
        '<p class="card-text"><b>Научный руководитель: </b>заместитель директора по воспитательной работе, учитель биологии, Петрова М.А., Муниципальное бюджетное общеобразовательное учреждение Новонукутская средняя общеобразовательная школ, п. Новонукутский, Россия.</p>'+
        '</div>'+
        '</div>'+



        '</div>'+


        '</div>'+
        '</div>'+
'</div>'+


    <!-- Footer -->

    '</div>',

});
app2 = new Vue({
    el: '#app-greeting',
    template:
        '<div>'+
        '<greeting-row/>'+
        '</div>',
    data: {
        nav:'',
        userId:'',
        userGroup:'',
        sectionInfo1:false,
        sectionInfo2:false,
        sectionInfo3:false,
        sectionInfo4:false,
        sectionInfo5:false,
        sectionInfo6:false,
        sectionInfo7:false,
        sectionInfo8:false,
        sectionInfo9:false,
        sectionInfo10:false,
        sectionInfo11:false,
        sectionInfo12:false,
        sectionInfo13:false,
        sectionInfo14:false,
        sectionInfo15:false,
        deskInfo3:false,
        deskInfo5:false,
    },

    created: function () {


    },
});