

export async function searchRawgApiByParams(parameter) {
    const response = await fetch(`https://rawg.io/api/${parameter}&token&key=6647bd5bf2e6433ea0c88ac36a77f01f`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
};

export async function listOfStores() {
    const response = await fetch('https://www.cheapshark.com/api/1.0/stores')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
};


