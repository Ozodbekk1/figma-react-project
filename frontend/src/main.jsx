
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// components
import FaqSection from './components/faq/FaqSection.jsx'
import ITAcademies from './components/table/Table.jsx'
import Contact from './components/contact/Contact.jsx'
import FooterMain from './components/footer/FooterMain.jsx'

createRoot(document.getElementById('root')).render(
  <div>
     <App />
     <FaqSection />
     <ITAcademies />
     <Contact />
     <FooterMain />
  </div>
)
