import React, {useState} from 'react';
import {
  Container,
  Ul,
  Li
} from './style';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';


export default function DropDown(props) {
const [ active, setActive ] = useState(false);
const [ selected, setSelected ] = useState(props.selected);
const list = Object.values(props.data).map(item => (
  <Li
   key={item.id}
   image={item.img}
   data-id={item.id}
  >
    <Text
      data-id={item.id}
      text={item.name}
      color="#343434"
      display="inline-block"
      paddingLeft={40}
    />
  </Li>
));
  const handleBtnClick = () => {
    setActive(true);
  }
  const handleSelect = (e) => {
    const id = e.target.getAttribute('data-id');
    setSelected(id);
    setActive(false);
    props.handleUpdateSelected(id);
  }
 return(
   <Container data-type="content" tabIndex="-1" onBlur={(e) => {
     if (!e.relatedTarget || !e.currentTarget.getAttribute('data-type')) {
        setActive(false);
      }
     }}>
     <Button
       buttonText={props.data[selected].name}
       onClick={handleBtnClick}
       backgroundColor="transparent"
       color="#343434"
       textAlign="left"
     />
     {active && <Ul onClick={handleSelect} tabIndex="-1">
      {list}
    </Ul>}
  </Container>
 );
};
