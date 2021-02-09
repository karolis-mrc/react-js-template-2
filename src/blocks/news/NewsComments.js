import React from 'react';
import CommentForm from '../../components/form/CommentForm';
import CommentsReply from '../../components/button/CommentsReply';

const NewsComments = () => {
  return (
    <div id="comments" className="comments-area spacer m-top-xl">
      <div className="comment-title">
        <h4>Comments (1)</h4>
      </div>

      <div className="position-relative">
        <ul className="comment-list list-unstyled style-default">
          <li className="comment">
            <div className="comment-wrapper">
              <div className="comment-details">
                <div className="comment-header">
                  <div className="d-flex align-items-center">
                    <div className="comment-header-right">
                      <h5 className="comment-author">
                        <a title="Rosie Ford" href="/news-single-post">
                          Rosie Ford
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="comment-content">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati.
                  </p>
                </div>

                <CommentsReply />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="block spacer m-top-xl position-relative">
        <div id="respond" className="comment-respond">
          <h4 id="reply-title" className="comment-reply-title">
            Leave a reply{' '}
            <a
              rel="nofollow"
              id="cancel-comment-reply-link"
              className="btn btn-link p-0 border-0"
              href="news-single-post.html"
              style={{ display: 'none' }}
            >
              Cancel reply
            </a>
          </h4>

          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default NewsComments;
