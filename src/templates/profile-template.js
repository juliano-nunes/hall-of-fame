import React from "react"
import { graphql } from "gatsby"
import { Container } from '../styles/styles';
import { ProfilePhoto } from '../styles/styles';

export default function Template({data}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Container>
                <h1>{frontmatter.name}</h1>
                <ProfilePhoto src={frontmatter.photo} />
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
        </Container>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
        photo
      }
    }
  }
`;