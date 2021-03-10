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

var groupApi = Vue.resource('/usergroup{/id}');

Vue.component('group-form', {
    props: ['groups', 'groupAttr'],
    data: function() {
        return {
            id:'',
            groupName:'',
            groupAnnotation:'',

        }
    },

    watch:{
        groupAttr: function(newVal, oldVal){
            this.id = newVal.id;
            this.groupName = newVal.groupName;
            this.groupAnnotation = newVal.groupAnnotation;
        }
    },
    template:
        '<div>'+
          '<h1>Группы пользователей</h1>'+
                '<form>'+
                        '<div class="form-group col-sm-10">'+
                            '<label for="groupName">Название группы пользователей</label>'+
                            '<input type="text" class="form-control" id="groupName" v-model="groupName" placeholder="Имя группы">'+
                            '<p class="alert alert-danger" v-show ="$root.userGroupNameAlert">Укажите название группы пользователей!</p>'+
                        '</div>'+
                        '<div class="form-group col-sm-10">'+
                            '<label for="groupAnnotation">Аннотация группы</label>'+
                            '<textarea type="text" class="form-control" id="groupAnnotation" v-model="groupAnnotation" placeholder="Анотация"></textarea>'+
                            '<p class="alert alert-danger" v-show ="$root.userGroupAnnotationAlert">Укажите краткую аннотацию группы пользователей!</p>'+
                        '</div>'+
                        '<div class="form-group col-sm-10">'+
                            '<input v-if="($root.editClicked == false)" type="button"  class="btn btn-primary " value="Создать" @click="save"/>'+
                            '<input v-if="($root.editClicked == true)" type="button"  class="btn btn-primary " value="Сохранить" @click="save"/>'+
                            '<input  type = "button" class="btn btn-success" value="Домой" @click="backToRoot"/>'+
                        '</div>'+
                '</form>'+
        '</div>',

    methods: {
        backToRoot: function(){
            window.location.href = '/';
        },

        save: function () {
            var group = {
                groupName: capitalizeFirstLetter(this.groupName),
                groupAnnotation: capitalizeFirstLetter(this.groupAnnotation),

            };


            if (is_empty(this.groupName)) {
                this.$root.userGroupNameAlert = true;
            } else this.$root.userGroupNameAlert = false;

            if (is_empty(this.groupAnnotation)) {
                this.$root.userGroupAnnotationAlert = true;
            } else this.$root.userGroupAnnotationAlert = false;


            if ((!this.$root.userGroupAnnotationAlert) &&
                (!this.$root.userGroupNameAlert)
            ) {

                if (this.id) {
                    this.$root.editClicked = false;
                    groupApi.update({id: this.id}, group).then(result =>
                        result.json().then(data => {
                            var index = getIndex(this.groups, data.id);
                            this.$root.editClicked = false;
                            this.groups.splice(index, 1, data);
                            this.id = ''
                            this.groupName = ''
                            this.groupAnnotation = ''})
                        )

                } else {
                    groupApi.save({}, group).then(result =>
                        result.json().then(data => {
                            this.groups.push(data);
                            this.groupName = ''
                            this.groupAnnotation = ''})
                        )
                }
            }
        }
    }
});

Vue.component('group-row' , {
    props: ['group', 'editMethod', 'groups'],
    template:
        '<tr>'+
            '<td width="10%" align="left">{{group.id}}</td>'+
            '<td width="26%" align="left">{{group.groupName}}</td>'+
            '<td width="30%" align="center">{{group.groupAnnotation}}</td>'+
            '<td width="34%" align="center">'+
                '<input type = "button" v-on:click="$root.editClicked = true" class="btn btn-primary" value="Изменить" @click="edit" />' +
                '<input type = "button"  class="btn btn-danger" value="X" @click="del" />'+
            '</td>'+
        '</tr>',
    methods: {
        edit: function(){
            this.editMethod(this.group);
        },
        del: function() {
            if (this.$root.editClicked == true) {
                alert("Пееред удалением необходимо завершить редактирование!");
            } else {
                groupApi.remove({id: this.group.id}).then(result => {
                    if (result.ok) { this.groups.splice(this.groups.indexOf(this.group), 1) }
                })
            }

        }
    }

});

Vue.component('groups-list', {
    props: ['groups'],
    data: function(){
        return {
            group: null
        }
    },

    template:
        ' <div style="position: relative;">'+

            '<group-form :groups="groups" :groupAttr="group"/>'+

                '<table class="table">'+
                    '<thead>'+
                        '<tr>'+
                            '<th width="10%" scope="col">id</th>'+
                            '<th width="26%" scope="col">Имя группы</th>'+
                            '<th width="30%" scope="col">Аннотация</th>'+
                            '<th width="34%" scope="col">Действие</th>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                        '<group-row v-for="group in groups" :key="group.id" :group = "group" ' +
                        ':editMethod="editMethod" :groups="groups"/>' +
                    '</tbody>' +
                '</table>' +
        '</div>',

    methods: {
        editMethod: function(group){
            this.group = group;
        },
    }

});

var app;

app = new Vue({
    el: '#app',
    template:
        '<div>'+
            '<groups-list :groups="groups" /> ' +
        '</div>',
    data: {
        groups: [],
        editClicked:false,
        userGroupNameAlert:false,
        userGroupAnnotationAlert:false,


    },

    created: function () {
        groupApi.get({id: this.$root.id}).then(result =>
                result.json().then(data =>
                    data.forEach(group => {this.groups.push(group);})
                )
         )

    },
});