import config from "../../config.json";
import { useState } from "react";


import { CSSReset } from "../components/CssReset/CSSReset";
import {MainContainer} from "./styled"

import Menu from "../components/Menu";
import Banner from "../components/Header/components/Banner";
import Header from "../components/Header";
import Timeline from "../components/Timeline";


function HomePage() {
    const[searchValue, setSearchValue] = useState("")
    return (
        <>
            <CSSReset />
            <MainContainer>
                <Menu valorDoFiltro= {searchValue} setValorDoFiltro={setSearchValue}/>
                <Banner banner={config.banner}/>
                <Header github ={config.github} name={config.name} job={config.job}/>
                <Timeline playlists={config.playlists} searchValue = {searchValue} setSearchValue={setSearchValue}/>
            </MainContainer>
        </>
    );
}

export default HomePage




