import { atom } from "recoil";

export const listaDeParticipanteState = atom<string[]>({
    key: 'listaDeParticipanteState',
    default: []
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroStateerroState',
    default: ''
})