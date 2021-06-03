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

    fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
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
      {!submitted && <div className={styles.container}>
        < form className={styles.main} onSubmit={handleSubmit} >
          < div className={styles.inputGroup} >
            < label htmlFor='name'>Name</label>
            < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} value={name} />
          </div>

          < div className={styles.inputGroup} >
            < label htmlFor='email'>Email</label>
            < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} value={email} />
          </div>

          < div className={styles.inputGroup} >
            < label htmlFor='phoneNumber'>Phone Number</label>
            < input type='tel' onChange={(e)=>{setPhoneNumber(e.target.value)}} name='phoneNumber' className={styles.inputField} value={phoneNumber} />
          </div>

          < div className={styles.inputGroup} >
            < label htmlFor='sessionDate'>Ideal Session Date</label>
            < input type='text' onChange={(e)=>{setSessionDate(e.target.value)}} name='sessionDate' className={styles.inputField} value={sessionDate} />
          </div>

          < div className={styles.inputGroup}>
            < label htmlFor='service'>Please let me know which service are you interested in. Do you have a location in mind? Tell me about yourself.</label>
            < textarea type='text' onChange={(e)=>{setService(e.target.value)}} name='service' className={styles.longMessageGroup} value={service} />
          </div>

          < input type='submit' />
        </form >
      </div>}
      {submitted && <div><h1>Thank you!</h1><p>I'll get back to you ASAP.</p></div>}
      <style jsx>{`
        input[type='submit'] {
          border-color: #f08da8;
          background-color: white;
          border-style: solid;
          padding: 5px 20px;
          text-transform: uppercase;
          font-family: 'Jura';
          font-weight: bold;
          font-size: 19px;
          margin-top: 15px;
        }
      `}
      </style>
    </Layout>
  )
}
