
var tezisApi = Vue.resource('/rejectedTickets{/id}');


Vue.component('tezis-row' , {
    props: ['tezis','teziss'],
    template:
        '<tr >'+
            '<div v-if="tezis.tezisStatus==2" class="card mx-auto" style="margin: 25px;">'+
                '<h5 v-if="tezis.tezisType==1" class="text-white  card-header" style="background: #293f50;" >#{{this.teziss.indexOf(this.tezis)+1}} Тезис</h5>'+
                '<h5 v-if="tezis.tezisType==2" class="text-white  card-header" style="background: #293f50;" >#{{this.teziss.indexOf(this.tezis)+1}} Доклад</h5>'+
                '<h5 v-if="tezis.deskId==7" class="text-white  card-header" style="background: #502840;" >Секция: Тенденции, перспективы, инновации в развитии высшего образования в России</h5>'+
                '<h5 v-if="tezis.deskId==8" class="text-white  card-header" style="background: #1c501f;" >Секция: Актуальные вопросы методики преподавания учебных дисциплин</h5>'+
                '<h5 v-if="tezis.deskId==9" class="text-white  card-header" style="background: #172650;" >Секция: Современные информационные технологии в образовательном процессе</h5>'+
                '<h5 v-if="tezis.deskId==10" class="text-white  card-header" style="background: #502417;" >Секция: Организация образовательной деятельности при реализации федеральных государственных образовательных стандартов высшего образования</h5>'+
                '<h5 v-if="tezis.deskId==11" class="text-white  card-header" style="background: rgba(92,109,14,0.85);" >Секция: Преемственность образовательных программ по уровням образования при реализации ФГОС в контексте концепции непрерывного образования: школа – колледж – вуз</h5>'+
                '<h5 v-if="tezis.deskId==12" class="text-white  card-header" style="background: #a66290;" >Секция: Теория и практика воспитательной работы и психологического сопровождения образовательной деятельности в образовательной организации</h5>'+
                '<h5 v-if="tezis.deskId==13" class="text-white  card-header" style="background: #0e500b;" >Секция: Актуальные вопросы модернизации среднего профессионального образования</h5>'+
                '<h5 v-if="tezis.deskId==14" class="text-white  card-header" style="background: #135047;" >Секция: Наука, образование, производство: взаимодействие в современном обществе</h5>'+
                '<h5 v-if="tezis.deskId==15" class="text-white  card-header" style="background: #2f9c3a;" >Секция: Подготовка кадров высшей квалификации (аспирантура, ординатура). Организационно-методические вопросы повышения квалификации работников высшей школы</h5>'+
                '<h5 v-if="tezis.deskId==16" class="text-white  card-header" style="background: #732009;" >Круглый стол: Роль профессионального образования в кадровом обеспечении экономики региона</h5>'+
                '<h5 v-if="tezis.deskId==17" class="text-white  card-header" style="background: rgba(147,3,3,0.99);" >Круглый стол: Лучшие практики организации воспитательной работы среди студентов как ресурс профилактики идеологии терроризма и экстремизма</h5>'+
                '<h5 v-if="tezis.deskId==18" class="text-white  card-header" style="background: #4e2750;" >Круглый стол: Реализация процессов интернационализации в образовательных организациях региона</h5>'+
                '<h5 v-if="tezis.deskId==19" class="text-white  card-header" style="background: #053a50;" >Круглый стол: Образовательный консорциум: цифровые технологии решений</h5>'+
                '<h5 v-if="tezis.deskId==20" class="text-white  card-header" style="background: #3e1150;" >Круглый стол: Студенческий спорт и физическая культура в обеспечении здоровьесбережения в современном образовательном пространстве</h5>'+

        '<div class="card-body">'+
                    '<h5 class="card-title">{{tezis.tezisName}}</h5>'+
                    '<p class="card-text">{{tezis.tezisAnnotation}}</p>'+
                '</div>'+
                '<ul class="list-group list-group-flush">'+
                    '<li class="list-group-item"><b>Автор:</b> {{tezis.user.firstname}} {{tezis.user.secname}} {{tezis.user.lastname}}</li>'+
                    '<li class="list-group-item"><b>Ученая степень, ученое звание, должность:</b> {{tezis.user.degree}}</li>'+
                    '<li class="list-group-item"><b>Организация:</b> {{tezis.user.organization}}</li>'+
                    '<li class="list-group-item"><b>Адресс рганизации:</b> {{tezis.user.organizationPostAddress}}</li>'+
                    '<li class="list-group-item"><b>Электронная почта:</b> {{tezis.user.userEmail}} </li>'+
                    '<li class="list-group-item"><b>Телефон:</b> {{tezis.user.phoneNumber}}</li>'+
                    '<li class="list-group-item"><b>Дата подачи заявки:</b> {{tezis.tezisAddDate}}</li>'+
                    '<li class="list-group-item"><b>Дата рассмотрения заявки:</b> {{tezis.tezisChangeStatusDate}}</li>'+
                    '<li v-if="((tezis.randomFileName.length) > 0)" class="list-group-item"><b>Прикрепленный файл: </b><a :href="`/downloadFile/`+ tezis.randomFileName"> {{tezis.filename}}</a></li>'+
                '</ul>'+
                '<div class="card-body">'+
                    '<a> <input type = "button"  class="btn btn-success" value="Одобрить" @click="agree" style="margin: 10px;"/></a>'+
                '</div>'+
            '</div>'+
        '</tr>',
    methods: {
        agree: function(){
            alert(this.tezis.tezisStatus);
            this.tezis.tezisStatus=1;
            tezisApi.update({id: this.tezis.id}, this.tezis).then(result =>{
                if (result.ok) { this.teziss.splice(this.teziss.indexOf(this.tezis), 1) }
            })
        }

    }

});

Vue.component('teziss-list', {
    props: ['teziss', 'moderators', 'desks'],
    data: function(){
        return {
            tezis: null
        }
    },

    template:
        ' <div style="position: relative;">'+
        '<h1 class="display-4 mt-5 mb-5" style="padding-top:40px;">Отклоненные заявки для участия в конференции</h1>'+
        '<h5 class="card-title" style="padding-top:4px;">Всего: {{teziss.length}}</h5>'+
        '<div v-show="teziss.length < 1" class="alert"  role="alert" style="margin: 170px; background: #293f50;"><h1 class="text-white" >Отклоненных заявок нет!</h1></div>'+
        '<tezis-row v-for="tezis in teziss" :key="tezis.id" :tezis = "tezis" ' +
        ':teziss="teziss"/>' +
        '</tbody>' +
        '</table>' +
        '</div>',

});

var app;

app = new Vue({
    el: '#app',
    template:
        '<div>'+
        '<teziss-list :teziss="teziss"/> ' +
        '</div>',
    data: {
        teziss:[],
    },

    created: function () {

        axios.get('/rejectedTickets').then(result => {
            this.teziss=result.data
        });

    },
});
