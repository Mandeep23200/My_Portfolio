import React from 'react';

function Contact() {
    return (
        <section id="contact" className="py-12 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                <p className="text-lg mb-4">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="text-lg mb-6">
                    Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <p className="text-lg mb-4">
                    Email: <a href="mailto:mandeep1901252@gmail.com" className="text-blue-500 hover:underline">mandeep1901252@gmail.com</a>
                </p>
                <p className="text-lg mb-4">
                    LinkedIn: <a href="https://www.linkedin.com/in/mandeep-kaur-1ba82b224/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> LinkedIn Profile</a>
                </p>
                <p className="text-lg">
                    GitHub: <a href="https://github.com/Mandeep23200" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github-profile</a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
