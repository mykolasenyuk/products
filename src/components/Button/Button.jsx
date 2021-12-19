import s from './Button.module.css'
const Button = ({ title, openModal }) => {
  return (
    <button className={s.btn} type="button" onClick={() => openModal()}>
      {title}
    </button>
  )
}
export default Button
