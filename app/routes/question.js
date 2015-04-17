import Ember from "ember";

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('question', params.question_object_uuid);
	},
    serialize: function(model) {
    // this will make the URL `/posts/foo-post`
    return { question_object_uuid: model.get('object_uuid') };
  }
});