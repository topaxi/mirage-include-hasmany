export default function() {
  this.namespace = '/api/v1'

  this.get('/users')
  this.get('/users/:id')
}
