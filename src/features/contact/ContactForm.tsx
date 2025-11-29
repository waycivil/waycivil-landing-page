import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import type { ContactFormData } from "./contact-form.types";
import { contactFormSchema } from "./contact-form.schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

const ContactForm = () => {
  const { reset } = useForm();

  /* Inicialización del Form */
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  /* Submit */
  const onSubmit = async (data: ContactFormData) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <div
      className="rounded-2xl group relative p-px w-full tablet:max-w-xl overflow-hidden
     bg-linear-to-b  from-white/10 to-black/0"
    >
      <div
        className="px-6 pb-5 pt-16 rounded-2xl backdrop-blur-sm bg-linear-to-b from-black/80 to-black/50"
      >
        <form
          id="contact-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-14  mx-auto max-w-[calc(400/16*1rem)]"
        >
          <div className=" flex flex-col gap-2 ">
            <h1 className="text-2xl font-semibold text-primary">
              Contact sales
            </h1>
            <p className="text-base text-subtitle">
              Get in touch with our sales team. We'd love to hear more about
              your application's use-cases
            </p>
            <ul
              role="list"
              className="mt-4 space-y-2 text-sm font-medium text-subtitle"
            >
              <li className="flex gap-x-3 items-center">
                <Check className=" text-primary w-5" />
                Request a demo
              </li>
              <li className="flex gap-x-3 items-center">
                <Check className=" text-primary w-5" />
                Discuss plans and pricing
              </li>
              <li className="flex gap-x-3 items-center">
                <Check className=" text-primary w-5" />
                Explore an Enterprise contract
              </li>
            </ul>
          </div>
          <FieldGroup className="space-y-2">
            {/* Full name */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-name">
                    Full name <span className="text-primary">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="John Doe"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}{" "}
                </Field>
              )}
            />

            {/* Business email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-email">
                    Business email <span className="text-primary">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="john@company.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}{" "}
                </Field>
              )}
            />

            {/* Company */}
            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-company">
                    Company <span className="text-primary">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-company"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your Company"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}{" "}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-message">
                    How can we help <span className="text-primary">*</span>
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="contact-message"
                    aria-invalid={fieldState.invalid}
                    placeholder="I'm a software engineer..."
                    className="min-h-[120px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Privacy policy text */}
            <p className="text-sm text-[#B3B3B3]">
              By submitting this form, you agree to WayCivil's Privacy Policy,
              and that WayCivil can send you communications about its products
              and services.
            </p>

            {/* Talk to WayCivil */}
            <Field orientation="horizontal" className="w-full">
              <Button
                className=" hover:bg-primary-hover cursor-pointer w-full"
                type="submit"
                form="contact-form"
              >
                Submit
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
