import { motion } from 'framer-motion'
import { send } from 'emailjs-com'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import config from '../config'
import { ToastContainer, toast } from 'react-toastify'

import { routeVariants, childVariants } from '../variants'
import { zodResolver } from '@hookform/resolvers/zod'

import 'react-toastify/dist/ReactToastify.css'

const formSchema = z.object({
  from_name: z
    .string()
    .min(3, { message: 'Name should be atleast 3 character long' }),
  from_email: z.string().email('Enter a valid email'),
  message: z
    .string()
    .min(15, { message: 'Message should be atleast 15 character long' }),
})

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
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

  const sendMessage = async (data) => {
    try {
      const resp = await send(
        config.emailJSServiceId,
        config.emailJSTemplateId,
        data,
        config.emailJSPublicKey
      )
      toast.success('Message sent 👍', {
        position: 'bottom-right',
        className: 'foo-bar',
      })
      reset()
      // alert('Message Sent 👍')
    } catch (error) {
      toast.error('Something went wrong 💥', {
        position: 'bottom-right',
        className: 'foo-bar',
      })
    }
  }

  return (
    <>
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
          onSubmit={handleSubmit((data) => {
            sendMessage(data)
          })}
          className="flex flex-col w-[300px] md:w-[500px] min-h-56 gap-3 text-lg py-2"
        >
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-3 border-2 border-gray-300 rounded-md dark:border-gray-400"
            name="from_name"
            {...register('from_name')}
          />
          {errors.from_name && (
            <em className="text-sm text-red-500">{errors.from_name.message}</em>
          )}
          <input
            type="email"
            placeholder="Email"
            className="py-2 px-3 border-2 border-gray-300 rounded-md dark:border-gray-400"
            name="from_email"
            {...register('from_email')}
          />
          {errors.from_email && (
            <em className="text-sm text-red-500">
              {errors.from_email.message}
            </em>
          )}
          <textarea
            placeholder="Message"
            className="min-h-52 py-2 px-3 border-2 border-gray-300 rounded-md dark:border-gray-400"
            name="message"
            {...register('message')}
          ></textarea>
          {errors.message && (
            <em className="text-sm text-red-500">{errors.message.message}</em>
          )}
          <button
            type="submit"
            className="w-28 bg-gradient-to-r from-yellow-500 to-pink-500 text-white rajdhani-bold font-rajdhani text-xl rounded-md py-2"
          >
            Sent
          </button>
        </motion.form>
      </motion.div>
      <ToastContainer />
    </>
  )
}
