import React, { useState, useEffect } from 'react';
import "./Comment.css";
import Displaycomment from './Displaycomment';
import { useSelector, useDispatch } from 'react-redux';
import { postcomment } from '../../action/comment';

const Comment = ({ videoid }) => {
    const dispatch = useDispatch();
    const [commenttext, setcommentext] = useState("");
    const currentuser = useSelector(state => state.currentuserreducer);
    const commentlist = useSelector(state => state.commentreducer);

    useEffect(() => {
        // Fetch comments if commentlist.data is null or undefined
        // Example: dispatch an action to fetch comments
        // dispatch(fetchComments(videoid)); // You need to implement this action
    }, [videoid, dispatch]);

    const handleonsubmit = (e) => {
        e.preventDefault();
        if (currentuser) {
            if (!commenttext) {
                alert("please type your comment!!");
            } else {
                dispatch(postcomment({
                    videoid: videoid,
                    userid: currentuser?.result._id,
                    commentbody: commenttext,
                    usercommented: currentuser.result.name
                }));
                setcommentext("");
            }
        } else {
            alert("Please login to comment");
        }
    };

    if (!commentlist || !commentlist.data) {
        return null; // or Loading indicator if you prefer
    }

    return (
        <>
            <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
                <input type="text" onChange={(e) => setcommentext(e.target.value)} placeholder='add comment...' value={commenttext} className='comment_ibox' />
                <input type="submit" value="add" className='comment_add_btn_comments' />
            </form>
            <div className="display_comment_container">
                {commentlist.data
                    .filter((q) => q.videoid === videoid)
                    .reverse()
                    .map((m) => (
                        <Displaycomment key={m._id} cid={m._id} userid={m.userid} commentbody={m.commentbody} commenton={m.commenton} usercommented={m.usercommented} />
                    ))}
            </div>
        </>
    );
};

export default Comment;