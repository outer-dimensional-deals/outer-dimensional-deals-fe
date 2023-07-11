export async function searchGameCloud(options) {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/search_games', options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
}

export async function deleteData(options) {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app//delete_data', options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
}


export async function saveData(options) {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/save_data', options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
}

export async function displaySaved() {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/display_saved')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
}

export async function findFullGameGenre(options) {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/genre_full', options)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function listOfStores() {
    const response = await fetch('https://www.cheapshark.com/api/1.0/stores')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
};

export async function findRecentlyReleasedGames() {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/recently_released')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function findAnticipatedGames() {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/anticipated')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

//SAMPLE SIZES
export async function findRecentlyReleasedSample() {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/recently_released_sample')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function findAnticipatedSample() {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/anticipated_sample')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function findGameGenre(options) {
    const response = await fetch('https://outer-dimensional-deals-be.vercel.app/genre', options)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function findGameDeals(name) {
    const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?title=${name}`)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
}
