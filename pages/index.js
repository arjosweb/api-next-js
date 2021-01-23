import { useState } from 'react';

function Home() {
    return <div>Olá Mundo!</div>
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
}

export default Home