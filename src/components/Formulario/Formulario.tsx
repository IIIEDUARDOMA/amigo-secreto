import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante';
import useMensagemErro from '../state/hooks/useMensagemErro';

import './styles.css';

const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemErro = useMensagemErro();

  const adicionarParticiante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  };
  return (
    <form onSubmit={adicionarParticiante}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemErro && <p role="alert">{mensagemErro}</p>}
    </form>
  );
};

export default Formulario;
