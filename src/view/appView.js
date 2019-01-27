define(['backbone', 'collection/contactList', 'view/contactView'], function(Backbone, ContactList, ContactView){


    window.list = new ContactList();

    var AppView = Backbone.View.extend({
        el: $('body'),
        events: {
            'click #add': 'save'
        },
        initialize: function(){
            this.name = this.$('#name');
            this.phone = this.$('#phone');
            this.list = this.$('#contact-list');

            _.bindAll(this, 'render', 'add', 'loadList', 'save');

            list.bind('add', this.add);

            list.bind('refresh', this.loadList);

            list.fetch();
        },

        add: function(model){
            var view = new ContactView({
                model: model
            });

            this.list.append(view.render().el);

            var s = '';
        },

        loadList: function(){
            list.each(this.add);
        },
        save: function(){
            var name = this.name.val();
            var phone = this.phone.val();
            list.create({
                name: name,
                phone: phone
            });
            this.name.val('');
            this.phone.val('');
        }
    });


    return AppView;

});