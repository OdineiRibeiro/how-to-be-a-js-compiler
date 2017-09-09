// Lexer function

function lexer (code){
  return code.split(/\s+/)
             .filter(function(t) { return t.length > 0 })
             .map(function(t) {
               return isNaN(t)
                ? { type: 'word', value: t }
                : { type: 'number', value: t }
             })
}

function parser (tokens) {
  var AST = {
    type: 'Drawing',
    body: []
  }

  while (tokens.length > 0) {
    var current_token = tokens.shift()
    if (current_token.type === 'word') {
      switch (current_token.value) {
        case 'Paper':
          var expression = {
            type: 'CallExpression',
            name: 'Paper',
            arguments: []
          }

          var argument = tokens.shift()

          if (argument.type === 'number') {
            expression.arguments.push({
              type:  'NumberLiteral',
              value:  argument.value
            })
            AST.body.push(expression)
          } else {
            throw 'Papper command must be followed by a number'
          }
          break
          case 'Pen' :

          case 'Line' :
        default:

      }
    }
  }

  return AST
}
