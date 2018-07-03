import styled from 'styled-components'

const SideBar = styled.div`
    background-color: #222;
    font-family: 'Podkova',serif;
    position: fixed;
    top: 90px;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 270px;

    @media (max-width: 600px) {
        width: 160px;
    }
`

export default SideBar