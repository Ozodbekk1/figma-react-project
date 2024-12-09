import './Contact.css'

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Запишитесь на курсы</h2>
      <p>Ваш контакт:</p>
      <div className="form-group">
    
        <input type="text" id="name" name="name" placeholder='Имя:'/>
      </div>
      <div className="form-group">
        <input type="tel" id="phone" name="phone" placeholder='Номер телефона:'/>
      </div>
      <button type="button" className="submit-button">
        Записаться на курсы
      </button>
    </div>
  );
}

export default ContactForm;








// import './Contact.css'

// function Contact() {
//   return (
//     <div>
//       <form className='form-container'>
//         <h1>Запишитесь на курсы</h1>
//         <span>Ваш контакт:</span>
//         <br />
//         <input type="text" placeholder='Имя'/>
//         <br />
//         <input type="text" placeholder='Номер телефона'/>
//         <br />
//         <button>Записатся на курсы</button>
//       </form>
//     </div>
//   )
// }

// export default Contact
