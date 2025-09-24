'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"

export default function BasicForm() {
    const [showDialog, setShowDialog] = useState(false)
    const [formValues, setFormValues] = useState<{name: string, email: string, phone: string}>()

    function submission(formData: FormData) {
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string

        setFormValues({ name, email, phone })
        setShowDialog(true)
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
                    Client Side Navigation
                </h3>
            </div>

            <div className="my-5">
                <form action={submission}>
                    <div className="space-y-3">
                        <div className="w-1/4">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" placeholder="Name" />
                        </div>
                        <div className="w-1/4">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="w-1/4">
                            <Label htmlFor="phone">Phone</Label>
                            <Input type="tel" id="phone" name="phone" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="my-5">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>

            <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Form Submitted Successfully</AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="space-y-1">
                                <div>Name: {formValues?.name}</div>
                                <div>Email: {formValues?.email}</div>
                                <div>Phone: {formValues?.phone}</div>
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