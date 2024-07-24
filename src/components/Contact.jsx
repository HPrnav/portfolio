import React from 'react'
import Section_title from './Section_title'

function Contact() {
    const [result, setResult] = React.useState("");
    
    const send_mail = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if(!formData.get('name')){

            alert("plz enter your name");
            return ;
         }
        else if(!formData.get('email')){
            alert("plz enter your email");
            return ;
         }
        else if(!formData.get('message')){
            alert("plz enter your message");
            return;
         }
         
        

        setResult("Sending....");
         formData.append("access_key", "55d7d238-dfe5-44bd-8ce8-1f8e0bb338cc");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Form Submitted Successfully")
        //   event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <>
    <Section_title title={'contact'}/>
    <form onSubmit={send_mail}>
        <div className='max-w-[600px] p-4 mx-auto flex flex-col gap-2 items-start border border-yellow-300'> 
            <p className='text-sm text-gray-400'># FILL THE FORM AND CONTACT VIA MAIL</p>
            <div className='flex gap-10 w-full' >
                <input className='bg-slate-300 border rounded-md pl-5 w-96 ' type="email"name='email' placeholder='enter your e-mail' />
                <input className='bg-slate-300 border rounded-md pl-5' type="text" name='name' placeholder='yourname'/>
            </div>
            <input className=' w-full h-36 bg-slate-300 border rounded-md pl-5' type="text" name='message' placeholder='enter your message' />
            <button type='submit' className='w-full border border-red-700 rounded-lg hover:bg-red-600 hover:text-yellow-500 bg-yellow-400 font-bold '>SEND MAIL</button>
            <p className='text-white'>{result}</p>
        </div>
    </form>
    </>
  )
}

export default Contact


  