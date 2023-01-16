// --- RAWG.IO ---

//--GAME LIST & FILTERS--
    //++TITLE(string)++
    //++PAGE(int)++
    //++PAGE_SIZE(int)++
    //++SEARCH_PRECISE(boolean)++
    //++SEARCH_EXACT(boolean)++
    //++PARENT_PLATFORMS(string)++
    //++STORES(string)++
    //++DEVELOPERS(string)++
    //++PUBLISHERS(string)++
    //++GENRES(string)++
    //++TAGS(string)++
    //++CREATORS(string)++

//--GAME DETAILS---
    //++ID++
    //++DLC++
    //++TRAILERS++
    //++STORES++

export async function searchRawgApiByParams(parameter) {
    const response = await fetch(`https://rawg.io/api/${parameter}&token&key=${hidden}`)
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


// --- CHEAPSHARK ---
