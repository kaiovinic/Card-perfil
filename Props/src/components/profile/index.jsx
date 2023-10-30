/* eslint-disable react/prop-types */

import Title from "../title";
import styles from "./style.module.css";
import ProfileSection from "./ProfileSection";
import LinkButton from "./LinkButton";
import { useState } from "react";

const Profile = (props) => {
  const [followText, setFollowText] = useState("Follow");

  const handleClick = () => {
    alert("Você já está seguindo!");
    setFollowText("Following");
  };
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection className={styles.links}>
        <LinkButton href={props.githubUrl}>Github</LinkButton>
        <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  );
};

export default Profile;
