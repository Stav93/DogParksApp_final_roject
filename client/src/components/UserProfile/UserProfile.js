import React from 'react'
import { useUsersContext } from "../../Context/user-context"
import { useParams } from "react-router-dom";

function UserProfile() {
  const usersCtx = useUsersContext();
  const params = useParams();

  return (
     <>
      <h1>{usersCtx.user.name}</h1>
      <h2>{params.userName}</h2>
    </>
  )
}

export default UserProfile