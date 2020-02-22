function renderSearch (str , saveCharacters){
    const arr = [];
    str.map(string => saveCharacters.map((character, index) => {
        if (character.search(string) === 0) {
            return arr.push(character)
        }
        return arr
    })
    )
    return arr
}

export default renderSearch;