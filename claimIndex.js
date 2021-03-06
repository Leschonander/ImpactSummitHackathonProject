Vue.component('vue-container', {
    template: '<div class="ui container raised segment vue-container">\
                <div class="ui icon button" data-content="User"><i class="user icon"></i></i></div>\
                <slot></slot>\
                <div class="ui labeled button vue-out" tabindex="0"><a class="ui basic label"> Log Out </a></div>\
                <div class="ui labeled button vue-out" tabindex="0"><a href="form.html" class="ui basic label"> Submit a Claim </a></div>\
                </div>'

});

Vue.component('claim-feed', {
    template: '<div class="ui message claimFeed"> \
        <div class="header"> <slot name="head"> </slot> </div>\
        <p> <slot name="info"> </slot> </p> </div>' 

});


let vm1 = new Vue({
    el: '#app',
    data: {

    }
});
