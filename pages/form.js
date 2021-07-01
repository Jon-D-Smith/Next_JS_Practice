import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Buttons from '../comps/Buttons';

const Form = () => {
    const [adjective, setAdjective] = useState('')
    const [story, setStory] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [choice, setChoice] = useState("1")
    const stories = [
        `There once was a boy with a ${adjective} balloon`,
        `A ${adjective} frisbee came to life`,
        `There once was pop star with ${adjective} hair`
    ]

    const handleAdjectiveChange =(e) => {
        setAdjective(e.target.value)
    }

    const handleChoiceChange = (e) => {
        setChoice(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        setIsVisible(true)
        setStory(stories[parseInt(choice)])
    }
    return ( 
        <>
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField label="Adjective" variant="filled" name="adjective"  value={adjective} onChange={handleAdjectiveChange} />
      <select onChange={handleChoiceChange}>
          <option value="0">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
      </select>
      <Buttons text='Generate Story' variant="contained" color="primary" handleClick={handleSubmit} />
    </form>
    {isVisible && <p>{story}</p>}
    </>
     );
}
 
export default Form;