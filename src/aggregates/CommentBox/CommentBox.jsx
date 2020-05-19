import React, { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import {
  Container,
  Footer
} from './style';

export default function DropDown(props) {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);
  const handlePostComment = (e) => {
    if ((active || props.alwaysActive) && text) {
      props.handlePostComment(text, props.commentId);
      setText('');
      
    }
    setActive(active => !active);
  }
  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
  }
  return(
    <Container alwaysActive={props.alwaysActive}>
      {(active || props.alwaysActive) && <TextInput width="100%" paddingTop={10} paddingLeft={10} placeHolder="Enter Text" onChange={handleTextChange} />}
      <Footer>
        <Button
          buttonText="Reply"
          backgroundColor={(active || props.alwaysActive) ? "#2d85d1" : "#888"}
          width={60}
          height={20}
          fontSize={10}
          onClick={handlePostComment}
        />
      </Footer>
    </Container>
  );
}