import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Buttons from '../comps/Buttons';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import styles from '../styles/Form.module.css'

const Form = () => {
    const [adjective, setAdjective] = useState('')
    const [noun, setNoun] = useState('')
    const [story, setStory] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [choice, setChoice] = useState(1)
    const stories = [
        `There once was a ${noun} with a ${adjective} balloon`,
        `A ${adjective} ${noun} came to life`,
        `There once was pop star with ${adjective} ${noun}`
    ]

    const handleAdjectiveChange =(e) => {
        setAdjective(e.target.value)
    }
    const handleNounChange =(e) => {
        setNoun(e.target.value)
    }

    const handleChoiceChange = (e) => {
        setChoice(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        setIsVisible(true)
        setStory(stories[choice])
    }
    return ( 
        <>
    <form noValidate autoComplete="off" onSubmit={handleSubmit} className={styles.container}>
    <InputLabel id="adjective-select" >Adjective</InputLabel>
      <TextField labelId="adjective-select" label="Adjective" variant="filled" name="adjective"  value={adjective} onChange={handleAdjectiveChange} className={styles.input1}/>
      <InputLabel id="Noun-select" >Noun</InputLabel>
      <TextField labelId="Noun-select" label="Noun" variant="filled" name="noun"  value={noun} onChange={handleNounChange} className={styles.input1}/>
      <InputLabel id="choice-select" >Story</InputLabel>
      <Select
          labelId="choice-select"
          id="choice-selector"
          value={choice}
          onChange={handleChoiceChange}
          className={styles.input1}
        >
          <MenuItem value={0}>1</MenuItem>
          <MenuItem value={1}>2</MenuItem>
          <MenuItem value={2}>3</MenuItem>
        </Select>

      <br />
      <Buttons text='Generate Story' variant="contained" color="primary" className={styles.inputButton} handleClick={handleSubmit} />
    </form>
    <div className={styles.story}>
        <h1>Your story:</h1>
    {isVisible && <p className={styles.red}>{story}</p>}
    </div>
    
    </>
     );
}
 
export default Form;