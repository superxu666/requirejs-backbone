define(['backbone'], function(Backbone){

    var Contact = Backbone.Model.extend({
        initialize: function(){
            this.bind('error', function(model, error){
                alert(error)
            });
        },
        validate: function(attr){
            if (attr.name.length == '') {
                return '格式错误';
            }
        }
    })

    return Contact;
});