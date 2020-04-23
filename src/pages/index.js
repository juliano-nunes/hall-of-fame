import React from "react"
import ProfileLink from "../components/profile-link"
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Profiles = edges
      .map(edge => <ProfileLink key={edge.node.id} profile={edge.node.frontmatter} />);
  return <div>{Profiles}</div>
};
export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___name] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            name
            photo
          }
        }
      }
    }
  }
`;
