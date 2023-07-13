import Card from '../components/Card';
import Formulario from '../components/Formulario/Formulario';
import ListaParticipantes from '../components/ListaDeParticipantes/ListaParticipantes';
import Rodape from '../components/Rodape/Rodape';

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
