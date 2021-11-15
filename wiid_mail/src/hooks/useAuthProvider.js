import { useState } from "react";
function useAuthProvider(){
    const [logado, setLogado] =  useState(false);
    const [tree, setTree] =  useState([]);

return{
    logado,
    setLogado,
    tree,
    setTree
}
}

export default useAuthProvider;