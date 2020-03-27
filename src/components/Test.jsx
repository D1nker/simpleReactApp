import React from 'react';

function ProfilePage({ user }) {
  // props.user
  console.log({ user });
  const showMessage = () => {
    alert('Vous suivez désormais ' + user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Suivre</button>
  );
}

export default ProfilePage;
