import { act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

describe('o comportamento do Formulario.tsx', () => {
  test('Quando o input esta vazio, novos participantes não podem ser inseridos', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    //encontrar o botão
    const botao = screen.getByRole('button');
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test('adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    //clicar no botao submeter
    fireEvent.click(botao);
    //garantir que o input esteja com foco ativo
    expect(input).toHaveFocus();
    //garantir que o inputnão tenha um valor
    expect(input).toHaveValue('');
  });

  test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(botao);
    const mensagemErro = screen.getByRole('alert');
    expect(mensagemErro.textContent).toBe(
      'Nomes duplicados não são permitidos!'
    );
  });

  test('a mensagem de erro deve sumir após os timers', () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(botao);

    let mensagemErro = screen.queryByRole('alert');
    expect(mensagemErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemErro = screen.queryByRole('alert');
    expect(mensagemErro).toBeNull();
  });
});
