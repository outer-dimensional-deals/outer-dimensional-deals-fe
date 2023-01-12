// --- RAWG.IO ---
// THIS IS A WORK IN PROGRESS IT CAN BE REFACTORED



//--SEARCH SPECIFIC--
//++GAME TITLE++
export async function findGameByTitle(slug) {
    const response = await fetch(`https://rawg.io/api/games?search=${slug}?token&key=${process.env.REACT_APP_APIKEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
}
//++GAME ID++
export async function findGameById(gameID) {
    const response = await fetch(`https://rawg.io/api/games/${gameID}?token&key=${process.env.REACT_APP_APIKEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
}
//--SEARCH PARAMETERS CUSTOMIZATION--
//++GAME LIST++
//Need To Build a custom Hook for query parameters
export async function findGameByFilters() {
    const response = await fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_APIKEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data
};
//--GAME DETAILS---
//++DLC++
export async function findGameDlc() {
    const response = await fetch(`https://rawg.io/api/games/${id}/additions?token&key=${process.env.REACT_APP_APIKEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data
};
//++TRAILERS++
export async function findGameTrailers() {
    const response = await fetch(`https://rawg.io/api/games/${id}/movies?token&key=${process.env.REACT_APP_APIKEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data
};
//++STORES++
export async function findGameSellers() {
    const response = await fetch(`https://rawg.io/api/games/${id}/stores?token&key=${process.env.REACT_APP_APIKEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data
};



// --- CHEAPSHARK ---
