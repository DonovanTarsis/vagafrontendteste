import { useState } from "react";
function useAuthProvider(){
    const [logado, setLogado] =  useState(false);
    const [tree, setTree] =  useState([]);
    const [chats, setChats] =  useState([]);
return{
    logado,
    setLogado,
    tree,
    setTree,
    chats, 
    setChats
}
}

export default useAuthProvider;