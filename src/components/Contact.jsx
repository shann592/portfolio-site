import { useState } from 'react'
import { motion } from 'framer-motion'
import { send } from 'emailjs-com'
import config from '../config'

import { routeVariants, childVariants } from '../variants'

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    message: '',
    from_email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const sendMessage = async () => {
    try {
      const resp = await send(
        config.emailJSServiceId,
        config.emailJSTemplateId,
        formData,
        config.emailJSPublicKey
      )
      alert('Message Sent 👍')
    } catch (error) {
      alert('Something went wrong 💥')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      formData.from_email === '' &&
      formData.from_name === '' &&
      formData.message === ''
    ) {
      alert('Please fill the form correctly 🚨')
      return
    }
    sendMessage()
    setFormData((prev) => {
      return {
        from_name: '',
        message: '',
        from_email: '',
      }
    })
  }

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="w-full flex flex-col justify-center items-center h-full gap-1 dark:dark-main-bg-color dark:text-white pt-28 pb-10"
    >
      <motion.h2
        variants={childVariants}
        initial="initial"
        animate="final"
        className="rajdhani-semibold text-left w-[300px] md:w-[500px] ml-1 text-2xl font-rajdhani underline"
      >
        Contact Me
      </motion.h2>
      <motion.form
        variants={childVariants}
        initial="initial"
        animate="final"
        onSubmit={handleSubmit}
        className="flex flex-col w-[300px] md:w-[500px] min-h-56 gap-3 text-lg py-2"
      >
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-3 border-2 border-gray-300 rounded-md dark:border-gray-400"
          name="from_name"
          onChange={handleChange}
          value={formData.from_name}
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-3 border-2 border-gray-300 rounded-md dark:border-gray-400"
          name="from_email"
          onChange={handleChange}
          value={formData.from_email}
        />
        <textarea
          placeholder="Message"
          className="min-h-52 py-2 px-3 border-2 border-gray-300 rounded-md dark:border-gray-400"
          name="message"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button className="w-28 bg-gradient-to-r from-yellow-500 to-pink-500 text-white rajdhani-bold font-rajdhani text-xl rounded-md py-2">
          Sent
        </button>
      </motion.form>
    </motion.div>
  )
}
