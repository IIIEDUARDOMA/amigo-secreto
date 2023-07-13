import { fireEvent, render, screen } from '@testing-library/react';
import { useListaParticipante } from '../components/state/hooks/useListaParticipante';
import { RecoilRoot } from 'recoil';
import Sorteio from './Sorteio';
import { useResultadoSorteio } from '../components/state/hooks/useResultadoSorteio';

jest.mock('../components/state/hooks/useListaParticipante', () => {
  return {
    useListaParticipante: jest.fn(),
  };
});
jest.mock('../components/state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe('na pagina de sorteio', () => {
  const participantes = ['Ana', 'Catearina', 'Josefina'];
  const resultado = new Map([
    ['Ana', 'Josefina'],
    ['Josefina', 'Catarina'],
    ['Catarina', 'Ana'],
  ]);

  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test('todos os participantes podem exibir seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const opcoes = screen.queryAllByRole('option');
    expect(opcoes).toHaveLength(8);
  });
  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const botao = screen.getByRole('button');
    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();
  });
});
