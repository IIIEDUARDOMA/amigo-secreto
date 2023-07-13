import { useRecoilValue } from 'recoil';
import { erroState } from '../atom';
const useMensagemErro = () =>{
    const mensagem = useRecoilValue(erroState);
    return mensagem;
}

export default useMensagemErro;