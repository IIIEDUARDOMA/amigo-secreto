import { useNavigate } from 'react-router-dom';
import { useListaParticipante } from '../state/hooks/useListaParticipante';

import './Rodape.css';
import { useSorteador } from '../state/hooks/useSorteador';

const Rodape = () => {
  const participantes = useListaParticipante();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara('/sorteio');
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacola de compras" />
    </footer>
  );
};

export default Rodape;
