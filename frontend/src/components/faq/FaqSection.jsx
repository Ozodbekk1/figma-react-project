import './FaqSection.css'

function CourseDetails() {
  return (
    <div className="course-details-container">
      <div className="course-details-header">
        <h1>Подробнее о курсе</h1>
      </div>
      <div className="course-details-content">
        <p>
          Этот курс станет шагом к успешной карьере в области фронтенд разработки, обеспечивая не только знания, но и реальные навыки, применимые в профессиональной деятельности.
        </p>
        <p>
          Сертификация и портфолио: Выдача сертификата по окончании курса, подтверждающего навыки и знания. Помощь менторов в создании профессионального портфолио для карьеры в IT-индустрии.
        </p>
      
      </div>
      <div className='faq-container-last'>
        <h1>Найдите свою  <br />
        IT Академию</h1>
      </div>
    </div>
  );
}

export default CourseDetails;
