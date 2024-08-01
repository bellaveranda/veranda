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
  const {
    setOverview,
    setRequestForm,
    setConfirmation,
    model,
    freeStanding,
    standardType,
    profileColor,
    coveringMaterial,
    awning,
    fabricColor,
    leftWallType,
    leftWallMaterial,
    leftMaterialTransparency,
    leftAwning,
    leftAwningColor,
    leftWedgeMaterial,
    rightWallType,
    rightWallMaterial,
    rightMaterialTransparency,
    rightAwning,
    rightAwningColor,
    rightWedgeMaterial,
    frontWallType,
    frontLeftWallType,
    frontRightWallType,
    verticalAwningColor,
    frontMaterialTransparency,
    frontLeftMaterialTransparency,
    frontRightMaterialTransparency,
    width,
    height,
    depth,
  } = useCustomization();
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
      model: model,
      freeStanding: freeStanding ? "Yes" : "No",
      standardType: standardType,
      profileColor: profileColor,
      coveringMaterial: coveringMaterial,
      awning: awning,
      fabricColor: fabricColor,
      leftWallType: leftWallType,
      leftWallMaterial: leftWallMaterial,
      leftMaterialTransparency: leftMaterialTransparency,
      leftAwning: leftAwning ? "Yes" : "No",
      leftAwningColor: leftAwningColor,
      leftWedgeMaterial: leftWedgeMaterial ? "Yes" : "No",
      rightWallType: rightWallType,
      rightWallMaterial: rightWallMaterial,
      rightMaterialTransparency: rightMaterialTransparency,
      rightAwning: rightAwning ? "Yes" : "No",
      rightAwningColor: rightAwningColor,
      rightWedgeMaterial: rightWedgeMaterial ? "Yes" : "No",
      frontWallType: frontWallType,
      frontLeftWallType: frontLeftWallType,
      frontRightWallType: frontRightWallType,
      verticalAwningColor: verticalAwningColor,
      frontMaterialTransparency: frontMaterialTransparency,
      frontLeftMaterialTransparency: frontLeftMaterialTransparency,
      frontRightMaterialTransparency: frontRightMaterialTransparency,
      width: width.toString(),
      height: height.toString(),
      depth: depth.toString(),
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

            {/* Description Section */}
            <div className="hidden">
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="model" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="freeStanding"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="freeStanding" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="standardType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="standardType" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profileColor"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="profileColor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coveringMaterial"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="coveringMaterial" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="awning"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="awning" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fabricColor"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="fabricColor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="leftWallType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="leftWallType" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="leftWallMaterial"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="leftWallMaterial" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="leftMaterialTransparency"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="leftMaterialTransparency"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="leftAwning"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="leftAwning" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="leftAwningColor"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="leftAwningColor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="leftWedgeMaterial"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="leftWedgeMaterial" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rightWallType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="rightWallType" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rightWallMaterial"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="rightWallMaterial" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rightMaterialTransparency"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="rightMaterialTransparency"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rightAwning"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="rightAwning" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rightAwningColor"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="rightAwningColor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rightWedgeMaterial"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="rightWedgeMaterial" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frontWallType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="frontWallType" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frontLeftWallType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="frontLeftWallType" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frontRightWallType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="frontRightWallType" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verticalAwningColor"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="verticalAwningColor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frontMaterialTransparency"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="frontMaterialTransparency"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frontLeftMaterialTransparency"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="frontLeftMaterialTransparency"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frontRightMaterialTransparency"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="frontRightMaterialTransparency"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="width" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="height" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="depth"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="depth" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Description Section End */}

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
