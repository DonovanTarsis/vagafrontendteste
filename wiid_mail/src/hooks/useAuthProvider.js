import { useState } from "react";
function useAuthProvider() {
    const [logado, setLogado] = useState(false);
    const [tree, setTree] = useState([]);
    const [chats, setChats] = useState([]);
    const [selecteds, setSelecteds] = useState([]);
    const [selectedAll, setSelectedAll] = useState(false);
    const [tema, setTema] = useState(false);
    const [backGround, setBackGround] = useState([]);
    const [boxShadow, setBoxShadow] = useState([]);
    const [fontPrimary, setFontPrimary] = useState([]);
    const [fontSecondary, setFontSecondary] = useState(false);
    const [arquivadas, setArquivadas] = useState([]);
    const [language, setLanguage] = useState({
        navigationSelectLabel: 'Novo',
        searchSelectLabel: 'Idioma',
        searchLabel: 'Pesquisar',
        toAssign: 'Atribuir',
        toFile: 'Arquivar',
        program: 'agendar',
        favorites: 'favoritos'
    })
    return {
        logado,
        setLogado,
        tree,
        setTree,
        chats,
        setChats,
        selecteds,
        setSelecteds,
        selectedAll,
        setSelectedAll,
        tema,
        setTema,
        backGround,
        setBackGround,
        boxShadow,
        setBoxShadow,
        fontPrimary,
        setFontPrimary,
        fontSecondary,
        setFontSecondary,
        arquivadas,
        setArquivadas,
        language, 
        setLanguage
    }
}

export default useAuthProvider;