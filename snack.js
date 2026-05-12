function getInitials(fullname) {
    const [nome, cognome] = fullname.split(' ')
    return `${nome.charAt(0).toLowerCase()} - ${cognome.charAt(0).toLowerCase()}`
}

const createSlug = frase => frase.trim().toLowerCase().replaceAll(' ', '-')


function average(numeri) {
    return numeri.reduce((acc, num) => acc + num, 0) / numeri.length
}

module.exports = { getInitials, createSlug, average };