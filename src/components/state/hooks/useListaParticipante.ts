import { useRecoilValue } from 'recoil';
import { listaDeParticipanteState } from '../atom';

export const useListaParticipante = () => {
    return useRecoilValue(listaDeParticipanteState)
}