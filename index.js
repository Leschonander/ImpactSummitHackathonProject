Vue.component('vue-container', {
    template: '<div class="ui container raised segment vue-container">\
                <div class="ui icon button" data-content="User"><i class="user icon"></i></i></div>\
                <slot></slot>\
                <div class="ui labeled button vue-out" tabindex="0"><a class="ui basic label"> Log Out </a></div>\
                <div class="ui labeled button vue-out" tabindex="0"><a href="form.html" class="ui basic label"> Submit a Claim </a></div>\
                </div>'

});

Vue.component('id-card', {
    template: '<div class="ui secondary pointing menu id-container"> <a class= "item active"> ID </a>\
    <a class= "item"> Insurances </a>\
    <div class="ui segment"><slot> </slot></div> </div>'
});


Vue.component('med-news-feed', {
    template: '<div class="ui feed raised segment feed-container"> <div class="event">\
                    <div class="label"> </div>\
                    <div class="content"><div class="date"> <slot name="date"> </slot> </div></div>\
                    <div class="summary"> <slot name="info"> </slot> </div>\
                </div></div>'
})
// Can use <i class="fas fa-briefcase-medical"></i> into Vue Components 


let vm1 = new Vue({
    el: '#app',
    data: {

    }
});




