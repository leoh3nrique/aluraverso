import { StyledMenu, Logo } from "./styled";
import Search from "./components/Search";


export default function Menu({valorDoFiltro, setValorDoFiltro}) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
    </StyledMenu>
  );
}

