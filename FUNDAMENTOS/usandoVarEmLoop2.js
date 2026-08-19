const funct = []

for (var i = 0; i < 10; i++) {
    funct.push(function() {
       console.log(i)
    })
}

funct[2]()
funct[8]()