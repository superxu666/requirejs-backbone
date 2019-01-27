define(['model/contact', 'bl'], function(Contact){
    var ContactList = Backbone.Collection.extend({
        model: Contact,
        localStorage: new Store('contacts') // 所有信息保存到contacts空间，注意此次用到了本地存储的东西
    });

    return ContactList;
})