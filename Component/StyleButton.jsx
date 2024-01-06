import styled from 'styled-components';

const StyleButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #3498db;
  border-radius: 5px;
  color: ${(props) => props.back === 'outline' ? 'blue' : 'white'};
  background-color: ${(props) => props.back === 'outline' ? '#FFF' : 'blue'};
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    color: ${(props) => props.back !== 'outline' ? 'blue' : 'white'};
    background-color: ${(props) => props.back !== 'outline' ? '#FFF' : 'blue'};
  }
`
export default StyleButton;

export const NewStyleButton = styled(StyleButton)`
  border : 1px;
`

