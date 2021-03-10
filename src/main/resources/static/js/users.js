function getIndex(list,id) {
    for (var i =0; i< list.length; i++) {
        if (list[i].id === id) {
            return i;
        }
    }
    return -1;
}
function checkUsername(list,username) {
    for (var i =0; i< list.length; i++) {
        if ((list[i].username == username)&&(username.length>0)) {
            return list[i].id;
        }
    }
    return 0;
}

function makePassword(length) {
    var text = "";
    var possible = "ABCDEFGHvJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
var userApi = Vue.resource('/userlist{/id}');

Vue.component('user-form', {
    props: ['userAttr', 'showModal'],
    data: function() {
        return {
            id:'',
            firstname: '',
            lastname: '',
            secname: '',
            organization: '',
            degree: '',
            organizationPostAddress: '',
            userEmail: '',
            phoneNumber: '',
            personalDataAgree: '',
            password: '',
        }
    },


    watch:{
        userAttr: function(newVal){
            this.id = newVal.id;
            this.firstname = newVal.firstname;
            this.lastname = newVal.lastname;
            this.secname = newVal.secname;
            this.organization = newVal.organization;
            this.degree = newVal.degree;
            this.organizationPostAddress = newVal.organizationPostAddress;
            this.userEmail = newVal.userEmail;
            this.phoneNumber = newVal.phoneNumber;
            this.personalDataAgree = newVal.personalDataAgree;
            this.password = newVal.password;
        }
    },
    template:
        '<div>'+
            '<modal v-if="showModal" @close="$root.showModal = false">'+
                '<h3 slot="header">{{this.$root.modalHeader}}</h3>'+
                '<div slot="modalGreeting">{{this.$root.modalGreeting}}</div>'+
                '<div slot="body">{{this.$root.modalBody}}</div>'+
            '</modal>'+
        '<div>'+
            '<h1>Регистрация участника</h1>'+
        '</div>'+
        '<div class="card">'+
            '<h5 class="card-header">{{this.user.firstname}} {{this.user.secname}} {{this.user.lastname}}</h5>'+
            '<div class="card-body">'+
                '<form>'+
                    '<div class="form-row">'+
                        '<div class="form-group col-md-4">'+
                            '<label for="firstname">Имя</label>'+
                                '<div class="input-group rounded">'+
                                    '<input type="text" class="form-control" id="firstname" v-model="firstname" placeholder="Имя" :maxlength="30">'+
                                    '<div v-show="firstname.length>0" class="input-group-prepend">' +
                                        '<div class="input-group-text" v-text="30 - firstname.length">@</div>' +
                                    '</div>'+
                                '</div>'+
                                '<p class="alert alert-danger" v-show ="$root.userFirstnameAlert">Укажите Имя!</p>'+
                        '</div>'+
                        '<div class="form-group col-md-4">'+
                            '<label for="lastname">Фамилия</label>'+
                            '<div class="input-group">'+
                                '<input type="text" class="form-control" id="lastname" v-model="lastname" placeholder="Фамилия" :maxlength="30">'+
                                    '<div v-show="lastname.length>0" class="input-group-prepend">' +
                                        '<div class="input-group-text" v-text="30 - lastname.length">@</div>' +
                                    '</div>'+
                                '</div>'+
                                '<p class="alert alert-danger" v-show ="$root.userLastnameAlert">Укажите Фамилию!</p>'+
                        '</div>'+
                        '<div class="form-group col-md-4">'+
                            '<label for="secname">Отчество</label>'+
                            '<div class="input-group">'+
                                '<input type="text" class="form-control" id="secname" v-model="secname" placeholder="Отчество" :maxlength="30">'+
                                    '<div v-show="secname.length>0" class="input-group-prepend">' +
                                        '<div class="input-group-text" v-text="30 - secname.length">@</div>' +
                                    '</div>'+
                                '</div>'+
                                '<p class="alert alert-danger" v-show ="$root.userSecnameAlert">Укажите Отчество!</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="form-row">'+
                        '<div class="form-group col-md-6">'+
                            '<label for="organization">Организация</label>'+
                            '<div class="input-group">'+
                                '<input type="text" class="form-control" id="organization" v-model="organization" placeholder="Организация" :maxlength="130">'+
                                '<div v-show="organization.length>0" class="input-group-prepend">' +
                                    '<div class="input-group-text" v-text="130 - organization.length">@</div>' +
                                '</div>'+
                            '</div>'+
                            '<p class="alert alert-danger" v-show ="$root.userOrganizationAlert">Укажите Организацию!</p>'+
                        '</div>'+
                        '<div class="form-group col-md-6">'+
                            '<label for="degree">Ученая степень, ученое звание, должность</label>'+
                            '<div class="input-group">'+
                                '<input type="text" class="form-control" id="degree" v-model="degree" placeholder="Ученая степень, ученое звание, должность" :maxlength="130">'+
                                '<div v-show="degree.length>0" class="input-group-prepend">' +
                                        '<div class="input-group-text" v-text="130 - degree.length">@</div>' +
                                '</div>'+
                            '</div>'+
                            '<p class="alert alert-danger" v-show ="$root.degreeAlert">Необходимо указать ученая степень, ученое звание или должность!</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="form-row">'+
                        '<div class="form-group col-md-12">'+
                            '<label for="organizationPostAddress">Почтовый адрес организации(с указанием страны, субъекта)</label>'+
                                '<div class="input-group">'+
                                    '<input type="text" class="form-control" id="organizationPostAddress" v-model="organizationPostAddress" placeholder="Почтовый адрес организации(с указанием страны, субъекта)" :maxlength="130">'+
                                    '<div v-show="organizationPostAddress.length>0" class="input-group-prepend">' +
                                        '<div class="input-group-text" v-text="130 - organizationPostAddress.length">@</div>' +
                                    '</div>'+
                                '</div>'+
                                '<p class="alert alert-danger" v-show ="$root.organizationPostAddressAlert">Укажите почтовый адрес организации!</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="form-row">'+
                        '<div class="form-group col-md-6">'+
                            '<label for="userEmail">Email</label>'+
                            '<div class="input-group">'+
                                '<input type="email" class="form-control" id="userEmail" v-model="userEmail" placeholder="Email" :maxlength="30">'+
                                    '<div v-show="userEmail.length>0" class="input-group-prepend">' +
                                        '<div class="input-group-text" v-text="30 - userEmail.length">@</div>' +
                                    '</div>'+
                            '</div>'+
                            '<p class="alert alert-danger" v-show ="$root.userEmailAlert">Укажите Email!</p>'+
                            '<p class="alert alert-danger" v-show ="(($root.invalidEmail)&&($root.userEmailAlert==false))">Укажите валидный Email!</p>'+
                        '</div>'+
                        '<div class="form-group col-md-6">'+
                            '<label for="phoneNumber">Контактный телефон в международном формате</label>'+
                            '<input type="text" class="form-control" id="phoneNumber" v-model="phoneNumber" placeholder="+7XXXXXXXXXX" :maxlength="16">'+
                            '<p class="alert alert-danger" v-show ="$root.userPhoneNumberAlert">Необходимо указать контактный телефон в международном формате!</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="form-row">'+
                        '<div  class="form-group col-md-6">'+
                            '<label for="custom-control custom-checkbox">Даю согласие на обработку персональных данных</label>'+
                            '<div class="custom-control custom-checkbox">' +
                                '<b-form-checkbox type="checkbox" class="form-check-input" id="personalDataAgree"  v-model="personalDataAgree" switch></b-form-checkbox>'+
                                '<p class="alert alert-danger" v-show ="$root.personalDataAgreeAlert">Небходимо дать согласие на обработку персональных данных!</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+

                        '<div class="form-group row">'+
                            '<div class="col-sm-10">'+
                                '<input v-if="($root.editClicked == false)" type="button"  class="btn btn-primary " value="Зарегистрироваться" @click="save"/>'+
                            '</div>'+
                        '</div>'+
                '</form>'+
        '</div>'+
        '</div>'+
        '</div>',

    methods: {
        save: function () {

            this.password = makePassword(10);
            //alert("пароль сгенерирован автоматичеки: " + this.password);

            var user = {
                firstname: capitalizeFirstLetter(this.firstname),
                lastname: capitalizeFirstLetter(this.lastname),
                secname: capitalizeFirstLetter(this.secname),
                organization: capitalizeFirstLetter(this.organization),
                degree: capitalizeFirstLetter(this.degree),
                organizationPostAddress: capitalizeFirstLetter(this.organizationPostAddress),
                userEmail: this.userEmail,
                phoneNumber: this.phoneNumber,
                personalDataAgree: this.personalDataAgree,
                password: this.password,
            };


            if (is_empty(this.firstname)) {
                this.$root.userFirstnameAlert = true;
            } else this.$root.userFirstnameAlert = false;

            if (is_empty(this.lastname)) {
                this.$root.userLastnameAlert = true;
            } else this.$root.userLastnameAlert = false;

            if (is_empty(this.secname)) {
                this.$root.userSecnameAlert = true;
            } else this.$root.userSecnameAlert = false;

            if (is_empty(this.organization)) {
                this.$root.userOrganizationAlert = true;
            } else this.$root.userOrganizationAlert = false;

            if (is_empty(this.degree)) {
                this.$root.degreeAlert = true;
            } else this.$root.degreeAlert = false;

            if (is_empty(this.organizationPostAddress)) {
                this.$root.organizationPostAddressAlert = true;
            } else this.$root.organizationPostAddressAlert = false;

            if (is_empty(this.userEmail)) {
                this.$root.userEmailAlert = true;
            } else this.$root.userEmailAlert = false;

            if (is_empty(this.phoneNumber)) {
                this.$root.userPhoneNumberAlert = true;
            } else this.$root.userPhoneNumberAlert = false;

            if (!this.personalDataAgree) {
                this.$root.personalDataAgreeAlert = true;
            } else this.$root.personalDataAgreeAlert = false;

            if (validateEmail(this.userEmail)) {
                this.$root.invalidEmail = false
            } else {
                this.$root.invalidEmail = true;
            }

            if ((!this.$root.userFirstnameAlert) &&
                (!this.$root.userLastnameAlert) &&
                (!this.$root.userSecnameAlert) &&
                (!this.$root.userOrganizationAlert) &&
                (!this.$root.degreeAlert) &&
                (!this.$root.organizationPostAddressAlert) &&
                (!this.$root.userEmailAlert) &&
                (!this.$root.userPhoneNumberAlert) &&
                (!this.$root.personalDataAgreeAlert) &&
                (!this.$root.invalidEmail)
            ) {
                this.$root.showModal=true;
                this.$root.modalHeader='Регистрация участия в конференции';
                this.$root.modalGreeting =this.firstname+' '+this.secname+' '+this.lastname+', Вы успешно зарегистрированы в качестве участника конференции! ';
                this.$root.modalBody= 'На указанный Вами ' +
                    'адрес электронной почты отправлено письмо, содержащее ссылку для подтверждения регистрации, логин и пароль для входа' +
                    ' в систему. ' +
                    'После подтверждения регистрации Вы cможете войти в систему и заявить материалы для участия в конференции, ' +
                    'а так же отлеживать статус рассмотрения Ваших заявок. ';
                this.$root.modalFooter='ИГМУ 2019';

                userApi.save({}, user);

                this.id=''
                this.firstname =''
                this.lastname = ''
                this.secname = ''
                this.organization = ''
                this.degree = ''
                this.organizationPostAddress = ''
                this.userEmail = ''
                this.phoneNumber = ''
                this.personalDataAgree = ''
                this.password = ''
            }
        },
    }

});


Vue.component('user-row' , {
    props: ['user', 'editMethod', 'users'],
    template:
        '<tr>'+
            '<div class="card">'+
                '<div class="card-header">{{user.firstname}} {{user.secname}} {{user.lastname}}</div>'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">Основные данные о пользователе:</h5>'+
                        '<ul class="list-group list-group-flush">'+
                            '<li class="list-group-item"><b>Ученая степень, ученое звание, должность:</b> {{user.degree}}</li>'+
                            '<li class="list-group-item"><b>Организация:</b> {{user.organization}}</li>'+
                            '<li class="list-group-item"><b>Адресс рганизации:</b> {{user.organizationPostAddress}}</li>'+
                            '<li class="list-group-item"><b>Электронная почта:</b> {{user.userEmail}}</li>'+
                            '<li class="list-group-item"><b>Телефон:</b> {{user.phoneNumber}}</li>'+
                        '</ul>'+
                    '</div>'+
                '<input type = "button" style="margin: 5px;" v-on:click="$root.editClicked = true" class="btn btn-primary" value="Изменить" @click="edit" />' +
                '<input type = "button" style="margin: 5px;" class="btn btn-danger" value="X" @click="del" />'+
                '</div>'+
            '</div>'+

        '</tr>',
    methods: {
        edit: function(){
            this.editMethod(this.user);
        },
        del: function() {
            if (this.$root.editClicked == true) {
                alert("Пееред удалением необходимо завершить редактирование!");
            } else {
                userApi.remove({id: this.users.id}).then(result => {
                    if (result.ok) { this.users.splice(this.users.indexOf(this.user), 1) }
            })
            }

        }
    }

});

Vue.component('users-list', {
    props: ['users', 'desks'],
    data: function(){
        return {
            user: null
        }
    },

    template:
        ' <div style="position: relative;">'+
            '<user-form :users="users"  :userAttr="user" :desks="desks"/>'+
                '<div v-show="this.$root.editClicked == false" class="card" style="margin: 15px;">'+
                    '<h5 class="card-header">Пользователи системы</h5>'+
                    '<div class="card-body">'+
                        '<table class="table">'+
                            '<tbody>'+
                                '<tezis-row v-for="user in users" :key="user.id" :user = "user" ' +
                                ':editMethod="editMethod" :users="users"/>' +
                            '</tbody>' +
                        '</table>' +
                    '</div>'+
                '</div>'+
        '</div>',

    methods: {
        editMethod: function(user){
            this.user = user;
        },
    }

});



var app;

app = new Vue({
    el: '#app',
    template:
        '<div>'+
        '<user-form :userAttr="user"  :showModal="showModal"/>' +

        '</div>',
    data: {
        user:[],
        editClicked:false,
        userFirstnameAlert:false,
        userLastnameAlert:false,
        userSecnameAlert:false,
        userOrganizationAlert:false,
        degreeAlert:false,
        organizationPostAddressAlert:false,
        userEmailAlert:false,
        userPhoneNumberAlert:false,
        personalDataAgreeAlert:false,
        invalidEmail:false,
        userExistAlert:false,
        userGroupNameAler:false,
        showModal: false,
    },


});

Vue.component('modal', {
    template: '#modal-template'
})

