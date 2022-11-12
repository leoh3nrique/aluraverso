import styled  from "styled-components";

export const StyledVideo = styled.section` //Styled da PAGINA VIDEO EM SI
    display: flex;
    flex-direction: column;
    flex: 1;
    transition-delay: all 0.5ms;
    gap: 100px;
    color: ${({theme}) => theme.textColorBase};
`

export const StyledCard = styled.div`
        margin-top: 8vh;
        iframe{
            width: 100%;
            height: 80vh;
            
        }

    `