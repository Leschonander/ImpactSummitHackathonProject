Vue.component('vue-container', {
    template: '<div class="ui container raised segment vue-container">\
                <div class="ui icon button" data-content="Pool Member"><i class="fas fa-users"></i></i></div>\
                <div class="ui icon button" data-content="Institutional Member of Pool"><i class="fas fa-hospital"></i></div>\
                <div class="ui icon button" data-content="Doctoral Member of Pool"><i class="fas fa-user-md"></i></div>\
                <div class="ui icon button" data-content="User"><i class="user icon"></i></i></div>\
                <slot></slot>\
                <div class="ui labeled button vue-out" tabindex="0"><a class="ui basic label"> Log Out </a></div>\
                <div class="ui labeled button vue-out" tabindex="0"><a href="form.html" class="ui basic label"> Submit a Claim </a></div>\
                </div>'

});

Vue.component('vue-form', {
    template: '<form class="ui form"> \
    <div class="field"> <label>Date</label> <input type="date" name="" placeholder="01/03/2009"> </div>\
    </div>'
});


let vm1 = new Vue({
    el: '#app',
    data: {

    }
});