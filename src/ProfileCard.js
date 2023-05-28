import React from "react";

function ProfileCard({ title, handle, image }) {
  return (
    <div>
      <img src={image} alt="display_image" />
      <div>The Title is {title}</div>
      <div>The handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
