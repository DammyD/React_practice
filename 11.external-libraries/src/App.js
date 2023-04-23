import Button from '@mui/material/Button';
import './App.css';

// Theming

function App() {
  return (
    <div className="App">
    <Button variant="contained" color={'success'} fullWidth={true} size={'small'}>Hello World</Button>
    <Button variant="contained" color={'error'} fullWidth={false} size={'medium'}>Click Me</Button>
    <Button variant="contained" color={'warning'} fullWidth={true} size={'large'}>I am a Rockstar Engineer</Button>
    <Button variant="contained" color={'info'} fullWidth={false} size={'small'}>Hello World</Button>
    </div>
  );
}

export default App;
