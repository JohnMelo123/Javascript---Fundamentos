function Pessoa () {
    this.idade = 0

    setInterval(() => {   // O "this" não varia com a Arrow Function
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa