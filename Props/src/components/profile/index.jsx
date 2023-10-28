/* eslint-disable react/prop-types */

import Title from "../title";
import styles from "./style.module.css";
import ProfileSection from "./ProfileSection";
import LinkButton from "./LinkButton";

const Profile = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} />
      <Title>
        <span>{props.name}</span>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={styles.links}>
          <LinkButton href={props.githubUrl}>Github</LinkButton>
          <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
          <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
        </div>
      </ProfileSection>
    </div>
  );
};

export default Profile;
