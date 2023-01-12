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
export async function findGamesByParams() {
    const response = await fetch(`https://rawg.io/api/games${parameter}?token&key=${process.env.REACT_APP_APIKEY}`)
    if (!response.ok) {
        const data = await response.json()
        return data
    }
}




// --- CHEAPSHARK ---
