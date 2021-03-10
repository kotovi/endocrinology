function getIndex(list,id) {
    for (var i =0; i< list.length; i++) {
        if (list[i].id === id) {
            return i;
        }
    }
    return -1;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function is_empty(x)
{
    return (
        (typeof x == 'undefined')
        ||
        (x == null)
        ||
        (x == false)  //same as: !x
        ||
        (x.length == 0)
        ||
        (x == "")
        ||
        (x.replace(/\s/g,"") == "")
        ||
        (!/[^\s]/.test(x))
        ||
        (/^\s*$/.test(x))
    );
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var tezisApi = Vue.resource('/tezises{/id}');

Vue.component('tezis-form', {
    props: ['teziss', 'tezisAttr' , 'desks', 'showModal'],
    data: function() {
        return {
            id:'',
            tezisType:'',
            tezisName:'',
            tezisAnnotation:'',
            deskId:'',
            file:'',
            filename:'',
            ext:'',
            randomFileName:'',

        }
    },

    watch:{
        tezisAttr: function(newVal, oldVal){
            this.id = newVal.id;
            this.tezisType = newVal.tezisType;
            this.tezisName = newVal.tezisName;
            this.tezisAnnotation = newVal.tezisAnnotation;
            this.deskId = newVal.deskId;
            this.filename = newVal.filename;
            this.randomFileName = newVal.randomFileName;

        }
    },
    template:

        '<div style="background: #fff;">'+
        '<h1 class="display-4 mt-5 mb-5" style="padding-top:40px;">Доклады/тезисы для участия в конферении</h1>'+

        '<div class="card" >'+
            '<h5 v-show="($root.editClicked == false)" class="text-white  card-header" style="background: #293f50;">Добавление заявки на участие в конференции</h5>'+
            '<h5 v-show="($root.editClicked == true)" class="text-white  card-header" style="background: #293f50;">Редактирование заявки на участие в конференции</h5>'+
            '<div class="card-body">'+
        '<form>'+
                '<div class="form-row">'+
                    '<div class="form-group col-md-6">'+
                        '<label for="tezisType">Форма участия </label>'+
                        '<select class="custom-select" id="tezisType" v-model="tezisType">'+
                            '<option selected value="0" >Выбрать...</option>'+
                            '<option  value="1">Тезис</option>'+
                            '<option  value="2">Доклад</option>'+
                        '</select>'+
                        '<p class="alert alert-danger" v-show ="$root.tezisTypeAlert">Укажите тип участия в конференции</p>'+
                    '</div>'+
                    '<div class="form-group col-md-6">'+
                        '<label for="deskId">Секция</label>'+
                        '<select class="custom-select" id="deskId"  v-model="deskId">'+
                            '<option selected value="0" >Укажите секцию конференции</option>'+
                            '<option v-for="desk in desks"  v-bind:value="desk.id">{{desk.deskName}}</option>'+
                        '</select>'+
                        '<p class="alert alert-danger" v-show ="$root.deskIdAlert">Укажите секцию для участия!</p>'+
                    '</div>'+
                '</div>'+
                '<div class="form-row">'+
                    '<div class="form-group col-md-12">'+
                        '<label for="tezisName">Название доклада/тезиса</label>'+
                        '<div class="input-group">'+
                            '<input type="text" class="form-control" id="tezisName" v-model="tezisName" placeholder="Название доклада/тезиса" :maxlength="150">'+
                            '<div v-show="tezisName.length>0" class="input-group-prepend">' +
                                '<div class="input-group-text" v-text="150 - tezisName.length">@</div>' +
                            '</div>'+
                        '</div>'+
                        '<p class="alert alert-danger" v-show ="$root.tezisNameAlert">Укажите название доклада/тезиса!</p>'+
                    '</div>'+
                '</div>'+
                '<div class="form-row">'+
                    '<div class="form-group col-md-12">'+
                        '<label for="tezisAnnotation">Аннотация доклада/тезиса</label>'+
                        '<div class="input-group">'+
                            '<textarea type="text" class="form-control" id="tezisAnnotation" v-model="tezisAnnotation" placeholder="Аннотация длинной до 1000 символов" :maxlength="1000"></textarea>'+
                            '<div v-show="tezisAnnotation.length>0" class="input-group-prepend">' +
                                '<div class="input-group-text" v-text="1000 - tezisAnnotation.length">@</div>' +
                            '</div>'+
                        '</div>'+
                        '<p class="alert alert-danger" v-show ="$root.tezisAnnotationAlert">Укажите аннотацию!</p>'+
                    '</div>'+
                '</div>'+
        '<div v-if="($root.editClicked == false)" class="form-row">'+
        '<div class="form-group col-md-12">'+
        '<label>Прикрепить файл</label>'+
        '<div class="custom-file">'+
        '<input type="file" class="custom-file-input" id="file" ref="file" v-on:change="handleFileUpload()">'+
        '<label class="custom-file-label" for="file">{{filename}}</label>'+
        '<p class="alert alert-danger" v-show ="$root.fileSizeAlert">Размер файла не должен превышать 2МБ</p>'+
        '<p class="alert alert-danger" v-show ="$root.fileTypeAlert">Недопустимый тип файла! Загружать можно только .doc, .docx или .odt! </p>'+
        '</div>'+
        '</div>'+
        '</div>'+





        '<div class="form-tezis col-sm-10">'+
        '<input v-if="($root.editClicked == false)" type="button" class="btn btn-outline-light" style="background: #293f50; margin-top: 20px;" value="Создать" @click="save"/>'+
        '<input v-if="($root.editClicked == true)" type="button" class="btn btn-outline-light" style="background: #293f50; margin-top: 20px;" value="Сохранить" @click="save"/>'+
        '<input  type = "button" class="btn btn-outline-light" style="background: #293f50; margin-top: 20px; margin-left: 6px;" value="Вернуться на главную" @click="backToRoot"/>'+
        '</div>'+
        '</form>'+
        '</div>'+
        '</div>'+


        '</div>',

    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            this.filename = this.file.name;
            this.ext = this.filename.substr(this.filename.lastIndexOf('.') + 1);
            this.randomFileName = `f${(+new Date).toString(16)}`+ '.'+this.ext;
        },
        backToRoot: function(){
            window.location.href = '/';
        },

        save: function () {
            if((!is_empty(this.filename)) && (this.$root.editClicked == false)){

                if(this.file.size >2097152){
                    this.$root.fileSizeAlert=true;
                } else {


                    this.$root.fileSizeAlert=false;
                    if (!((this.ext=='doc') || (this.ext=='docx') || (this.ext=='odt') || (this.ext=='DOC') || (this.ext=='DOCX') || (this.ext=='ODT'))) {
                        this.$root.fileTypeAlert=true;
                        //this.randomFileName = `f${(+new Date).toString(16)}`+ '.'+this.ext;
                    } else{
                        this.$root.fileTypeAlert=false;
                        this.$root.showModal=true;
                    }
                }

            } else {
               // this.filename='1';
              //  this.randomFileName ='1';
                this.$root.fileSizeAlert=false;
                this.$root.fileTypeAlert=false;
            }

            var tezis = {
                tezisName: capitalizeFirstLetter(this.tezisName),
                tezisAnnotation: capitalizeFirstLetter(this.tezisAnnotation),
                deskId: this.deskId,
                tezisType: this.tezisType,
                filename: this.filename,
                randomFileName: this.randomFileName,

            };


            if (is_empty(this.tezisName)) {
                this.$root.tezisNameAlert = true;
            } else this.$root.tezisNameAlert = false;

            if (is_empty(this.tezisAnnotation)) {
                this.$root.tezisAnnotationAlert = true;
            } else this.$root.tezisAnnotationAlert = false;

            if (this.deskId<1) {
                this.$root.deskIdAlert = true;
            } else this.$root.deskIdAlert = false;

            if (this.tezisType<1) {
                this.$root.tezisTypeAlert = true;
            } else this.$root.tezisTypeAlert = false;


            if ((!this.$root.tezisNameAlert) &&
                (!this.$root.tezisAnnotationAlert)&&
                (!this.$root.deskIdAlert)&&
                (!this.$root.tezisTypeAlert)&&
                (!this.$root.fileSizeAlert)&&
                (!this.$root.fileTypeAlert)
            ) {
                if((this.$root.editClicked == false) && (!is_empty(this.filename))){

                    let formData = new FormData();
                    this.ext = this.filename.substr(this.filename.lastIndexOf('.') + 1);


                    /*
                        Add the form data we need to submit
                    */
                    formData.append('file', this.file, this.randomFileName);

                    /*
                      Make the request to the POST /single-file URL
                    */
                   axios.post( '/upload',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                          }
                        }
                        ).then(function(){
                        console.log('SUCCESS!!');
                        this.filename=this.file.name;
                        this.randomFileName;
                    })
                       .catch(function(){
                            console.log('FAILURE!!');
                        });


                }



                if (this.id) {
                    this.$root.editClicked = false;
                    console.log('this.randomFileName :'+ this.randomFileName);
                    console.log('this.filename :'+ this.filename);

                    tezisApi.update({id: this.id}, tezis).then(result =>
                    result.json().then(data => {
                        var index = getIndex(this.teziss, data.id);
                    this.$root.editClicked = false;
                    this.teziss.splice(index, 1, data);

                    this.id=''
                    this.tezisType=''
                    this.tezisName=''
                    this.tezisAnnotation=''
                    this.deskId=''
                    this.randomFileName=''
                    this.filename=''
                })
                )

                } else {
                    console.log('this.randomFileName :'+ this.randomFileName);
                    console.log('this.filename :'+ this.filename);

                    tezisApi.save({}, tezis).then(result =>
                    result.json().then(data => {
                        this.teziss.push(data);
                    this.tezisType=''
                    this.tezisName=''
                    this.tezisAnnotation=''
                    this.deskId=''
                    this.randomFileName=''
                    this.filename=''
                })
                )
                }
            }
            }
        }

});

