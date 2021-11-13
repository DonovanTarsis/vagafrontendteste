import { useState } from 'react';

function useAuthProvider() {
  const [logado, setLogado] = useState('');
  return {
    logado,
    setLogado,
  };
}

export default useAuthProvider;
