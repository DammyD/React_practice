import React, { useRef, useState } from 'react'

const UncontrolledFormWithUsedRef = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value;
        // alert(email + ' ' + password);
    }
  return (
    <div style={{padding: '8px'}}>
        <form onSubmit={handleSubmit}>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="email">Email</label>
                <input id="email" type="text" ref={emailRef}/>
            </div>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="password">Password</label>
                <input id="password" type="password" ref={passwordRef}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

const UncontrolledFormUsingFormEvent = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const email =  event.target.elements.email.value;
        const password = event.target.elements.password.value;

  return (
    <div style={{padding: '8px'}}>
        <form onSubmit={handleSubmit}>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="email">Email</label>
                <input id="email" type="text" />
            </div>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
}

const ControlledForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    return (
        <div style={{padding: '8px'}}>
               <form onSubmit={handleSubmit}>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="email">Email</label>
                <input id="email" type="text" value={email} onChange={handleEmail}/>
            </div>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="password">Password</label>
                <input id="password" type="password" value={password} onChange={handlePassword}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}
}

// initial state values
const INITIAL_STATE = { email: '', password: '', rememberPassword: false, sex: '', typeOfCar: '' }

const VALIDATION = {
    email: [
        {
            isValid: (value) => !!value,
            message: 'Is required.',
        },
        {
            isValid: (value) => /\S+@\S+\.\S+/.test(value),
            message: 'Needs to be an email.',
        },
    ],
    password: [
        {
            isValid: (value) => !!value,
            message: 'Is required.',
        },
        {
            isValid: (value) => value.length > 8,
            message: 'Password characters must be greater than 8.',
        },
    ],
};

const getErrorFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
        if (!VALIDATION[key]) return acc;

        const errorsPerField = VALIDATION[key]
            // get a list of potential errors for each field
            // by running through all the checks
            .map((validation) => ({
                isValid: validation.isValid(form[key]),
                message: validation.message,
            }))
            // only keep the errors
            .filter((errorPerField) => !errorPerField.isValid);

        return { ...acc, [key]: errorsPerField };
    }, {});

const OptimisedControlledForm = (props) => {
    const [form, setForm] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { id, type, checked, value, name } = event.target;
        if (type === 'checkbox') {
            setForm(prevState => ({
                ...prevState,
                [id]: checked
            }));
        } else if (type === 'radio') {
            setForm(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else {
            setForm(prevState => ({
                ...prevState,
                [id]: value
            }));
        }
    }

    const errorFields = getErrorFields(form);
    console.log(errorFields);

    const handleSubmit = (event) => {
        event.preventDefault();

        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return;
        
        console.log('Email is ' + form.email)
        console.log('Password is ' + form.password)
        console.log('Remember Password is ' + form.rememberPassword)
        console.log('Sex is ' + form.sex)
        console.log('Preferred Car is ' + form.typeOfCar)

        props.submitForm(form)
        setForm(INITIAL_STATE)
    }

    return (
        <div style={{padding: '8px'}}>
               <form onSubmit={handleSubmit}>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="email">Email</label>
                <input id="email" type="text" value={form.email} onChange={handleChange}/>
            </div>
            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="password">Password</label>
                <input id="password" type="password" value={form.password} onChange={handleChange}/>
            </div>

            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="rememberPassword">Remember Password</label>
                <input id="rememberpassword" type="checkbox" name="rememberPassword"
                checked={form.rememberPassword} onChange={handleChange}/>
            </div>

            <div style={{padding: '8px'}}>
                <label style={{display: 'block'}} htmlFor="sex">Sex</label>
                <input type="radio" name="sex" value="male" checked={form.sex === "male"}  onChange={handleChange} />
                Male
                <input type="radio" name="sex" value="female" checked={form.sex === "female"}  onChange={handleChange} />
                Female
                </div>

                <div style={{padding: '8px'}}>
                    <label style={{display: 'block'}} htmlFor="typeOfCar">Preferred Choice of Car</label>
                    <select id="typeofCar" name="typeofCar" value={form.typeOfCar} onChange={handleChange}>
                        <option value="">Please select an option</option>
                        <option value="toyota">Toyota</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="tesla">Tesla</option>
                        <option value="honda">Honda</option>
                    </select>
                </div>
            <button type='submit'>Submit</button>
        </form>

        </div>
    )
}
export default {UncontrolledFormWithUsedRef,  UncontrolledFormUsingFormEvent, ControlledForm, OptimisedControlledForm}