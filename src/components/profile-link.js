import React from "react"
import { Link } from "gatsby"
import {Container, ProfilePhoto} from '../styles/styles';
const ProfileLink = ({ profile }) => (
    <Container>
      <Link to={profile.path}>
        <ProfilePhoto src={profile.photo} />
        <h2>{profile.name}</h2>
      </Link>
    </Container>
);
export default ProfileLink