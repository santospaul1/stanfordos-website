"use client";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const initial={fullName:"",email:"",phone:"",organization:"",students:"",currentSystem:"",date:"",time:"",message:""};
export function DemoForm(){
 const [form,setForm]=useState(initial); const [loading,setLoading]=useState(false); const [sent,setSent]=useState(false); const [error,setError]=useState("");
 const update=(key:string,value:string)=>setForm(f=>({...f,[key]:value}));
 async function submit(e:FormEvent){e.preventDefault();setError("");setLoading(true);
   try{
    const service=process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID; const template=process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; const key=process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if(!service||!template||!key) throw new Error("Email delivery is not configured yet. Add the EmailJS values in .env.local.");
    await emailjs.send(service,template,{...form,receiver_name:process.env.NEXT_PUBLIC_DEMO_RECEIVER_NAME||"Stanfordos Team"}, {publicKey:key});
    setSent(true); setForm(initial);
   }catch(err){setError(err instanceof Error?err.message:"Unable to send your request. Please try again.");}finally{setLoading(false)}
 }
 if(sent)return <div className="success-card"><CheckCircle2 size={52}/><h2>Demo request received</h2><p>Thank you for your interest in Stanfordos. Your request has been sent to our team and we will contact you shortly.</p><button className="button primary" onClick={()=>setSent(false)}>Send another request</button></div>;
 return <form className="demo-form" onSubmit={submit}>
  <div className="form-grid"><Field label="Full name" required><input required value={form.fullName} onChange={e=>update("fullName",e.target.value)} placeholder="John Doe"/></Field>
  <Field label="Work email" required><input required type="email" value={form.email} onChange={e=>update("email",e.target.value)} placeholder="john@school.org"/></Field>
  <Field label="Phone number"><input value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="+254 7XX XXX XXX"/></Field>
  <Field label="School / organization" required><input required value={form.organization} onChange={e=>update("organization",e.target.value)} placeholder="ABC Academy"/></Field>
  <Field label="Number of students"><select value={form.students} onChange={e=>update("students",e.target.value)}><option value="">Select range</option><option>Under 200</option><option>200–500</option><option>500–1,000</option><option>1,000–2,000</option><option>2,000+</option></select></Field>
  <Field label="Current system"><select value={form.currentSystem} onChange={e=>update("currentSystem",e.target.value)}><option value="">Select one</option><option>No system / manual</option><option>Excel / spreadsheets</option><option>Another school system</option><option>Custom software</option></select></Field>
  <Field label="Preferred date"><input type="date" value={form.date} onChange={e=>update("date",e.target.value)}/></Field>
  <Field label="Preferred time"><select value={form.time} onChange={e=>update("time",e.target.value)}><option value="">Select time</option><option>09:00 AM</option><option>11:00 AM</option><option>02:00 PM</option><option>04:00 PM</option></select></Field>
  </div>
  <Field label="What would you like to see?"><textarea rows={5} value={form.message} onChange={e=>update("message",e.target.value)} placeholder="Tell us which areas you would like us to demonstrate..."/></Field>
  {error&&<div className="form-error">{error}</div>}
  <button className="button primary submit-button" disabled={loading}>{loading?<><Loader2 className="spin" size={18}/> Sending...</>:<>Request Demo <Send size={17}/></>}</button>
  <p className="form-note">By submitting this form, you agree that Stanfordos may contact you about your demo request.</p>
 </form>
}
function Field({label,required,children}:{label:string;required?:boolean;children:React.ReactNode}){return <label className="field"><span>{label}{required&&<b> *</b>}</span>{children}</label>}
