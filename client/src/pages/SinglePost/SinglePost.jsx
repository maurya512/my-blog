import React from 'react'
// * import style files for SinglePost
import './SinglePost.css';

// * import components
import SingPost from '../../components/SingPost/SingPost'
import Sidebar from '../../components/Sidebar/Sidebar'

const SinglePost = () => {
    return (
        <div className="singlePost">
            {/* post component */}
            {/* single post component that consumes left side of the page */}
            <SingPost />
            {/* importing the sidebar component that consumes right side of the page */}
            <Sidebar />
        </div>
    )
}

export default SinglePost