import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCustomization } from "@/context/Customization";
import { formSchema } from "@/components/validators/auth";

type Input = z.infer<typeof formSchema>;

export default function RequestForm() {
  const { setOverview, setRequestForm, setConfirmation } = useCustomization();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      remark: "",
    },
  });

  const sendEmail = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_14yu5zq",
          "contact_form",
          formRef.current,
          "rNFoKQspzsejzmYqb"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setOverview(false);
            setRequestForm(false);
            setConfirmation(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const onSubmit = (data: Input) => {
    console.log(data);
    sendEmail();
  };

  return (
    <Card className="border-none outline-none rounded-none shadow-none">
      <CardHeader>
        <CardTitle>Persoonlijke gegevens</CardTitle>
        <CardDescription className="text-xs">* Verplicht veld</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-1"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Naam*</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail*</FormLabel>
                  <FormControl>
                    <Input placeholder="abc@xyz.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+88xxxxxxxxxx9" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Apt. 235 30 B North-Poinsettia Street"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input placeholder="13401" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stad*</FormLabel>
                  <FormControl>
                    <Input placeholder="Savar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opmerking</FormLabel>
                  <FormControl>
                    <Input placeholder="Voer opmerking in" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full text-right pt-8">
              <Button
                className="m-2"
                onClick={() => {
                  setOverview(true);
                  setRequestForm(false);
                  setConfirmation(false);
                }}
                variant="outline"
                type="button"
              >
                Terug
              </Button>
              <Button className="m-2" type="submit">
                Verzoek
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
