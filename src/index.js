const { json, send } = require('micro')

// const { handleErrors, createError } = require('micro-boom')
//
// const handler = async (req, res) => {
//
//   // Parsing the body / payload of a request
//   const person = await json(req)
//   console.log(person)
//
//   return send(res, 200, {
//     message: `Hello, World! ^.^`,
//     isAwesome: true,
//   })
// }
//
//
//
// module.exports = handleErrors(handler)
// module.exports = handler

// /*
//   - No curly brackets
//   - Object notation with ({})
//
//  */
// module.exports = async (req, res) =>
//   send(res, 200, {
//     message: `Hello, World! ^.^`,
//     isAwesome: true,
//   })

// Stats work
// const track = require('micro-stats')
// const handler = async () => 'Hello, World! @@'
// module.exports = track(handler)

// MicroRouter
const { router, get, post } = require('microrouter')

const hello = async (req, res) =>
  send(res, 200, await Promise.resolve({ message: `Hello ${req.params.who}` }))

module.exports = router(
  get('/', async (req, res) => send(res, 200, { '/hello/:who': { who: { type: 'string', required: true } } })),
  get('/users', async (req, res) => send(res, 200, [])),
  post('/users', async (req, res) => {
    const user = await json(req) // Convert the payload to an object
    return send(res, 201, [user])

  }),
  get('/hello/:who', hello),
)

// module.exports = async () => {
//   return 'Hello, world'
// }
