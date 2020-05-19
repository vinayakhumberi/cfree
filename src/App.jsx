import React, {useState} from 'react';
import './App.css';
import DropDown from './aggregates/DropDown/DropDown';
import CommentBox from './aggregates/CommentBox/CommentBox';
import Comment from './aggregates/Comment/Comment';
const users = require('./data/users.json');
const comments = require('./data/comments.json');


function App(props) {
  const [comments, setComments] = useState(props.comments);
  const [selected, setSelected] = useState(Object.keys(props.users)[0]);
  const handleUpdateSelected = (userId) => {
    setSelected(userId);
  };
  const handlePostComment = (comment, commentId) => {
    const commentsT = {...comments};
    const newId = + new Date();
    if (commentId) {
      commentsT[commentId].replies.push(newId);
    }
    commentsT[newId] = {
      id: newId,
      timestamp: new Date().toGMTString(),
      comment: comment,
      userID: selected,
      replies: []
    };
    setComments(commentsT);
  };
  const buildTimeline = (item, padded) => {
    return <div key={comments[item].id} className={`comment-chip ${padded ? '' : 'no-pad'}`}>
      <Comment
        data={comments[item]}
        user={props.users[comments[item].userID]}
        handlePostComment={handlePostComment}
      />
        <div>
          {comments[item].replies.map(item2 => {
            const i = values.indexOf(item2 + '');
            if (i > -1) {
              return buildTimeline(comments[values.splice(i, 1)].id, true);
            }
            return [];
          })}
         </div>
      </div>;
  }
  let values = Object.keys(comments);
  const timeline = values.map(item => {
    return buildTimeline(item);
  });
  return (
    <div className="App">
       <DropDown data={props.users} selected={selected} handleUpdateSelected={handleUpdateSelected} />
       <div className="comment-section">
        {timeline}
        <CommentBox handlePostComment={handlePostComment} alwaysActive={true} />
      </div>
    </div>
  );
}

App.defaultProps = {
  users: users,
  comments: comments
}
export default App;
