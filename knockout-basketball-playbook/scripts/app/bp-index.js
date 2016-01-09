var data = [
    { Id: 1, Name: 'Ball Handling' },
    { Id: 2, Name: 'Passing' },
    { Id: 3, Name: 'Shooting' },
    { Id: 4, Name: 'Rebounding' },
    { Id: 5, Name: 'Transition' },
    { Id: 6, Name: 'Defense' },
    { Id: 7, Name: 'Team Offense' },
    { Id: 8, Name: 'Team Defense' }
];

var viewModel = {
    tags: ko.observableArray(data),
    tagToAdd: ko.observable(''),

    addTag: function () {
        this.tags.push({ Name: this.tagToAdd() });
        this.tagToAdd('');
    },

    editTag: function () {
    },

    deleteTag: function () {
        viewModel.tags.remove(this);
    }
};

ko.applyBindings(viewModel);