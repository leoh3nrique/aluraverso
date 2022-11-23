
import { StyleSearch } from "./styled";


export default function Search({ valorDoFiltro, setValorDoFiltro}) {
    const valorDaBusca = valorDoFiltro
    const setValorDaBusca = setValorDoFiltro

    return(
        <StyleSearch>
            <input type="text" value={valorDaBusca} onChange={(e)=> setValorDaBusca(e.target.value)}/>
            <button>
                🔎
            </button>
        </StyleSearch>
    )


}