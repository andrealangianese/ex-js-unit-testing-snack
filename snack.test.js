const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snack.js");

const posts = [
    { id: 1, nome: 'andrea', slug: 'grandefilosofo' },
    { id: 2, nome: 'mario', slug: 'grandestorico' }
];


describe('Funzione getInitials', () => {
    test('restituisce le iniziali di un nome completo in formato "x - y"', () => {
        expect(getInitials('andrea langianese')).toBe('a - l');
    });
});

describe('Funzione createSlug', () => {
    test('restituisce una stringa in lowercase', () => {
        expect(createSlug('CIAO BELLA')).toBe('ciao-bella');
    });

    test('sostituisce correttamente gli spazi con il trattino (-)', () => {
        expect(createSlug('ciao mi chiamo andrea')).toBe('ciao-mi-chiamo-andrea');
    });

    test('lancia un errore se il titolo è vuoto, undefined o null', () => {
        const errorMsg = 'errore non puoi passare una stringa vuota';
        expect(() => createSlug('')).toThrow(errorMsg);
        expect(() => createSlug(undefined)).toThrow(errorMsg);
        expect(() => createSlug(null)).toThrow(errorMsg);
    });
});

describe('Funzione average', () => {
    test('calcola la media aritmetica corretta di un array di numeri', () => {
        expect(average([60, 40])).toBe(50);
        expect(average([10, 20, 30])).toBe(20);
    });
});

describe('Funzione isPalindrome', () => {
    test('verifica correttamente se una stringa è un palindromo', () => {
        expect(isPalindrome('anna')).toBeTruthy();
        expect(isPalindrome('andrea')).toBeFalsy();
    });
});

describe('Funzione findPostById', () => {
    test('restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 1)).toEqual({ id: 1, nome: 'andrea', slug: 'grandefilosofo' });
    });

    test('restituisce null se l’id non esiste nell’array', () => {
        expect(findPostById(posts, 3)).toBe(null);
    });

    test('lancia un errore specifico se l’id passato non è un numero', () => {
        // Nota: Assicurati che findPostById lanci esattamente questo messaggio
        expect(() => findPostById(posts, 'me')).toThrow('me non è un id');
    });
});