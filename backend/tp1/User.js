class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros //[]
        this.mascotas = mascotas //[]

    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascotas(name) {
        this.mascotas.push(name)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        })
    }
    getBookNames() {
        return this.libros.map(r => r.nombre)
    }
}

const user = new Usuario('agustin', 'diaz')

// agregar mascotas 
user.addMascotas('Perro')
user.addMascotas('Gato')

// Contar mascotas
console.log(user.countMascotas())

// Agregar libreo
user.addBook('pruebaNombre', 'PruebaAutor')
user.addBook('pruebaNombre2', 'PruebaAutor2')


// Listado
console.log(user.getBookNames())