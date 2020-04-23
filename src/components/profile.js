import React from "react"
import {Container, ProfilePhoto} from '../styles/styles';
const Profile = ({ profile, html }) => (
      <Container>
        <h1>{profile.name}</h1>
        <ProfilePhoto src={profile.photo} />
        <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
);
export default Profile