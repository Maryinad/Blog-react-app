import styled from "styled-components"

const StyledCard = styled.article`
width: 670px;
height: 202px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
display: flex;
gap: 28px;
padding: 16px;
` 

const StyledDate = styled.span`
color: #667085;
text-align: center;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 15.6px */
text-transform: uppercase;
`

const StyledTitle = styled.h2`
color: #1D2939;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 28.6px */
`

const StyledParagraph = styled.p`
color: #475467;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
`

const StyledImage = styled.img`
width: 210px;
height: 170px;
flex-shrink: 0;
border-radius: 10px;
`


export default function BlogPreviewCard(){
    return (
        <StyledCard>
            <div>
            <StyledDate>Date</StyledDate>
            <StyledTitle>Lorem ipsum dolor sit amet.</StyledTitle>
            <StyledParagraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, commodi molestiae tempora explicabo inventore rerum eius. Doloremque dolores nihil nam?</StyledParagraph>
            </div>
            <StyledImage src="https://picsum.photos/200/300" />
        </StyledCard>
    )
}