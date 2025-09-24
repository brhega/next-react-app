"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { set, z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ChevronLeftIcon } from "lucide-react"
import { useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

const formSchema = z.object({
  username: z.string()
    .min(1, { message: "Username is required." })
    .min(8, { message: "Username must be at least 8 characters." }),
  email: z.string()
    .min(1, { message: "Email is required." })
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      { message: "Not a valid email." }
    ),
    phone: z.string().optional(),
})

export default function ProfileForm() {
    const [showDialog, setShowDialog] = useState(false);
    
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
        email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setShowDialog(true);
  }

  return (
    <div>
        <div className="flex gap-4">
            <Button asChild variant="secondary" size="icon" className="size-8">
                <Link href="/examples">
                    <ChevronLeftIcon />
                </Link> 
            </Button>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                React Hook Form
            </h3>
        </div>

        <div className="my-4">
            <p>This example uses the following tools to improve form functionality:</p>
            <ul className="list-disc pl-5">
                <li>
                    <a href="https://react-hook-form.com/" target="_blank" className="text-blue-600 underline">React Hook Form</a> - for managing form state.
                </li>
                <li>
                    <a href="https://zod.dev/" target="_blank" className="text-blue-600 underline">Zod</a> - for schema validation.
                </li>
                <li>
                    <a href="https://ui.shadcn.com/docs/components/form" target="_blank" className="text-blue-600 underline">shadcn/ui Form Components</a> - for built in, easy to use form components.
                </li>
            </ul>
        </div>

        <div className="my-5 w-1/4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>

        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Form Submitted Successfully</AlertDialogTitle>
                        <AlertDialogDescription asChild>
                            <div className="space-y-1">
                                <div>Name: {form.getValues("username")}</div>
                                <div>Email: {form.getValues("email")}</div>
                                <div>Phone: {form.getValues("phone")}</div>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setShowDialog(false)}>Close</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
    </div>
  )
}