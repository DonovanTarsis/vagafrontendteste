import { useState } from "react";
function useAuthProvider() {
    const [logado, setLogado] = useState(false);
    const [tree, setTree] = useState([]);
    const [chats, setChats] = useState([]);
    const [selecteds, setSelecteds] = useState([]);
    const [selectedAll, setSelectedAll] = useState(false);
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
        setSelectedAll
    }
}

export default useAuthProvider;