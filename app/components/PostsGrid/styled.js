import styled from 'styled-components'
import iconRepostUrl from '../../assets/images/icon-repost.png'
import iconLikeUrl from '../../assets/images/icon-like.png'

export const PostsContainer = styled.div`
    padding-top: 10px;
    margin-left: 270px;
    text-align: center;
`
export const PostCover = styled.div`
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

export const Post = styled.a`
    display: inline-block;
    min-height: 275px;
    margin: 10px;
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    position: relative;
    vertical-align: top;  

    &:hover ${PostCover}{
        height: 100%;
        opacity: 1;
    }

    img {
        max-height: 200px;
        margin: 5px;
    }
`

export const PostInfo = styled.div`
    display: block;
    color: #000;
    font-family: 'Podkova', serif;
    font-weight: bold;
    text-align: center;
    
    p {
        padding: 5px 10px;
        display: inline-block;
        i {
            margin-left: 5px;
            width: 20px;
            height: 20px;
            display: inline-block;
            vertical-align: text-top;
            background-size: 100%;
            &.icon-repo {
                background-image: url(${iconRepostUrl});
            }
            &.icon-like {
                background-image: url(${iconLikeUrl});
                height: 17px;
            }
        }
    }
`

export const AudioTrack = styled.div`
    text-align: center;
    color: #333;
    font-size: 12px;
`