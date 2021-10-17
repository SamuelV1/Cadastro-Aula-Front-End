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
export const Input = styled.input`
box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	outline: none;
	display: block;
	padding: 7px;
	border: none;
	border-bottom: 1px solid rgb(255, 148, 166);
	background: transparent;
	margin-bottom: 10px;
	font: 16px Arial, Helvetica, sans-serif;
    height: 45px;
    
`
export const Submit = styled.input`
-moz-box-shadow: inset 0px 1px 0px 0px rgb(255, 148, 166);
	-webkit-box-shadow: inset 0px 1px 0px 0px  rgb(255, 148, 166);
	box-shadow: inset 0px 1px 0px 0px rgb(255, 148, 166);
	background-color: rgb(255, 148, 166);
	border: 1px solid  rgb(255, 148, 166);
	display: inline-block;
	cursor: pointer;
	color: #FFFFFF;
	font-family: 'Open Sans Condensed', sans-serif;
	font-size: 14px;
	padding: 8px 18px;
	text-decoration: none;
    margin-top: 2em;
    :hover{
        background:linear-gradient(to bottom,  rgb(255, 148, 166) 5%,  rgb(175, 114, 124) 100%);
	background-color: rgb(255, 148, 166);
    }
`