import React from 'react';

const services = [
    {
        title: 'Plagiarism Detection',
        description: 'Our advanced AI algorithms can detect plagiarism with high accuracy, ensuring your work is original.',
        icon: '🔍',
    },
    {
        title: 'Grammar Check',
        description: 'Improve your writing with our comprehensive grammar checking tool, which highlights errors and suggests corrections.',
        icon: '✍️',
    },
    {
        title: 'Style and Tone Analysis',
        description: 'Get feedback on the style and tone of your writing to ensure it meets the desired standards and audience expectations.',
        icon: '🎨',
    },
    {
        title: 'Reference Management',
        description: 'Our tool helps you manage your references and citations, ensuring they are correctly formatted and compliant with academic standards.',
        icon: '📚',
    },
    {
        title: 'Custom Feedback',
        description: 'Receive personalized feedback from our AI to help you improve your writing skills and achieve better results.',
        icon: '💬',
    },
];

function Service() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-green-600 text-white p-6 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">AI Paper Checker</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:text-gray-300">Home</a></li>
                            <li><a href="/services" className="underline">Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?writing,books")' }}>
                    <div className="text-black text-center">
                        <h2 className="text-5xl font-bold mb-4">Our Services</h2>
                        <p className="text-xl">We provide state-of-the-art AI paper checking services to help you achieve academic excellence.</p>
                    </div>
                </section>
                <section className="py-20">
                    <div className="container mx-auto text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform transition hover:scale-105">
                                    <div className="text-6xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 text-white text-center py-6">
                <div className="container mx-auto">
                    <p>&copy; 2025 AI Paper Checker. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Service;