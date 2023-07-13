import { realizarSorteio } from './realizarSorteio';

describe('Dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie seu nome', () => {
    const participantes = [
      'Ana',
      'Catarina',
      'Josefina',
      'João',
      'Vinicios',
      'Eduardo',
    ];

    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
