import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { is } from "zod/locales";

const registerFormSchema = z.object({
    username : z.string().min(4, "username harus lebih dari 4 karakter").max(10, "username maksimal 20 karakter"),
    password : z.string().min(8, "password harus lebih dari 8 karakter").max(10, "password maksimal 20 karakter"),
    repeatPassword : z.string(),
    umur : z.coerce.number().min(18),
    tanggal : z.coerce.date().min(new Date(), "tanggal harus lebih dari hari ini"),
    gender : z.enum(["male", "female"]),
    isPregnant : z.boolean().optional(),
    isMarried : z.boolean().optional(),
}).superRefine((data, ctx) =>{
    if(data.password !== data.repeatPassword){
        ctx.addIssue({
            code: "custom",
            message: "password dan konfirm password harus sama",
            path: ["repeatPassword"]
        })
    }
})

type registerFormSchema = z.infer<typeof registerFormSchema>

const FormWithReactHookForm = () => {
    const [showPassword, setShowPassword] = useState(false); 

    const form = useForm<registerFormSchema>({
        resolver: zodResolver(registerFormSchema)
    });

    const submited = (values:registerFormSchema) => {
        alert("form submitted");
        console.log(values);
    }

    return (
        <div>
            <h1>Ini Form With React Hook Form Page</h1>
            <form onSubmit={form.handleSubmit(submited)} style={{display:"flex", flexDirection:"column", gap:"8px", width:"200px"}}>
                <span style={{color:"red"}}>{form.formState.errors.username?.message}</span>
                <label htmlFor="">
                    Usename : 
                    <input type="text" {...form.register("username")} />
                </label>

                <span style={{color:"red"}}>{form.formState.errors.password?.message}</span>
                <label htmlFor="">
                    Password : 
                    <input type={showPassword ? "text" : "password" }{...form.register("password")} />
                </label>
               
                <span style={{color:"red"}}>{form.formState.errors.repeatPassword?.message}</span>
                <label htmlFor="">
                    Konfirm Password : 
                    <input type={showPassword ? "text" : "password" }{...form.register("repeatPassword")} />
                </label>
                <label htmlFor="">
                    <input type="checkbox" onChange={event => setShowPassword(event.target.checked)} />Show Password
                </label>

                
                <span style={{color:"red"}}>{form.formState.errors.umur?.message}</span>
                <label htmlFor="">
                    Umur : 
                    <input type="number" {...form.register("umur")} />
                </label>

                 <span style={{color:"red"}}>{form.formState.errors.tanggal?.message}</span>
                <label htmlFor="">
                    <input type="date" {...form.register("tanggal")} />
                </label>

                 <span style={{color:"red"}}>{form.formState.errors.gender?.message}</span>
                <label htmlFor="">Gender : 
                    <select {...form.register("gender")}>
                        <option value="">Pilih</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                {
                    form.watch("gender") === "female" ? (
                    <label htmlFor="">Hamil?
                        <input type="checkbox" {...form.register("isPregnant")} />
                    </label>
                ) : <label htmlFor="">Sudah Menikah?
                        <input type="checkbox" {...form.register("isMarried")} />
                    </label>
                }
               
              
                <button type="submit" style={{width:"fit-content"}}> register </button>
            </form>
        </div>
    )
}

export default FormWithReactHookForm;