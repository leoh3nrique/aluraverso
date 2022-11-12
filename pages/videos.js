import Menu from "../src/components/Menu";
import Banner from "../src/components/Header/components/Banner";

import config from "../config.json";
import React from "react";

import { StyledVideo } from "../src/components/componentsPageVideo/styled"
import Video from "../src/components/componentsPageVideo/Video"

const Videos = () =>{
    
    const[searchValue, setSearchValue] = React.useState("")
   
    return(
        <StyledVideo>
            <Menu valorDoFiltro= {searchValue} setValorDoFiltro={setSearchValue} />
            <Video/>
            
           
            
           
           
            
        </StyledVideo>
    )

}
export default Videos;