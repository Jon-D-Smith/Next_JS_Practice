import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Buttons from '../comps/Buttons';

const Form = () => {
    const [adjective, setAdjective] = useState()

    const handleAdjectiveChange =(e) => {
        e.preventDefault()
        setAdjective(e.target.value)
    }
    return ( 
        <>
    <form noValidate autoComplete="off">
      <TextField label="Adjective" variant="filled"  value={adjective} onChange={handleAdjectiveChange} />
    </form>
    {adjective}
    </>
     );
}
 
export default Form;