Vue.component('tezis-row' , {
    props: ['tezis', 'editMethod', 'teziss'],
    template:
        '<tr>'+
            '<td width="10%" >{{this.teziss.indexOf(this.tezis) + 1}}</td>'+
            '<td width="30%" >{{tezis.tezisName}}</td>'+
            '<td v-if="tezis.tezisType==1" width="20%">Тезис</td>'+
            '<td v-if="tezis.tezisType==2" width="20%">Доклад</td>'+
            '<td v-if="tezis.tezisStatus==0" width="20%">Добавлен</td>'+
            '<td v-if="tezis.tezisStatus==1" width="20%">Одобрен</td>'+
            '<td v-if="tezis.tezisStatus==2" width="20%">Отклонен</td>'+
            '<td width="20%" align="center">'+
                '<input v-if="tezis.tezisStatus==0" type = "button" class="btn btn-outline-light" style="background: #293f50; margin: 2px;" v-on:click="$root.editClicked = true"  value="Изменить" @click="edit" />' +
                '<input type = "button" class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="X" @click="del" />'+
            '</td>'+
        '</tr>',
    methods: {
        edit: function(){
            this.editMethod(this.tezis);
        },
        del: function() {
            if (this.$root.editClicked == true) {
                alert("Перед удалением необходимо завершить редактирование!");
            } else {
                tezisApi.remove({id: this.tezis.id}).then(result => {
                    if (result.ok) { this.teziss.splice(this.teziss.indexOf(this.tezis), 1) }
            })
            }
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
        '<tezis-form :teziss="teziss"  :tezisAttr="tezis" :desks="desks" :showModal="showModal" />'+
        '<div v-show="this.$root.editClicked == false" class="card" style=" margin-top: 20px;">'+
        '<h5 class="text-white  card-header" style="background: #293f50;">Мои заявки</h5>'+
        '<div class="card-body">'+
        '<table class="table">'+
            '<thead>'+
            '<tr>'+
                '<th width="10%" scope="col">#</th>'+
                '<th width="30%" scope="col">Название</th>'+
                '<th width="20%" scope="col">Форма</th>'+
                '<th width="20%" scope="col">Статус</th>'+
                '<th width="20%" scope="col">Правка</th>'+
            '</tr>'+
            '</thead>'+
        '<tbody>'+
        '<tezis-row v-for="tezis in teziss" :key="tezis.id" :tezis = "tezis" ' +
        ':editMethod="editMethod" :teziss="teziss"/>' +
        '</tbody>' +
        '</table>' +
        '</div>'+
        '</div>'+
        '</div>',

    methods: {
        editMethod: function(tezis){
            this.tezis = tezis;
        },
    }

});

var app;

app = new Vue({
    el: '#app',
    template:
        '<div>'+
        '<teziss-list :teziss="teziss"  :desks="desks"/> '+
        '</div>',
    data: {

        teziss:[],
        desks:[],
        editClicked:false,
        tezisTypeAlert:false,
        deskIdAlert:false,
        tezisNameAlert:false,
        tezisAnnotationAlert:false,
        fileIsEmpty:true,
        fileSizeAlert:false,
        fileTypeAlert:false,
        ext:'',
        randomFileName:'',
        showModal:false,
    },

    created: function () {

        axios.get('/tezises').then(result => {
            this.teziss=result.data
        });
        axios.get('/desks').then(result => {
            this.desks=result.data
        });

    },
});


