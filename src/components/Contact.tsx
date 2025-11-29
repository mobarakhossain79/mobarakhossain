import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from 'lucide-react';
import { TextareaProps } from './ui/textarea';


const Card = ({ className, children }) => (
  <div className={`rounded-2xl ${className}`}>{children}</div> 
);

const Input = ({ className, ...props }) => (
  <input
    className={`w-full p-3 rounded-lg bg-slate-50 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${className}`}
    {...props}
  />
);

const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea
    className={`w-full p-3 rounded-lg bg-slate-50 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none ${className}`}
    {...props}
  />
);

const Label = ({ className, ...props }) => (
  <label className={`text-sm font-medium text-slate-700 ${className}`} {...props} />
);

const Button = ({ className, children, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
    {...props}
  >
    {children}
  </button>
);

// A custom toast notification system to replace useToast
const Toast = ({ title, description, show, onHide }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <div
      className={`fixed top-5 right-5 w-auto max-w-sm p-4 rounded-lg shadow-lg bg-white text-slate-900 border border-primary transition-all duration-300 ease-in-out ${
        show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <p className="font-bold text-primary">{title}</p>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};

const useToast = () => {
    const [toastState, setToastState] = useState({ show: false, title: '', description: '' });

    const toast = ({ title, description }) => {
        setToastState({ show: true, title, description });
    };

    const hideToast = () => {
        setToastState(prev => ({ ...prev, show: false }));
    };

    return { toast, toastState, hideToast };
};


// --- Main Contact Component ---
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast, toastState, hideToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, you would send the form data to a backend here.
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      value: "mobarakhossainjoy045@gmail.com",
     
    },
    {
      icon: Phone,
      value: "+880 1870367939",
      href: "tel:+880 1870367939"
    },
    {
      icon: MapPin,
      value: "Moinartek, Uttar Khan, Dhaka-1230, Bangladesh",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  // Define your colors here to be used in Tailwind classes
  const colors = {
    primary: '#45C7F0',
    secondary: '#253E87',
  };

  return (
    // We inject a style tag to define CSS variables for our brand colors.
    // This makes them easily reusable in Tailwind's arbitrary value syntax.
    <>
      <style>{`
        :root {
          --primary: ${colors.primary};
          --secondary: ${colors.secondary};
        }
      `}</style>
      
      <Toast title={toastState.title} description={toastState.description} show={toastState.show} onHide={hideToast} />

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-black min-h-screen flex items-center justify-center font-sans">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-slate-900">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-2 space-y-10 flex flex-col justify-center">
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{color: colors.secondary}}>Get in Touch</h3>
                <p className="text-slate-600 leading-relaxed">
                  I'm always excited to work on new projects. Whether you have a question or just want to say hi, my inbox is always open!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-white rounded-full shadow-md group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-medium text-lg text-slate-700 group-hover:text-primary transition-colors duration-300">
                      {item.value}
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-white rounded-full text-secondary"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3">
               <Card className="bg-white border border-slate-200 p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={undefined}>Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="" className={undefined} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={undefined}>Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="" className={undefined} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className={undefined}>Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Let's build something!" className={undefined} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className={undefined}>Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your amazing project..." />
                  </div>

                  <Button
                       type="submit"
                       size="lg"
                      className="w-full text-lg py-3 px-6 text-black font-bold bg-primary 
                       hover:bg-cyan-300 shadow-lg shadow-primary/30 hover:shadow-cyan-300/40 transition-all duration-300 group transform hover:-translate-y-1
                      border-2 border-black/10 rounded-lg">
                        Send Message
                         <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                         </Button>

                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;


