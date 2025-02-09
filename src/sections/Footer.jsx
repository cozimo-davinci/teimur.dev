import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t
        border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon hover:scale-105">
                    <a href="https://github.com/cozimo-davinci" className="flex justify-center">
                        <img src="/assets/github.svg" alt="github"
                             className="w-2/3 h-2/3"/>
                    </a>

                </div>

                <div className="social-icon hover:scale-105">

                <a href={'https://www.linkedin.com/in/teimur-terchyyev-83195b206/'} className="flex justify-center">
                        <img src="/assets/linkedin.svg" alt="linkedin"
                             className="w-2/3 h-2/3 "/>
                    </a>

                </div>
            </div>
        </section>
    )
}
export default Footer
