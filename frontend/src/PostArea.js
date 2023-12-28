import React from 'react';
import PostElement from "./PostElement";
import test_pp_icon from "./photos/1.jpg";
import test_post_video
    from "./posts/beautiful-nature-view-status-video-with-song-natureshort-shorts-854-ytshorts.savetube.me.mp4";


function PostArea() {
    return (
        <div>
            <PostElement media={test_pp_icon} likeCount="10" profilePicture={test_pp_icon} time="6s" username="Bug Byte Banna" explanation="दो गाड़ी के भिड़ने से हुई 4 लोगो की मौत!
            "/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="6s" username="Yashasvi_yadav" explanation="बेंगलुरु में लगा जाम"/>
        </div>
    );
}

export default PostArea;