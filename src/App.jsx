import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import DeleteUser from './components/DeleteUser'


function App() {

  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)
  const [deleteCard, setDeleteCard] = useState()
  const [deleteUserCard, setDeleteUserCard] = useState(true)



  const BASEURL = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(BASEURL)
  
  useEffect(() => {
    getUsers('/users/')
  }, [])

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  const handleOpenDelete = () => {
    setDeleteUserCard(false)
  }

  return (
    <div className='app'>
      <header className='app__header'>
      <h1 className='app__title'>User CRUD</h1>
      <button onClick={handleOpenForm} className='new__btn'>+ Create New user</button>
      </header>
      <FormUser
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
      />
      <DeleteUser 
        deleteCard={deleteCard}
        deleteUserCard={deleteUserCard}
        setDeleteUserCard={setDeleteUserCard}
      />
      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserEdit={setUserEdit}
              handleOpenForm={handleOpenForm}
              setDeleteCard={setDeleteCard}
              handleOpenDelete={handleOpenDelete}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
