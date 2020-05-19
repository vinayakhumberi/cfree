import React from 'react';
import {
  Container,
  Chip,
  Left,
  Right,
  Top
} from './style';
import CommentBox from '../CommentBox/CommentBox';
import Image from '../../components/Image/Image';
import Text from '../../components/Text/Text';
import { timeDifference } from '../../utils/time.utils';
function Comment(props) {
  const handlePostComment = (comment, id) => {
    props.handlePostComment(comment, id)
  }
  return(
    <Container>
      <Chip>
        <Left>
          <Image src={props.user.img} alt={props.user.img} width={40} height={40} />
        </Left>
        <Right>
          <Top>
            <Text text={props.user.name} color="#343434" paddingLeft={10} />
            <Text text={timeDifference(new Date(), new Date(props.data.timestamp))} color="#888" paddingLeft={10} />
          </Top>
          <Text text={props.data.comment} color="#888" paddingLeft={10} fontWeight={600} />
        </Right>
      </Chip>
      <CommentBox handlePostComment={handlePostComment} commentId={props.data.id} />
    </Container>
  );
}

export default React.memo(Comment);