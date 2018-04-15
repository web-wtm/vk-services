import styled from 'styled-components'

export const CurrentPoint = styled.div`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    overflow: hidden;

    &::before, &::after {
        content: '';
        position: absolute;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: crimson;
        height: 4px;
        margin-top: -2px;
    }
    
    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`

export const MapStyled = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const PhotoOnMap = styled.a`
    display: inline-block;
    border-radius: 50%;
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    background-size: cover;
    background-position: center;
    transition: all .2s ease-in-out; 
    cursor: pointer;
    z-index: 1;
    position: relative;
    background-color: #5e5e5e;

    &:hover {
        transform: scale(2);
        z-index: 2;
    }
`