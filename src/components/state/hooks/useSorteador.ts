import { useListaParticipante } from "./useListaParticipante"
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";

export const useSorteador = () => {

    const participantes = useListaParticipante();
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }
}