'use client'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CircleChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ContactProps {

}

const formSchema = z.object({
    name: z.string().min(1,
        { message: 'Please enter your name' }
    ),
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    message: z.string().min(1,
        { message: 'Please enter a message' }
    ),
    tag: z.enum(['Hiring', 'Freelance', 'Collaboration', 'Consultation'])
})
const Contact: FC<ContactProps> = ({ }) => {
    const tags = ['Hiring', 'Freelance', 'Collaboration', 'Consultation'];
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            tag: "Hiring"
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return <div
        id='contact'
        className='w-full h-full flex flex-col justify-center items-center mt-8'
    >
        <div className="w-full flex justify-start items-center my-4">
            <div
                className='text-4xl md:text-6xl font-semibold h-20
                           bg-gradient-to-r bg-clip-text  text-transparent 
                         from-green-400 via-blueTwo to-blue-500
                           animate-text'
            >
                <p>Let’s get in touch!</p>
            </div>
        </div>
        <div className='w-full flex flex-row'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full lg:w-1/2 flex flex-col justify-start items-start gap-4'>
                    <FormField
                        control={form.control}
                        name="tag"
                        render={({ field }) => (
                            <div>
                                <div className='text-xl md:text-2xl font-semi'>{"I'm interested in:"}</div>
                                <div className='flex flex-row justify-start items-start flex-wrap'>
                                    {tags.map((tag) => (
                                        <div key={tag} className='flex flex-row justify-center items-center'>
                                            <input
                                                {...field}
                                                type="radio"
                                                value={tag}
                                                className='h-4 w-4 hidden'
                                            />
                                            <label className={`text-xs md:text-lg
                                    cursor-pointer font-thin rounded-full px-4 py-2 mr-3 my-2
                                    ${field.value === tag ? 'bg-gradient-to-r from-[#82E0F9] via-[#8CEED6] to-[#93FABA] ' : 'bg-[#40404024]'}
                                    `}
                                                onClick={() => field.onChange(tag)}
                                            >{tag}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem
                                className='w-full'
                            >
                                <Input
                                    {...field}
                                    placeholder="Enter your name"
                                    className='w-full md:w-[450px] rounded-none'
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='w-full'
                            >
                                <Input
                                    {...field}
                                    type='email'
                                    placeholder="Enter your email"
                                    className='w-full md:w-[450px] rounded-none'
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className='w-full'
                            >
                                <Textarea
                                    placeholder="Write your message, and I'll get back to you as soon as possible."
                                    className="resize-none rounded-none w-full md:w-[450px]"
                                    {...field}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div
                        className='p-[1.5px] rounded-[16px] mb-2 mt-4 flex justify-center items-center
                    bg-gradient-to-r from-[#82E0F9] via-[#8CEED6] to-[#93FABA] '
                    >
                        <Button
                            type='submit'
                            className='flex items-center gap-2 px-3 py-2 md:px-12 md:py-4 rounded-[16px] w-full h-full dark:bg-[#0e1f2d] bg-gray-100 dark:text-blueOne text-[#82E0F9] hover:bg-transparent hover:text-black font-semibold dark:hover:bg-transparent dark:hover:text-black'
                        >
                            <span>Submit</span>
                            <CircleChevronRight size={24} />
                        </Button>
                    </div>
                </form>
            </Form>
            <div className="w-1/2 h-full hidden lg:flex justify-center items-center my-4">
                <Image
                    src={'/vn-map-hs-ts.png'}
                    alt={'Vietnam map'}
                    width={300}
                    height={300}
                />
            </div>
        </div>
    </div>
}

export default Contact