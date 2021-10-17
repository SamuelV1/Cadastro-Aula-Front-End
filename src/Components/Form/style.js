import styled from 'styled-components'

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const AddButton = styled.button`

background: #E45B98;
color: white;
border-radius: 3.3px;
width: 16.75em;
height: 33.88px;
border: 0;
/*style pra os children */
font-style: normal;
font-weight: normal;
font-size: 13.5522px;
line-height: 18px;
display: flex;
align-content: center;
align-items: center;
justify-content: center;
/*Pra o svg dentro dele */
svg{
    width: 9.33px;
  height: 9.33px;
  margin-right: 0.75em;
}
        cursor: pointer;
        transition: filter 0.2s;
    :hover{
        filter: brightness(0.7);
    }
`