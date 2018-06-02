Vue.component('vue-container', {
    template: '<div class="ui container raised segment vue-container"><slot> </slot></div>'

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
