import React, { useState } from 'react';
import '../Styles/Contact.css';
import emailjs from 'emailjs-com';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msj, setMsj] = useState('');

    const handleEmail = (e) => {
        e.preventDefault();

        try {
            emailjs.send("service_i2msqks", "template_fblx3zs", {
                nombre: name,
                correo: email,
                mensaje: msj,
            }, '-T4snFchYKS9wXzey');

            toast.success('Correo enviado!', {
                style: {fontFamily: 'var(--lato)'},
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
            });

        } catch {
            toast.error('Correo no enviado!', {
                style: {fontFamily: 'var(--lato)'},
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: theme,
            });
        }
        setName('');
        setEmail('');
        setMsj('');
    }
    const { backgroundImage } = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);
    console.log(theme)
    return (
        <section style={{ backgroundImage: `url(${backgroundImage})` }} className='contactSection d-flex justify-content-center align-items-center flex-column'>
            <div className='contactTitleContainer'>
                <div className='text-center'>
                    <h2 className='p-0 m-0 contactTitle'>Contact</h2>
                    <h3 className='p-0 m-0 contactSubTitle'>Send me a message!</h3>
                </div>
            </div>
            <div className='formContainer'>
                <form onSubmit={handleEmail} className='formContact d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-column w-100 formItem'>
                        <label className='labelContact' htmlFor="name">Full Name</label>
                        <input required onChange={(e) => setName(e.target.value)} value={name} className='formInput' type="text" name="name" id="name" />
                    </div>
                    <div className='d-flex flex-column w-100 formItem'>
                        <label className='labelContact' htmlFor="email">Email</label>
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} className='formInput' type="email" name="email" id="email" />
                    </div>
                    <div className='d-flex flex-column w-100 formItem'>
                        <label className='labelContact' htmlFor="msj">Message</label>
                        <textarea required onChange={(e) => setMsj(e.target.value)} value={msj} className='textArea' name="msj" id="msj" ></textarea>
                    </div>
                    <div className='w-100 text-center formFooter'>
                        <button className='btnSend'>Send</button>
                    </div>
                </form>
                <ToastContainer
                    className='alertCustom'
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={theme}
                />
            </div>
        </section>
    );
}