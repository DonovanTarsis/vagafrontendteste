const ptBr = {
    navigationSelectLabel: 'Novo',
    searchSelectLabel: 'Idioma',
    searchLabel: 'Pesquisar',
    toAssign: 'Atribuir',
    toFile: 'Arquivar',
    program: 'agendar',
    favorites: 'favoritos'
}

const en = {
    navigationSelectLabel: 'New',
    searchSelectLabel: 'Language',
    searchLabel: 'Search',
    toAssign: 'Assign',
    toFile: 'To File',
    program: 'Program',
    favorites: 'favorites'
}

function setDictionary (language, callback) {
    if(language === 'ptbr'){
        callback(ptBr)
    }else if(language === 'en'){
        callback(en)
    }
}

export default setDictionary;