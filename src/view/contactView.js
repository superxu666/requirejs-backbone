define(['backbone'], function(Backbone){
    var ContactView = Backbone.View.extend({
        tagName: 'li',
        template: _.template('<div><%= name %>：<%= phone %><a href="javascript:;" class="delete">[删除]</a></div>'),
        events: {
            'click .delete': 'destroy'
        },
        initialize: function(){
            _.bindAll(this, 'render', 'remove');
            this.model.bind('change', this.render);
            this.model.bind('destroy', this.remove);
        },
        render: function(){
            var html = this.template(this.model.toJSON());

            this.$el.html(html);

            return this;
        },
        destroy: function(){
            this.model.destroy();
        },
        remove: function(){
            this.$el.remove();
        }
    });

    return ContactView;
});