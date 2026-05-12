function getInitials(fullname) {
    const [nome, cognome] = fullname.split(' ')
    return `${nome.charAt(0).toLowerCase()} - ${cognome.charAt(0).toLowerCase()}`
}

const createSlug = frase => {
    if (!frase) {
        throw new Error('errore non puoi passare una stringa vuota')
    }
    return frase.trim().toLowerCase().replaceAll(' ', '-')
}

function average(numeri) {
    return numeri.reduce((acc, num) => acc + num, 0) / numeri.length
}

function isPalindrome(word) {
    const inverseWord = word.split('').reverse().join('')
    return inverseWord === word
}
const posts = [
    { id: 1, nome: 'andrea', slug: 'grandefilosofo' },
    { id: 2, nome: 'mario', slug: 'grandestorico' }
]

function findPostById(posts, id) {

    if (typeof id !== 'number') {
        throw new Error(`${id} non è un id`)
    }

    const isDataValid = posts.every(post =>
        'id' in post && 'nome' in post && 'slug' in post
    );

    if (!isDataValid) {
        throw new Error('Struttura dati dei post non valida');
    }

    return posts.find(p => p.id === id) || null;
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById };