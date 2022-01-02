import React from 'react';
import Post from './Post';
import LatestPost from './LatestPosts';
import AboutWidget from './AboutWidget';

const Cards = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <div className="row my-3 justify-content-center ">
                        <div className="card-body my-3 posts-card-title">
                            <div class="title"><b>Posts</b></div>
                        </div>

                        <div class="row my-3 justify-content-center">
                            <Post />
                            <Post />
                            <Post />


                        </div>
                    </div>

                </div>

                <div className="col-md-4">
                    <div className="row my-3 ms-3">
                        <div className="card-body my-3 posts-card-title">
                            <div class="title"><b>Trending Posts</b></div>
                        </div>

                        <div className="row my-3 justify-content-center">
                            <LatestPost/>
                            <LatestPost/>
                            <LatestPost/>
                            
                        </div>


                    </div>

                    <div className="row my-3 ms-3">
                        <div className="card-body my-3 posts-card-title">
                            <div class="title"><b>About Me</b></div>
                        </div>

                        <div className="row my-3 justify-content-center">
                            <AboutWidget/>
                            
                        </div>


                    </div>

                </div>



            </div>


        </div>

    )
}

export default Cards
