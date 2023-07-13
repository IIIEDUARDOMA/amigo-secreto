import { useState } from 'react';
import { useListaParticipante } from '../components/state/hooks/useListaParticipante';
import { useResultadoSorteio } from '../components/state/hooks/useResultadoSorteio';
import Card from '../components/Card';

import './Sorteio.css';

const Sorteio = () => {
  const participantes = useListaParticipante();

  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
      setTimeout(() => {
        setAmigoSecreto('');
      }, 3000);
    }
  };

  return (
    <Card>
      <section className="sorteio">
        <h2>Quem vai triar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          <button className="botao-sortear">Sortear</button>
        </form>
        {amigoSecreto && (
          <p className="resultado" role="alert">
            {amigoSecreto}
          </p>
        )}
        <footer className="sorteio">
          <img
            src="/imagens/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
