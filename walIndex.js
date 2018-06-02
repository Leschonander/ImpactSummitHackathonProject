Vue.component('vue-container', {
    template: '<div class="ui container raised segment vue-container">\
                <div class="ui icon button" data-content="User"><i class="user icon"></i></i></div>\
                <slot></slot>\
                <div class="ui labeled button vue-out" tabindex="0"><a class="ui basic label"> Log Out </a></div>\
                <div class="ui labeled button vue-out" tabindex="0"><a href="form.html" class="ui basic label"> Submit a Claim </a></div>\
                </div>'

});

Vue.component('vue-wallet', {
    template: '<div class="ui top attached tabular menu">\
                <a class="active item"> Transactions </a><a class="item"> Notifications </a>\
                <div class="right menu">\
                    <div class="ui labeled button"><p class="ui basic label"> <i class="ethereum icon"></i> 1000 USD Balance : 2 Ether </p> </div>\
                    <div class="ui labeled button vue-pay" tabindex="0"><a class="ui basic label"> Pay </a></div>\
                    <div class="ui labeled button vue-pay" tabindex="0"><a class="ui basic label"> Receive </a></div>\
                </div>'
})

Vue.component('vue-history', {
    template: '<div class="ui bottom attached segment"> \
                <div class="ui raised segment">  <p><i class="plus icon"></i> 500$ : 1 Ether &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1000 USD Balance : 2 Ether </p>  </div> \
                <div class="ui raised segment">  <p><i class="minus icon"></i> 1000$ : 2 Ether &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 500 USD Balance : 2 Ether </p>  </div>\
                <div class="ui raised segment">  <p><i class="plus icon"></i> 250$ :  &nbsp; .5 Ether &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1500 USD Balance : 2 Ether </p>  </div>\
                </div> '
})


let vm1 = new Vue({
    el: '#app',
    data: {

    }
});