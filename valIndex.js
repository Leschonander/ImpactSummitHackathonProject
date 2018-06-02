Vue.component('vue-container', {
    template: '<div class="ui container raised segment vue-container">\
                <div class="ui icon button" data-content="Pool Member"><i class="fas fa-users"></i></i></div>\
                <div class="ui icon button" data-content="Institutional Member of Pool"><i class="fas fa-hospital"></div>\
                <div class="ui icon button" data-content="Doctoral Member of Pool"><i class="fas fa-user-md"></i></div>\
                <slot></slot></div>'

});

Vue.component('vue-individual', {
    template: '<div class="ui card"> \
    <div class="image"> <slot name="image"> </slot> </div>\
    <div class="content"> <a class="header"><slot name="name"> </slot></a> <div class="meta"> <span class="date"> <slot name="data"> </slot> </span  </div></div>\
    <div class="description"> <slot name= "info"> </slot> </div> </div>\
    </div>'
})
// <img src="/images/avatar2/large/kristy.png"> 
//<i class="fas fa-users"></i>  Can add to templete but better to specify
Vue.component('val-group', {
    template: '<div class="ui four column doubling stackable grid container"> \
                    <div class="column"><slot name= "A"> </slot></div>\
                    <div class="column"><slot name= "B"> </slot></div>\
                    <div class="column"><slot name= "C"> </slot></div>\
                    <div class="column"><slot name= "D"> </slot></div>\
                    </div>'
})

let vm1 = new Vue({
    el: '#app',
    data: {

    }
});




