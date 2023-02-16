



export async function listOfStores() {
    const response = await fetch('https://www.cheapshark.com/api/1.0/stores')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
};


// EXPRESS API I MADE

export async function findRecentlyReleasedGames() {
    const response = await fetch('http://localhost:3001/recently_released')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function findAnticipatedGames() {
    const response = await fetch('http://localhost:3001/ancticipated')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}
