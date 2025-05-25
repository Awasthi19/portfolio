
"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/section-heading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTYSw5eJu4vZPUv7sUe_toNtRDAUHQzasDmri7tDahKQfZ2w/formResponse";
      const formDataToSend = new FormData();
      formDataToSend.append("entry.1222978686", formData.name); // Replace with actual entry ID for Name
      formDataToSend.append("entry.1269650341", formData.email); // Replace with actual entry ID for Email
      formDataToSend.append("entry.1960365084", formData.subject); // Replace with actual entry ID for Subject
      formDataToSend.append("entry.2034277300", formData.message); // Replace with actual entry ID for Message

      const response = await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // Required for Google Forms to avoid CORS issues
      });

      // Since mode is "no-cors", we can't check response.status, but submission should work
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="pt-20 -mt-20">
      <SectionHeading title="Contact Me" icon={<Mail className="h-6 w-6" />} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <Card className="bg-gray-900/50 border-red-900/30">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-gray-800 border-red-900/30 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-gray-800 border-red-900/30 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="bg-gray-800 border-red-900/30 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="bg-gray-800 border-red-900/30 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-900/30 text-green-100 border border-green-500/30 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-900/30 text-red-100 border border-red-500/30 rounded-md">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gray-900/50 border-red-900/30">
            <CardContent className="p-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <a href="mailto:sushilawasthi2999@gmail.com" className="text-red-400 hover:underline">
                    sushilawasthi2999@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-red-900/30">
            <CardContent className="p-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <a href="tel:+9779862466900" className="text-red-400 hover:underline">
                    (+977)-9862.466.900
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-red-900/30">
            <CardContent className="p-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-gray-400">Kathmandu, Nepal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
