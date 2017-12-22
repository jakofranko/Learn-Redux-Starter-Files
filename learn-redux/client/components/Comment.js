import React from 'react';
import{ Link } from 'react-router';

import Photo from './Photo';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const { author, comment } = this.refs;
        this.props.addComment(postId, author.value, comment.value);
        this.refs.commentForm.reset();
    },
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
})

export default Comments;
