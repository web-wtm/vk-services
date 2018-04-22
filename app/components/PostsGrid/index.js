import React from 'react'
import { PostsContainer, Post, PostCover, PostInfo, AudioTrack } from './styled'

const PostsGrid = (props) => {
    return (
        <PostsContainer>
            {props.posts.map((item) => {
                return (
                    <Post key={item.id} target='_blank' href={`https://vk.com/${props.domain}?w=wall${item.from_id}_${item.id}`} title=''>
                        {   
                            item.attachments && 
                            item.attachments.map((att) => {
                                if (att.doc && att.doc.ext == 'gif') return <img key={att[att.type].id} src={att.doc.url} />
                                
                                switch(att.type) {
                                    case 'photo': 
                                        return <img key={att[att.type].id} src={att.photo.photo_604} />
                                        break;
                                    case 'audio': 
                                        return <AudioTrack key={att[att.type].id}>{att.audio.artist} - {att.audio.title}</AudioTrack>
                                        break;
                                    case 'video':
                                        return <img key={att[att.type].id} src={att.video.photo_320} />
                                        break;
                                    default:
                                        return;
                                }
                            })
                        }
                        <PostInfo>
                            {item.text && <div className='post-text'>{item.text}</div>}
                            <p>{item.likes.count} <i className='icon-like'></i></p>
                            <p>{item.reposts.count} <i className='icon-repo'></i></p>
                        </PostInfo>
                        <PostCover>Click to open in vk</PostCover>
                    </Post>
                )}
            )}
        </PostsContainer>
    )
}

export default PostsGrid