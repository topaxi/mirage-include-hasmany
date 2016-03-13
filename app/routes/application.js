import Route         from 'ember-route'
import injectService from 'ember-service/inject'

export default Route.extend({
  ajax: injectService(),

  model() {
    return this.get('ajax').request('/api/v1/users/?include=comments')
  }
})
