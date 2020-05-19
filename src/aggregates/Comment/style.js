import styled from 'styled-components';
import { rem } from '../../utils/style.util';

export const Container = styled.div`
  width: ${rem(400)};
  margin: auto;
  position: relative;
`;

export const Chip = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  padding: 10px;
    margin-top: -20px;
    margin-bottom: 0;
`;

export const Left = styled.div`
`;
export const Right = styled.div`
`;

export const Top = styled.div`
  display: flex;
`;
