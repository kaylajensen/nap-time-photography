import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Layout from '../components/Layout';

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [sessionDate, setSessionDate] = useState('')
  const [service, setService] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        phoneNumber,
        sessionDate,
        service
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setPhoneNumber('')
            setSessionDate('')
            setService('')
        }
    })
  }

  return (
    <Layout title="Contact">
      <h1>Contact Me</h1>
      <ul className={styles.companyInfo}>
        <li>Serving Indian Land, South Carolina</li>
        <li>& the Greater Charlotte Area</li>
      </ul>
      <div className={styles.container}>
        < form className={styles.main} >
          < formGroup className={styles.inputGroup} >
            < label htmlFor='name'>Name</label>
            < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
            < label htmlFor='email'>Email</label>
            < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
            < label htmlFor='phoneNumber'>Phone Number</label>
            < input type='tel' onChange={(e)=>{setPhoneNumber(e.target.value)}} name='phoneNumber' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
            < label htmlFor='sessionDate'>Ideal Session Date</label>
            < input type='text' onChange={(e)=>{setSessionDate(e.target.value)}} name='sessionDate' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup}>
            < label htmlFor='service'>What service are you interested in? Do you have a location in mind? Tell me about yourself.</label>
            < input type='text' onChange={(e)=>{setService(e.target.value)}} name='service' className={styles.longMessageGroup} />
          </formGroup>

          < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
        </form >
      </div>
    </Layout>
  )
}

// const Contact = () => (
//   <Layout title="Contact">
//     <h1>Contact Me</h1>
//     <ul className="company-info">
//       <li>Indian Land, SC</li>
//       <li>And Greater Charlotte Area</li>
//       <li>
//         <a href="mailto:naptimephotography@gmail.com">naptimephotography</a>
//       </li>
//     </ul>
//     <style jsx>{`
      // .company-info {
      //   margin: 0 0 100px 0;
      //   padding: 0;
      //   list-style: none;
      //   font-size: 18px;
      //   font-family: 'Jura', sans-serif;
      // }
      // .company-logo {
      //   display: inline-block !important;
      // }
      // .about-text {
      //   color: #777;
      //   max-width: 800px;
      //   margin: 0 auto;
      //   padding: 20px;
      // }
      // img {
      //   margin: 10px 0 20px 20px;
      // }
      // @media (max-width: 600px) {
      //   .about-text img {
      //     float: none;
      //     display: block;
      //     margin: 0 auto 30px;
      //   }
      // }
//     `}</style>
//   </Layout>
// );

// export default Contact;
