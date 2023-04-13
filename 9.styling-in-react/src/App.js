import './App.css';
import Button from './components/Button';
import ButtonWithProps from './components/ButtonWithProps';
import ProfileWithCSSModule from './components/ProfileWithCSSModule';
import ProfileWithExternalStyle from './components/ProfileWithExternalStyle';
import ProfileWithInlineStyle from './components/ProfileWithInlineStyle';


function App() {
  const inlineStyle = {color: '#f00', backgroundColor: '#ff0', padding: '40px'}
  return (
    <div className="App">
     <h1 style={inlineStyle}>Welcome to Styling in React</h1>
     <div>
      <ProfileWithInlineStyle />
      <ProfileWithExternalStyle />
      <ProfileWithCSSModule />

      <Button>I am not inverted</Button>
      <Button inverted={true}>I am inverted</Button>

      <ButtonWithProps>I am inverted</ButtonWithProps>
      <ButtonWithProps inverted={true}>I am not inverted</ButtonWithProps>
      </div>
    </div>

  );
}

export default App;
