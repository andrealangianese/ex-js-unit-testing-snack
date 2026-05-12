const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snack.js");

const posts = [
    { id: 1, nome: 'andrea', slug: 'grandefilosofo' },
    { id: 2, nome: 'mario', slug: 'grandestorico' }
]
// snack 1 

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('andrea langianese')).toBe('a - l')
})
// snack 2

test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('CIAO BELLA')).toBe('ciao-bella')
})
// snack 3 

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([60, 40])).toBe(50)
})
// snack 4 

test('La funzione createSlug sostituisce gli spazi con -', () => {
    expect(createSlug('ciao mi chiamo andrea')).toBe('ciao-mi-chiamo-andrea')
})
// snack 5 

test('La funzione isPalindrome verifica se una stringa è un palindromo."', () => {
    expect(isPalindrome('anna')).toBeTruthy()
    expect(isPalindrome('andrea')).toBeFalsy()
})
// snack 6 

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug('')).toThrow('errore non puoi passare una stringa vuota')
    expect(() => createSlug(undefined)).toThrow('errore non puoi passare una stringa vuota')
    expect(() => createSlug(null)).toThrow('errore non puoi passare una stringa vuota')
})
// snack 7 

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, nome: 'andrea', slug: 'grandefilosofo' })
    expect(findPostById(posts, 3)).toBe(null)
    expect(() => findPostById(posts, 'me')).toThrow('me non è un id')
})
