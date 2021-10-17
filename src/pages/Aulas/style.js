import styled from 'styled-components'
import * as icon from '../../ui/icons'

export const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 4px solid #98C222;
height: 4em;
background-color: #55468F;

`
export const Container = styled.div`
display: flex;
margin: 4em;
height: 100%;
gap: 1em;
flex-wrap: wrap;
h6{
    position: absolute;
    right: 50%;
}
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
h4{
   margin: 1em 0 1em 0.4em;
}
p{
    margin-left: 1em;
    word-break: break-all;
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