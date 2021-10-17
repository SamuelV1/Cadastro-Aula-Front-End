import styled from 'styled-components'
import * as icon from '../../ui/icons'

export const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid grey;
height: 4em;

`
export const Container = styled.div`
display: flex;
margin: 4em;
height: 100%;
gap: 1em;
flex-wrap: wrap;
`
export const AulaContainer = styled.div`
background-color: #FFDFD3;
height: 8em;
width: 9em;
border-radius: 5px;
    position: relative;
:hover{
    filter: brightness(0.9);
    cursor: pointer;
}
`
export const DeleteButton = styled.button`
    background: none;
    border: none;
    color: white;
    padding: 8px 15px;
    width: 8px;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
    position: absolute;
    top: 0%;
    right: 2%;
`
export const RemoveIcon = styled(icon.Plus)`
  margin: 0;
  transform: rotate(45deg);
`