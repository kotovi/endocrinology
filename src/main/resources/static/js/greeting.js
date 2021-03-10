Vue.component('greeting-row' , {
    template:
    <!-- Header -->
    '<div style="background: #fdffff;">'+
    '<header class="py-5 mb-5" style="background: #68a225;">'+
        '<div class="container h-100">'+
            '<div class="row h-100 align-items-center">'+
            '<div class="col-lg-12">'+
                    '<h1 class="display-6 text-white  mt-5 mb-2">Научно-образовательный семинар</h1>'+
                    '<h1 class="display-6 text-white">«Микрососудистые осложнения сахарного диабета: диабетическая ретинопатия и нефропатия»</h1>'+
                    '<h3 class="display-6 text-white">18 февраля 2021 г.</h3>'+
                    '<h5 class="display-9 text-white">Федеральное государственное бюджетное образовательное учреждение высшего образования «Иркутский государственный медицинский университет» Министерства здравоохранения Российской Федерации</h5>'+
                    '<a class="btn btn-outline-light"  href="https://youtu.be/l4dIMw51UcI">Просмотр материалов</a>'+
            '</div>'+
            '</div>'+
        '</div>'+
        '</header>'+

        '<div class="container" style="background: #fff;">'+
            '<h5 class="display-4 mt-5 mb-2">Материалы конференции</h5>'+
            '<hr>'+

            '<div class="card-columns">'+
                '<div class="card h-100">'+
                    '<div class="text-white  card-header" style="background: #b6af2b;"><h5>ВСТУПЛЕНИЕ</h5></div>'+
                    '<div class="card-body">'+
                        '<h4 class="card-title">Открытие научно-образовательного семинара</h4>'+
                    '</div>'+
                    '<div class="card-footer text-muted">'+
                        '<p class="card-text"><b>Докладчик:</b>Хамнуева Л.Ю., проф., д.м.н., зав. кафедрой эндокринологии, клинической' +
                        'фармакологии и иммунологии ИГМУ; Юрьева Т.Н., д.м.н., проф. кафедры' +
                        'глазных болезней ИГМУ заместитель директора по научной работе ФГАУ' +
                        'НМИЦ «МНТК «Микрохирургия глаза».</p>'+
                    '</div>'+
                '</div>'+

            '</div>'+
            '<hr>'+
            '<div class="card-columns">'+
                '<div class="card h-100">'+
                    '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
                    '<div class="card-body">'+
                        '<h4 class="card-title">Регистр больных сахарным диабетом Иркутской области - 2020. Итоги работы и задачи.</h4>'+
                    '</div>'+
                    '<div class="card-footer text-muted">'+
                        '<p class="card-text"><b>Докладчик: </b>Андреева Л.С. к.м.н., доцент кафедры эндокринологии, клинической' +
                                                                'фармакологии и иммунологии ИГМУ, главный внештатный специалист-' +
                                                                'диабетолог МЗ Иркутской области.</p>'+
                    '</div>'+
                '</div>'+

                '<div class="card h-100">'+
                    '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
                    '<div class="card-body">'+
                        '<h4 class="card-title">Работа врачей-специалистов в условиях пандемии новой' +
                                        'коронавирусной инфекции».</h4>'+
                        '</div>'+
                        '<div class="card-footer text-muted">'+
                            '<p class="card-text"><b>Докладчик: </b>Юрьева Т.Н., д.м.н., проф. кафедры глазных болезней ИГМУ заместитель' +
                                                        'директора по научной работе ФГАУ НМИЦ «МНТК «Микрохирургия глаза».</p>'+
                        '</div>'+
                '</div>'+

                '<div class="card h-100">'+
                    '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
                    '<div class="card-body">'+
                        '<h4 class="card-title">Современные алгоритмы диагностики и ведения больных с' +
                                        'диабетической ретинопатией.</h4>'+
                    '</div>'+
                    '<div class="card-footer text-muted">'+
                        '<p class="card-text"><b>Докладчик: </b>В.В. Букина — врач-офтальмолог высшей категории, к.м.н., заведующая' +
                                                                'отделением лазерной хирургии ФГАУ НМИЦ «МНТК «Микрохирургия   глаза».</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<hr>'+
            '<div class="card-columns">'+
                '<div class="card h-100">'+
                    '<div class="text-white  card-header" style="background: #68a225;"><h5>ДОКЛАД</h5></div>'+
                    '<div class="card-body">'+
                        '<h4 class="card-title">Диагностика диабетической нефропатии. Диспансерное наблюдение.</h4>'+
                    '</div>'+
                    '<div class="card-footer text-muted">'+
                        '<p class="card-text"><b>Докладчик: </b>Хамнуева Л.Ю., проф., д.м.н., зав. кафедрой эндокринологии, клинической' +
                                                                'фармакологии и иммунологии ИГМУ.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<hr>'+
            '<div class="card-columns">'+
                '<div class="card h-100">'+
                    '<div class="text-white  card-header" style="background: #b6af2b;"><h5>ЗАВЕРШЕНИЕ</h5></div>'+
                    '<div class="card-body">'+
                        '<h4 class="card-title">Дискуссионная панель. Закрытие семинара.</h4>'+
                    '</div>'+
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
    },

    created: function () {


    },
});