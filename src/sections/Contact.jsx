import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );
    const [loading, setLoading] = useState(false);

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const serviceID = "service_qd84rbd";
            const publicKey = "5xAiIabULD08aIhfG"
            await emailjs.send(
                serviceID,
                "template_pdp2scn",
                {
                    from_name: form.name,
                    to_name: "Teimur Terchyyev",
                    from_email: form.email,
                    to_email: "teimur.terchiev@gmail.com",
                    message: form.message,
                },
                publicKey
                )
            setLoading(false);
            setForm({
                name: '',
                email: '',
                message: ''
            })
            alert("Thank you! I will get back to you as soon as possible.");
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Ahh, something went wrong. Please try again.");
        }


    }

    return (
        <section className="c-space my-20" id="contact">

            <div className="relative min-h-screen flex items-center justify-center flex-col">

                <img src="/assets/terminal.png" alt="terminal background"
                     className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600">
                        I&apos;d love to hear from you! Whether you have a question, want to collaborate on a project, or
                        bring a unique project to life, feel free to reach out. I am here to help
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}
                          className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Salazar Toress"
                            className="field-input focus:border-b-2 focus:border-green-500"/>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="salazar.toress@gmail.com"
                            className="field-input focus:border-b-2 focus:border-green-500"/>
                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                        </label>
                        <textarea
                            rows={5}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Hi, I am interested in...."
                            className="field-input focus:border-b-2 focus:border-green-500"/>
                        <button className="field-btn hover:animate-bounce hover:border-b-4 hover:border-green-500" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
