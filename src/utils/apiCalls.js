



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
    const response = await fetch('http://localhost:3001/anticipated')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

//SAMPLE SIZES
export async function findRecentlyReleasedSample() {
    const response = await fetch('http://localhost:3001/recently_released_sample')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function findAnticipatedSample() {
    const response = await fetch('http://localhost:3001/anticipated_sample')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function findGameGenre(options) {
    const response = await fetch('http://localhost:3001/genre', options)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}