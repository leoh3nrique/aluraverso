import {StyledHeader} from "./styled"

function Header({github, name, job}) {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${github}.png`} />
                <div>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}
export default Header;
