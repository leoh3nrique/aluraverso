import {useState} from "react";
import { StyledSearch } from "./styled";
import Link from "next/link";


export default function Search({ valorDoFiltro, setValorDoFiltro, theme}) {
    const valorDaBusca = valorDoFiltro
    const setValorDaBusca = setValorDoFiltro

    return(
        <StyledSearch theme={theme}>
            <input type="text" value={valorDaBusca} onChange={(e)=> setValorDaBusca(e.target.value)}/>
            <button>
                🔎
            </button>
            <Link href="videos"> <a>Videos</a></Link>

            

        </StyledSearch>
    )


}