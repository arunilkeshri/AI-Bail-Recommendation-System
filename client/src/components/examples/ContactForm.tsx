import ContactForm from '../ContactForm';
import { Toaster } from "@/components/ui/toaster";

export default function ContactFormExample() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div className="p-6 bg-background">
      <ContactForm onSubmit={handleSubmit} />
      <Toaster />
    </div>
  );
}