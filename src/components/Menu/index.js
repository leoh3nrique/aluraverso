import { StyledMenu, Logo } from "./styled";
import Search from "./components/Search";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import Link from "next/link";



export default function Menu({valorDoFiltro, setValorDoFiltro}) {
  
  return (
    <StyledMenu >
      <div>
        <Link href="/"> <Logo /></Link>
       
      </div>
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
      <DarkModeSwitch/>
      

    </StyledMenu>
  );
}

