import React from 'react'

const LatestPosts = () => {
    return (
        <div class="card mb-3 card-latest-posts">
            <div class="row g-0 w-0 card-latest-posts-row">
                <div class="col-md-4 card-latest-posts-img">
                    <img src="https://picsum.photos/200/201/" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body card-latest-posts-content">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestPosts
