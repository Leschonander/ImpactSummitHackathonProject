Vue.component('vue-container', {
    template: '<div class="ui container raised segment vue-container"><slot> </slot></div>'

});

Vue.component('id-card', {
    template: '<div class="ui secondary pointing menu id-container"> <a class= "item active"> ID </a>\
    <a class= "item"> Medications </a>\
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

/*
        <med-news-feed>
            <p slot="date">1 Week ago</p>
            <p slot="info">Lorem ipsum dolor sit amet</p>
        </med-news-feed>


                <med-news-feed>
            <p slot="date">Yesterday: &nbsp;&nbsp;</p>
            <p slot="info">Fizzbuzz FizzBuzz Fizzbuzz FizzBuzz</p>
        </med-news-feed>
*/



