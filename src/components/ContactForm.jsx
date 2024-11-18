import React from 'react'

const ContactForm = () => {
    return (
        <form>
            <input type="text" placeholder='Name' />
            <br />
            <input type="email" placeholder='Email' />
            <br />
            <textarea placeholder='message'></textarea>
            <br />
            <button type='submit'>submit</button>
        </form>
    )
}

export default ContactForm