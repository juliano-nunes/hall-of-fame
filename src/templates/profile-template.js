import React from "react"
import { graphql } from "gatsby"
import Profile from '../components/profile';

const ProfileTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return <Profile profile={frontmatter} html={html} />;
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