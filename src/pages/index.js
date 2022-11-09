import config from "../../config.json";

import { CSSReset } from "../components/CssReset/CSSReset";
import {MainContainer} from "./styled"

import Menu from "../components/Menu/Menu";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Timeline from "../components/Timeline/Timeline";



function HomePage() {
    return (
        <>
            <CSSReset />
            <MainContainer>
                <Menu/>
                <Banner banner={config.banner}/>
                <Header github ={config.github} name={config.name} job={config.job}/>
                <Timeline playlists={config.playlists}/>
            </MainContainer>
        </>
    );
}

export default HomePage




