import { useListaParticipante } from '../state/hooks/useListaParticipante';

const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipante();
  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
