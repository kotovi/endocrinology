var registredApi = Vue.resource('/userlist');

Vue.component('agree-row' , {
    props: ['agree','agrees','pageNumber'],
    template:
        '<tr>'+
        '<div class="card mx-auto" style="margin: 25px;">'+
        '<h5 class="text-white  card-header" style="background: #293f50;" >Пользователь #{{this.agrees.indexOf(this.agree)+ 1 + this.pageNumber * 10}}</h5>'+
          '<div class="card-body">'+
        '<h5 class="card-title">{{agree.firstname}} {{agree.secname}} {{agree.lastname}}</h5>'+
        '</div>'+
        '<ul class="list-group list-group-flush">'+
            '<li class="list-group-item"><b>Специальность по сертификату:</b> {{agree.degree}}</li>'+
            '<li class="list-group-item"><b>Организация:</b> {{agree.organization}}</li>'+
            '<li class="list-group-item"><b>Адрес организации:</b> {{agree.organizationPostAddress}}</li>'+
            '<li class="list-group-item"><b>Электронная почта:</b> {{agree.userEmail}}</li>'+
            '<li class="list-group-item"><b>Телефон:</b> {{agree.phoneNumber}}</li>'+
            '<li class="list-group-item"><b>Дата регистрации:</b> {{agree.registrationDate}}</li>'+
        '</ul>'+
        '<div class="card-body">'+

        '</div>'+
        '</div>'+
        '</tr>',

});

Vue.component('agrees-list', {
    props: ['agrees', 'size'],
    data: function(){
        return {
            agree: null,
            pageNumber: 0,
            agreesPages:[],
            search:'',
        }
    },
    methods:{
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
            return this.agrees.filter(o=>_.some(o, v =>_.toLower(v).indexOf(s)>-1));

        },
        pageCount(){
            let l = this.filteredList.length,
                s = 10;
            return Math.ceil(l/s);

        },
        paginatedData(){
            const start = this.pageNumber * 10,
                end = start + 10;

            this.agreesPages = this.filteredList.slice(start, end);
            return this.agreesPages;
        }
    },

    template:
        ' <div style="position: relative;">'+
        '<h1 class="display-4 mt-5 mb-5" style="padding-top:40px;">Зарегистрированные пользователи</h1>'+
        '<h5 class="card-title" style="padding-top:4px;">Всего(с учетом результатов поиска): {{this.filteredList.length}}</h5>'+
        '<input style="margin: 5px;" v-model="search" id="search" class="form-control" placeholder="Поиск">'+
        '<div v-show="agrees.length < 1" class="alert"  role="alert" style="margin: 170px; background: #293f50;"><h1 class="text-white" >Зарегистрированных пользователей нет!</h1></div>'+
        '<agree-row v-for="agree in paginatedData" :key="agree.id" :agree = "agree" :agrees="paginatedData"  :pageNumber="pageNumber"/>' +
        '</tbody>' +
        '</table>' +
        '<div align="center">'+
            '<button class="btn btn-outline-light" style="background: #293f50; margin-top: 2px;" :disabled="pageNumber === 0" @click="prevPage"> < Назад</button> {{this.pageNumber}}  <button class="btn btn-outline-light" style="background: #293f50; margin-top: 2px;" :disabled="pageNumber >= pageCount -1" @click="nextPage">Вперед > </button>'+
        '</div>'+
        '</div>',

});

var app;
app = new Vue({
    el: '#app',
    template:
        '<div>'+
        '<agrees-list :agrees="agrees"/> ' +
        '</div>',
    data: {
        agrees:[],
    },

    created: function () {
        axios.get('/userlist').then(result => {
            this.agrees=result.data
        });
    },
});
