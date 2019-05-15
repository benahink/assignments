import React from 'react';
import styled from 'styled-components';
import img from '../image/giraffe-and-acacia.jpg'
import logo from '../image/habari.png'

const Div = styled.div `
    height: 255px;
    margin: 5px;
    border: 5px solid #BDE5E0;
    background-image: url(${img});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const InnerDiv = styled.div `
    height: 45px;
    margin; 2px;
    position: relative;
    top: 180px;
    background-image: url(${logo});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 10px;
`

const Img = styled.img `
    opacity: 0.8;
`;

console.log(Div)
const Header = () => {
    return (
        <Div>
            <Img></Img>
            <InnerDiv></InnerDiv>
        </Div>
    )
}

export default Header