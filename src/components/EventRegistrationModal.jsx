import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Calendar, Clock, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../hooks/use-toast";

const eventSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().min(10, "Please enter a valid phone number"),
  guests: z.string().min(1, "Please provide guest count"),
  date: z.string().optional(), 
  message: z.string().max(1000).optional(),
});

const EventRegistrationModal = ({ event, isOpen, onClose, isInquiry = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "1",
      date: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isOpen) form.reset();
  }, [isOpen, form]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: isInquiry ? "Inquiry Sent!" : "Registration Successful!",
      description: isInquiry 
        ? "Our coordinator will contact you shortly regarding your private event."
        : `You're set for ${event?.title}! Check your email for details.`,
    });
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-[2rem]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl pr-8 text-stone-900">
            {isInquiry ? "Private Event Inquiry" : "Reserve Your Spot"}
          </DialogTitle>
        </DialogHeader>

        {!isInquiry && event ? (
          <div className="bg-stone-50 rounded-2xl p-4 mb-4 border border-stone-100">
            <h3 className="font-display text-lg text-stone-900 mb-2">{event.title}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-stone-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />{event.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{event.time}</div>
            </div>
          </div>
        ) : (
          <div className="bg-primary/10 rounded-2xl p-4 mb-4 border border-primary/20">
            <p className="text-sm text-stone-700 leading-relaxed">
              Host your celebration at <strong>The Amber Oven</strong>. Fill out the details below for a custom experience.
            </p>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl><Input placeholder="Jane Doe" className="rounded-xl" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input type="email" placeholder="jane@example.com" className="rounded-xl" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl><Input type="tel" placeholder="(555) 000-0000" className="rounded-xl" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="guests" render={({ field }) => (
                <FormItem>
                  <FormLabel>{isInquiry ? "Expected Guests" : "No. of Guests"}</FormLabel>
                  {isInquiry ? (
                    <FormControl><Input type="number" placeholder="e.g. 20" className="rounded-xl" {...field} /></FormControl>
                  ) : (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger></FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? "Guest" : "Guests"}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            {isInquiry && (
              <FormField control={form.control} name="date" render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Event Date</FormLabel>
                  <FormControl><Input type="date" className="rounded-xl" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            )}

            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>{isInquiry ? "Tell us about your event" : "Dietary Restrictions (Optional)"}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={isInquiry ? "Birthday, Bridal Shower, etc..." : "Allergies..."}
                    className="rounded-xl resize-none"
                    rows={3}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button 
              type="submit" 
              className="w-full bg-stone-900 text-white hover:bg-primary hover:text-stone-900 rounded-full py-6 text-lg font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : (isInquiry ? "Send Inquiry" : "Complete Reservation")}
              {!isSubmitting && isInquiry && <Send className="ml-2 w-4 h-4" />}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EventRegistrationModal;