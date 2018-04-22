import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 35px 0;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    width: 100%;
    z-index: 2;

    div {
        padding: 0 10px;
    }

    @media screen and (max-width: 550px) {
        font-size: 12px;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <div>© All rights reserved</div>
            <div>*if somthing don't work, try with VPN :)</div>
        </StyledFooter>
    )
}

export default Footer;