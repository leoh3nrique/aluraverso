import Menu from "../src/components/Menu";
import Banner from "../src/components/Header/components/Banner";
import Header from "../src/components/Header";

import config from "../config.json";
import React from "react";
import styled from "styled-components";

import { MainContainer } from "../src/components/styledIndex";


const Videos = () =>{
    const[searchValue, setSearchValue] = React.useState("")
    return(
        <MainContainer>
            <Menu valorDoFiltro= {searchValue} setValorDoFiltro={setSearchValue}  />
            <Banner banner={config.banner}/>
            <Header github ={config.github} name={config.name} job={config.job}/>
            
        </MainContainer>
    )

}
export default Videos;