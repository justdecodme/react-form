import * as Yup from 'yup'

export const validation = Yup.object({
    firstName : Yup.string().required('Your Name is Required.'),
    lastName : Yup.string().required('Your Name is Required.'),
    email: Yup.string().email('Your Email is not valid. Email addresses should follow the format user@domain.com.').required('Your Email is Required'),
    companyName : Yup.string().required('Your Company Name is Required.'),
    companyUrl : Yup.string().required('Your Company Website / URL is Required.'),
    role : Yup.string().required('Your Role / Designation is Required.'),
    whereToSell : Yup.string().required('Where do you want to sell? is Required.'),
    industry : Yup.string().required('Which industry do you focus on? is Required.'),
    whoToSell : Yup.string().required('Who do you sell to? is Required.'),
    howToFindLead : Yup.string().required('How do you find a good lead right now? is Required.'),
    skills : Yup.string().required('What are the main skills / strengths that you position to win the deal? is Required.'),
})