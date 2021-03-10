
Vue.component('report-row' , {
    props: ['rep'],

    template:
        '<tr>'+
            '<td>{{rep.reportName}}</td>'+
            '<td>'+
                '<input style="margin: 5px;" type = "button" class="btn btn-sm btn-success" value="Просмотр" @click="viewRecord" />'+
            '</td>'+
        '</tr>',
    methods: {
        viewRecord: function () {
            this.$root.watchUrl=this.rep.reportURL;
            this.$root.showFrame=true;
        },

    }
});


app2 = new Vue({
    el: '#app-greeting',
    template:

        '<div style="background: #fff;">'+


        '<div v-if="this.$root.showFrame">'+
            '<div class="modal-mask">'+
                '<div class="modal-video-wrapper">'+
                    '<div class="modal-video-container">'+
                        '<div class="modal-title">'+
                            '<button class="close" @click="closeFrame">&times;</button>'+
                        '</div>'+
                        '<video id="player" playsinline controls data-poster="/path/to/poster.jpg" style="width: 80%; align-content: center;' +
        '">'+
                            '<source :src="this.$root.watchUrl" type="video/mp4" />'+
                        '</video>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="card" style="margin-top: 150px; margin-right: 100px; margin-left: 100px; margin-bottom: 100px;">'+
            '<div style="background: #68a225;" class="card-header text-white">Доклады</div>'+
                '<div class="card-body">'+
                    '<table class="table table-striped">'+
                        '<thead>'+
                            '<tr>'+
                                '<th>Доклад</th>'+
                                '<th>Действие</th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<report-row v-for="rep in reports" :rep="rep"></report-row>'+
                        '</tbody>' +
                    '</table>' +
                '</div>'+
            '</div>'+
        '</div>'+

        '</div>',
    methods:{
        closeFrame() {
            this.$root.showFrame = false;
        },
    },

    data: {
        nav:'',
        userId:'',
        userGroup:'',


        watchUrl:'',
        showFrame:false,
        reports:[

        ],

    },

    created: function () {


    },
});