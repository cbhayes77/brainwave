import { useState } from "react";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters long" : "";
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Please enter a valid email address" : "";
      }
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters long" : "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim()) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "subject") {
        // subject is optional
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      setSubmitStatus("Please fix the errors above.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mgvredbe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("There was an error sending your message. Please try again.");
      }
    } catch {
      setSubmitStatus("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <SEO
        title="Contact"
        description="Get in touch with CB Hayes for your next project. Ready to work together on creating amazing digital experiences."
        url="/contact"
      />
      <Container className="max-w-2xl">
        <header className="text-center">
          <h1 className="heading-page">Get In Touch</h1>
          <p className="mt-2 body-default">
            Ready to work together? Send me a message and I'll get back to you as soon as possible.
          </p>
        </header>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-6" noValidate>
          {/* Form Status - ARIA Live Region */}
          <div
            aria-live="polite"
            aria-atomic="true"
            className={
              submitStatus
                ? "text-center p-3 rounded-lg " +
                  (submitStatus.includes("Thank") ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300")
                : "sr-only"
            }
            id="form-status"
          >
            {submitStatus}
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="label-form">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={errors.name ? "true" : "false"}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition ${
                errors.name ? "border-red-400" : "border-white/20"
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <div id="name-error" role="alert" className="text-red-400 text-sm mt-1">
                {errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="label-form">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition ${
                errors.email ? "border-red-400" : "border-white/20"
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <div id="email-error" role="alert" className="text-red-400 text-sm mt-1">
                {errors.email}
              </div>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="label-form">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="label-form">
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={errors.message ? "true" : "false"}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition resize-vertical ${
                errors.message ? "border-red-400" : "border-white/20"
              }`}
              placeholder="Tell me about your project or idea..."
            />
            {errors.message && (
              <div id="message-error" role="alert" className="text-red-400 text-sm mt-1">
                {errors.message}
              </div>
            )}
          </div>

          {/* Hidden field for form identification */}
          <input type="hidden" name="_subject" value="New contact from portfolio website" />

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>

        {/* Alternative Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:christopher.brandon.hayes@gmail.com" className="text-white/80 hover:text-white transition">
              christopher.brandon.hayes@gmail.com
            </a>
            <span className="hidden sm:block text-white/30">•</span>
            <a href="tel:+1-314-223-0739" className="text-white/80 hover:text-white transition">
              (314) 223-0739
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
