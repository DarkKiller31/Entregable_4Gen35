import { useEffect, useState } from "react"
import './styles/DeleteUser.css'

const DeleteUser = ({ deleteCard, deleteUserCard, setDeleteUserCard }) => {

  const handleCloseDelete = () => {
    setDeleteUserCard(true)
  }
  console.log(deleteCard)

  return (
    <div className={`delete__container ${ deleteUserCard && 'delete__close'}`}>
      <div className="delete">
        <h2 className="delete__title">Delete user</h2>
        <div onClick={handleCloseDelete} className="delete__exit" >X</div>
        <p className="delete__value">The user <span className="name__delete">{`${deleteCard?.first_name} ${deleteCard?.last_name}`}</span> has been deleted</p>
        <button onClick={handleCloseDelete} className="delete__btn">Accept</button>
      </div>
      </div>
  )
}

export default DeleteUser
