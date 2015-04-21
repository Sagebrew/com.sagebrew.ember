import DS from 'ember-data';

export default DS.Model.extend({
    content: DS.attr('string'),
    html_content: DS.attr('string'),
    href: DS.attr('string'),
    is_closed: DS.attr('boolean'),
    last_edited_on: DS.attr('date'),
    created: DS.attr('date'),
    upvotes: DS.attr('number'),
    downvotes: DS.attr('number'),
    vote_count: DS.attr('number'),
    vote_type: DS.attr('boolean'),
    view_count: DS.attr('number'),
    url: DS.attr('string')
});