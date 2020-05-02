import React from "react"
import ProfileLink from "../components/profile-link"
import {FlexGrid, Body} from '../styles/styles';
import SiteMetadata from '../../config/siteMetadata';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Profiles = edges
      .map(edge => <ProfileLink key={edge.node.id} profile={edge.node.frontmatter} />);
  return <Body><h1>{SiteMetadata.title} - {SiteMetadata.company}</h1><FlexGrid>{Profiles}</FlexGrid></Body>
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
