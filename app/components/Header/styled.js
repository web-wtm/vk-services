import styled from 'styled-components'
import logoUrl from '../../assets/images/logo.png'

export const HeaderStyled = styled.header`
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`

export const Logo = styled.a`
    width: 160px;
    height: 70px;
    vertical-align: top;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    background-size: 100%;
    background-image: url(${logoUrl});
`

export const Navigation = styled.nav`
    text-align: center;
    padding: 0;

    a {
        display: inline-block;
        position: relative;
        margin: 15px 25px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        color: #713FB4;
        transition: all 333ms ease;

        &:after {
            content: '';
            position: absolute;
            height: 2px;
            background-color: #FF612F;
            bottom: -4px;
            left: 0;
            width: 0;
            transition: all 333ms ease;
        }

        &.active,
        &:hover {
            color: #FF612F;
                :after {
                width: 100%;
            }
        }
    }
`