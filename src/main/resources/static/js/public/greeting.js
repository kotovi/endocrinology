

Vue.component('greeting-row' , {

    template:
    <!-- Header -->
        '<div style="background: #fff;">'+
        '<header class="py-5 mb-5" style="background: #293f50;">'+
        '<div class="container h-100">'+
        '<div class="row h-100 align-items-center">'+
        '<div class="col-lg-12">'+
        '<h1 class="display-4 text-white mt-5 mb-2">Portal</h1>'+
        '<h3 class="display-6 text-white-50">Платформа цифровизации Иркутского государственного медицинского университета</h3>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</header>'+

        '<div class="container h-100 " >'+
        '<div class="col-md-12 mb-5" >'+
        '<p>Добро пожаловать на платформу для цифровизации процесса обучения Иркутского государственного медицинского университета. '+
        'Данная платформа позволяет формировать курсы из видео лекций, предназначенных для самостоятельной подготовки обучающихся.  </p>'+
        '<p>Для получения доступа к платформе необходимо обратиться в отдел Информационных технологий и информационной безопасности '+
        'Ирукского государственного медицинского университета по адресу гор. Иркутск, ул. Крассного Восстания, дом 1, кабинет 116.</p>'+
        '<p>Данная платформа использует JavaScript, в связи с чем для корректной работы рекомендуется использовать актуальную версию браузеров '+
        'Opera, Mozilla Firefox, Safari или Google Chrome. </p>'+
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