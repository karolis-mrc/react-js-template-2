import React from 'react';
import { Link } from 'react-scroll/modules';

const CommentsReply = () => {
  return (
    <div className="comment-reply no-space">
      <Link
        title="Reply"
        className="comment-reply-link btn btn-lg btn-link btn-before-line p-0 border-0 min-w-auto link-no-space scroll-to-id"
        to="reply-title"
        spy={true}
        smooth={true}
        duration={0}
        href="#reply-title"
      >
        <i className="fas fa-reply"></i>
        <span>Reply</span>
      </Link>
    </div>
  );
};

export default CommentsReply;
