exports.NAME = 'MockSMS'
exports.SUPPORTED_MODULES = []

exports.config = function config () {}

exports.sendMessage = function sendMessage (rec) {
  console.log('Sending SMS: %j', rec)
  return Promise.resolve()
}
