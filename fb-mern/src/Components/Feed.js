import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from '../axios'
import Pusher from 'pusher-js'

import db from '../firebase'

const pusher = new Pusher('4096e93b708dd136d79a', {
    cluster: 'ap2'
});

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])



    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })
    }




    useEffect(() => {
        var channel = pusher.subscribe('posts');
        channel.bind('inserted', function (data) {
            syncFeed()
        });
    }, [])





    useEffect(() => {
        syncFeed()
    }, [])

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed
