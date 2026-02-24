import { useState } from 'react';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        const credentials = { email, password }
        // Login Versuch starten…
        console.log(credentials)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='email' value={email} 
                   onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='password' value={password} 
                   onChange={e => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};