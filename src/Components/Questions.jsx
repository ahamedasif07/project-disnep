import { useEffect, useState } from "react";
import Question from "./Question";


const Questions = () => {

    const [faqs,setFaq]=useState([])

    useEffect(()=>{
       fetch('faq.json')
       .then(res => res.json())
       .then(data => setFaq(data))
    },[])
    console.log(faqs)

    return (
        <div>
            {
             faqs.map(faq => <Question faq={faq} key={faq.id}></Question>)
            }
            
        </div>
    );
};

export default Questions;