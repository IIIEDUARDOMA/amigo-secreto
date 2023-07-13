import { erroState, listaDeParticipanteState } from './../atom';
import { useSetRecoilState, useRecoilValue } from "recoil"

export const useAdicionarParticipante = () =>{
    const setLista = useSetRecoilState(listaDeParticipanteState);
    const lista = useRecoilValue(listaDeParticipanteState)
    const setErro = useSetRecoilState(erroState)
    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro('')
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante] )
    };
};