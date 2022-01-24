import React from 'react';

export default function PostItem() {
    return (
        <div className="post-item">
            <p className="post-content">
                Random Content Ink is the lasting legacy of Carl Reiner and one of his last gifts to the entertainment industry; a haven for celebrities, artists, and policy-makers to share their stories and to solidify their own legacy through print, digital and social media.  In conjunction with this legacy-building platform, Random Content Ink has positioned itself as a content creation and media management agency of the future. 
            </p>
            <div className="post-footer">
                <div className="post-infors">
                    <span>By Thanh Pham</span>
                    <span>Date: 23/10/2000</span>
                </div>
                <div className="post-edit-delete">
                    <span>Edit</span>
                    <span>Delete</span>
                    <div className="delete-question">Are your sure?</div>
                    <span>Yes</span>
                    <span>No</span>
                </div>
            </div>
            <div className="post-edit-form">
                <form action="" className="edit-form">
                    <textarea
                        type="text"
                        name="content"
                        id="content"
                        className="content"
                        placeholder="Please enter"
                        defaultValue="Random Content Ink is the lasting legacy of Carl Reiner and one of his last gifts to the entertainment industry; a haven for celebrities, artists, and policy-makers to share their stories and to solidify their own legacy through print, digital and social media.  In conjunction with this legacy-building platform, Random Content Ink has positioned itself as a content creation and media management agency of the future."
                    />
                    <div className="btn-container">
                        <button className="btn">Update</button>
                        <button className="btn">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
