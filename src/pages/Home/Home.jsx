import React, { useState } from 'react';
import Select from "react-tailwindcss-select";
import Layout from '../../layouts/Layout';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';

const data = [
    {
        label: "HTML",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people 
    who are like offended by it, it doesn't matter.`,
    },
    {
        label: "React",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
        label: "Vue",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
    },
    {
        label: "Angular",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
        label: "Svelte",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
    },
];

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

export default function Home() {
    const [activeTab, setActiveTab] = useState("html");
    const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    const handleChange = (value) => {
        console.log("value:", value);
        this.setState({ animal: value });
    }
    return (
        <Layout>
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="nature image"
                />
                <figcaption className="absolute top-2/4 left-2/4 flex justify-between rounded-lg border border-white bg-white py-4 px-6 shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
                            <div>
                                <label htmlFor="startAt" className="block text-lg font-bold text-gray-700">Start At</label>

                                <Select
                                    value={data}
                                    onChange={handleChange}
                                    options={options}
                                />
                                {errors.startAt && <p className="text-red-500 text-sm mt-1">{errors.startAt.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="endAt" className="block text-sm font-medium text-gray-700">End At</label>
                                <select
                                    id="endAt"
                                    {...register("endAt", { required: "End At is required" })}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Select an option</option>
                                    <option value="Option1">Option 1</option>
                                    <option value="Option2">Option 2</option>
                                    <option value="Option3">Option 3</option>
                                </select>
                                {errors.endAt && <p className="text-red-500 text-sm mt-1">{errors.endAt.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="startWhen" className="block text-sm font-medium text-gray-700">Start When</label>
                                <Controller
                                    control={control}
                                    name="startWhen"
                                    rules={{ required: "Start When is required" }}
                                    render={({ field }) => (
                                        <ReactDatePicker
                                            id="startWhen"
                                            selected={field.value}
                                            onChange={(date) => field.onChange(date)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    )}
                                />
                                {errors.startWhen && <p className="text-red-500 text-sm mt-1">{errors.startWhen.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="endWhen" className="block text-sm font-medium text-gray-700">End When</label>
                                <Controller
                                    control={control}
                                    name="endWhen"
                                    rules={{ required: "End When is required" }}
                                    render={({ field }) => (
                                        <ReactDatePicker
                                            id="endWhen"
                                            selected={field.value}
                                            onChange={(date) => field.onChange(date)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    )}
                                />
                                {errors.endWhen && <p className="text-red-500 text-sm mt-1">{errors.endWhen.message}</p>}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </figcaption>
            </figure>
        </Layout>
    )
}



