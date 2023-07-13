import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from './ListaParticipantes';
import { useListaParticipante } from '../state/hooks/useListaParticipante';

jest.mock('../state/hooks/useListaParticipante', () => {
  return {
    useListaParticipante: jest.fn(),
  };
});

describe('Uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue([]);
  });
  test('Deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('Uma lista preenchida de participantes', () => {
  const participantes = ['Ana', 'Catarina'];
  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue(participantes);
  });

  test('Deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participantes.length);
  });
});
