var tezisApi = Vue.resource('/agreeTickets{/id}');

Vue.component('tezis-row' , {
    props: ['tezis','teziss','sDesk','tCounter'],
    template:
        '<tr>'+
            '<div v-if="((tezis.tezisStatus==1)&&(tezis.deskId==this.sDesk)) || ((tezis.tezisStatus==1)&&(this.sDesk==0))" class="card mx-auto" style="margin: 25px;">'+
                '<h5 v-if="tezis.tezisType==1" class="text-white  card-header" style="background: #293f50;" > Тезис</h5>'+
                '<h5 v-if="tezis.tezisType==2" class="text-white  card-header" style="background: #293f50;" > Доклад</h5>'+
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
                        '<li class="list-group-item"><b>Электронная почта:</b> {{tezis.user.userEmail}}</li>'+
                        '<li class="list-group-item"><b>Телефон:</b> {{tezis.user.phoneNumber}}</li>'+
                        '<li class="list-group-item"><b>Дата подачи заявки:</b> {{tezis.tezisAddDate}}</li>'+
                        '<li class="list-group-item"><b>Дата рассмотрения заявки:</b> {{tezis.tezisChangeStatusDate}}</li>'+
                        '<li v-if="((tezis.randomFileName.length) > 0)" class="list-group-item"><b>Прикрепленный файл: </b><a :href="`/downloadFile/`+ tezis.randomFileName"> {{tezis.filename}}</a></li>'+
                    '</ul>'+
                    '<div class="card-body">'+
                        '<a><input type = "button"  class="btn btn-danger" value="Отклонить" @click="reject" style="margin: 10px;" /></a>'+
                    '</div>'+
            '</div>'+
        '</tr>',
    methods: {
        reject: function(){
            alert(this.tezis.tezisStatus);
            this.tezis.tezisStatus=2;
            tezisApi.update({id: this.tezis.id}, this.tezis).then(result =>{
                if (result.ok) { this.teziss.splice(this.teziss.indexOf(this.tezis), 1) }
        })
        }
    }
});

Vue.component('teziss-list', {
    props: ['teziss', 'desks', 'sDesk', 'tCounter'],
    data: function(){
        return {
            tezis: null,
            search:'',
            finput:null,
            teziss_filter:0,
            pageNumber: 0,
        }
    },

    template:
        ' <div style="position: relative;">'+
        '<h1 class="display-4 mt-5 mb-5" style="padding-top:40px;">Одобренные заявки для участия в конференции</h1>'+

        '<div class="form-group mt-5 mb-5">'+
            '<label for="deskId">Секция</label>'+
            '<select class="custom-select" id="teziss_filter"  v-model="teziss_filter" @change="teziss_filter">'+
                '<option selected value="0" >Все секции</option>'+
                '<option v-for="desk in desks"  v-bind:value="desk.id">{{desk.deskName}}</option>'+
            '</select>'+
        '</div>'+

        '<h5 class="card-title" style="padding-top:4px;">Всего(с учетом результатов поиска): {{this.filteredList.length}}</h5>'+
        '<input style="margin: 5px;" v-model="search" id="search" class="form-control" placeholder="Поиск">'+

        '<div v-show="teziss.length < 1" class="alert"  role="alert" style="margin: 170px; background: #293f50;"><h1 class="text-white" >Одобренных заявок нет!</h1></div>'+
        '<tezis-row v-for="tezis in paginatedData" :key="tezis.id" :tezis = "tezis" :teziss="teziss" :sDesk="sDesk" :tCounter="tCounter"/>' +
        '</tbody>' +
        '</table>' +
        '<div align="center">'+
        '<button class="btn btn-outline-light" style="background: #293f50; margin-top: 2px;" :disabled="pageNumber === 0" @click="prevPage"> < Назад</button> {{this.pageNumber}}  <button class="btn btn-outline-light" style="background: #293f50; margin-top: 2px;" :disabled="pageNumber >= pageCount -1" @click="nextPage">Вперед > </button>'+
        '</div>'+
        '</div>',
    methods: {
        teziss_filter: function(){
            this.tCounter=0;

           // alert(this.sDesk);

        },
        nextPage(){
            this.pageNumber++;

        },
        prevPage(){
            this.pageNumber--;
        }
    },
    computed:{
        filteredList() {
            const s = this.search.toLowerCase();
            const  d = this.teziss_filter;
            if (d!=0){
                var finput =this.teziss.filter(item => item.deskId == d);
                return finput.filter(o=>_.some(o, v =>_.toLower(v).indexOf(s)>-1));


            } else{
                return this.teziss.filter(o=>_.some(o, v =>_.toLower(v).indexOf(s)>-1));

            }



        },
        pageCount(){
            let l = this.filteredList.length,
                s = 10;
            return Math.ceil(l/s);

        },
        paginatedData(){
            const start = this.pageNumber * 10,
                end = start + 10;

            return this.filteredList.slice(start, end);

        }

    },
});

var app;
app = new Vue({
    el: '#app',
    template:
        '<div>'+
        '<teziss-list :teziss="teziss"  :desks="desks" :sDesk="sDesk"  :tCounter="tCounter"/> ' +
        '</div>',
    data: {
        sDesk:0,
        tCounter:0,
        selectedDesks:[],
        teziss:[],
        desks:[],
    },

    created: function () {
        axios.get('/agreeTickets').then(result => {
            this.teziss=result.data
        });
        axios.get('/desks').then(result => {
            this.desks=result.data
        });
    },

});
