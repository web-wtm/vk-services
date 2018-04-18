import styled from 'styled-components'

export const PhotosContainer = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
    padding: 20px;
`
export const PhotoCover = styled.div`
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    color: #fff;
    transition: all ease-in 222ms;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

export const Photo = styled.a`
    display: inline-block;
    position: relative;
    margin: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,.3);
    background-image: url(../../assets/images/img-thumbnail.png);
    background-position: center;
    background-size: 80px;
    background-repeat: no-repeat;
    background-color: rgba(0,0,0,.4);

    &:hover ${PhotoCover}{
        height: calc(100% + 4px);
        opacity: 1;
    }

    img {
        border: 2px solid #fff;
        margin-bottom: -4px;
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
`

export const PhotoDate = styled.div`
    position: absolute;
    bottom: 0;
    right: 3px;
    background-color: rgba(220, 231, 247, .5);
    font-size: 14px;
    font-weight: bold;
    padding: 2px;
    color: #000;
    border-radius: 5px
`