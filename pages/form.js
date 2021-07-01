import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Buttons from '../comps/Buttons';

const Form = () => {
    const [adjective, setAdjective] = useState()

    const [story, setStory] = useState(`There once was a boy with a ${adjective} balloon`)
    const [isVisible, setIsVisible] = useState(false)

    const handleAdjectiveChange =(e) => {
        e.preventDefault()
        setAdjective(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        setIsVisible(true)
    }
    return ( 
        <>
    <form noValidate autoComplete="off">
      <TextField label="Adjective" variant="filled"  value={adjective} onChange={handleAdjectiveChange} />
      <Buttons text='Generate Story' variant="contained" color="primary" handleClick={handleSubmit} />
    </form>
    {isVisible && <p>{story}</p>}
    </>
     );
}
 
export default Form;