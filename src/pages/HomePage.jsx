import BlogPreviewCard from "../components/BlogPreviewCard";
import { StyledCategoryTitle } from "../components/CategoryTitle";
import styled from "styled-components";


const StyledCategoryContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px
`

export default function HomePage(){
    return <main>
        <StyledCategoryContainer>
        <StyledCategoryTitle>Daily Digest</StyledCategoryTitle>
        <BlogPreviewCard />
        <BlogPreviewCard />
        <BlogPreviewCard />
        </StyledCategoryContainer>
        </main>
}