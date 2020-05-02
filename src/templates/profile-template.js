import React from "react"
import { graphql } from "gatsby"
import Profile from '../components/profile';
import { Body } from "../styles/styles";

const ProfileTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return <Body><Profile profile={frontmatter} html={html} /></Body>;
};
export default ProfileTemplate

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