const validateInput = require('./input-middleware')

const constraints = [
    { params: 'name', dataType: 'string' },
    { params: 'state', dataType: 'string' },
    { params: 'country', dataType: 'string' },
]


module.exports = {
    validateInputs: validateInput(constraints)
}