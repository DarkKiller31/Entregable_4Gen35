import './styles/UserCard.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { BsFillGiftFill } from "react-icons/bs";

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {

  const handleDelete = () => {
    deleteUser('/users/', user.id)
  }

  const handleEdit = () => {
    setUserEdit(user)
    handleOpenForm()
  }

  return (
    <article className='card'>
      <h2 className='card__title'>{`${user.first_name} ${user.last_name}`}</h2>
      <hr />
      <ul className='card__list'>
        <li><span className='card__item'>Email</span><span className='card__value'>{user.email}</span></li>
        <li><span className='card__item'>Birthday</span><span className='card__value'><BsFillGiftFill /> {user.birthday}</span></li>
      </ul>
      <hr />
      <div className='card__btn'>
        <div onClick={handleDelete} className='card__delete'><FaRegTrashCan /></div>
        <div onClick={handleEdit}className='card__edit' ><MdEdit /></div>
      </div>
    </article>
  )
}

export default UserCard
