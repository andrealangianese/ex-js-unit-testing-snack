// snack 1 
function getInitials(fullname) {
    const [nome, cognome] = fullname.split(' ')
    return `${nome.charAt(0).toLowerCase()} - ${cognome.charAt(0).toLowerCase()}`
}

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('andrea langianese')).toBe('a - l')
})
// snack 2

test('La funzione createSlug restituisce una stringa in lowercase', () => {

})
// snack 3 

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {

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
