// snack 1 
function getInitials(fullname) {
    const [nome, cognome] = fullname.split(' ')
    return `${nome.charAt(0).toLowerCase()} - ${cognome.charAt(0).toLowerCase()}`
}

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('andrea langianese')).toBe('a - l')
})
// snack 2
const createSlug = frase => frase.toLowerCase()

test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('CIAO BELLA')).toBe('ciao bella')
})
// snack 3 
function average(numeri) {
    return numeri.reduce((acc, num) => acc + num, 0) / numeri.length
}

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([60, 40])).toBe(50)
})
// snack 4 

test('La funzione createSlug sostituisce gli spazi con -', () => {

})
// snack 5 

test('La funzione isPalindrome verifica se una stringa è un palindromo."', () => {

})
// snack 6 

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {

})
// snack 7 

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {

})
