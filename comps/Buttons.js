import Button from '@material-ui/core/Button';
const Buttons = ({text, handleClick, variant, color}) => {
    return ( 
    <Button variant={variant} color={color} onClick={handleClick}>
      {text}
    </Button>
     );
}
 
export default Buttons;