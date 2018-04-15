import styled from 'styled-components'

export const Container = styled.div`
    min-width: 200px;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1%;
`

export const AlreadyAuth = styled.div`
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);  
    background-color: #fff;
    padding: 20px;
    display: inline-block;
    font-size: 28px;
    margin-top: 150px;
    position: relative;

    span {
        background-color: rgba(0, 194, 6, 0.4);
        padding: 6px 10px;
        margin-left: 15px;
        border-radius: 50%;
        font-size: 30px;
        color: #fff;
    }
`