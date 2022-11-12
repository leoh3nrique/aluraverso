import config from "../config.json";
import { useState } from "react";
import Link from "next/link";




import { MainContainer } from "../src/components/styledIndex";
import Menu from "../src/components/Menu";
import Banner from "../src/components/Header/components/Banner";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";


function HomePage() {
    const[searchValue, setSearchValue] = useState("")
   
    return (
        <>
            
            <MainContainer>
                <Menu valorDoFiltro= {searchValue} setValorDoFiltro={setSearchValue}  />
                <Banner banner={config.banner}/>
                <Header github ={config.github} name={config.name} job={config.job} />
                <Timeline playlists={config.playlists} searchValue = {searchValue} setSearchValue={setSearchValue} />
                
            </MainContainer>
        </>
    );
}

export default HomePage




