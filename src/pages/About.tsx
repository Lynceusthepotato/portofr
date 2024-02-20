import '../assets/AboutStyle.css';

type AboutSection = {
  showModal: (visible: boolean, type: number) => void;
}

export default function About ({showModal}: AboutSection) {
  return (
    <div className='is-about is-container'>
        <h2 style={{padding: '1rem'}}> About Me </h2>
        <p style={{padding: '1rem'}}> A nerd with an interest in art and technology, particularly in web applications and video game development. Eager to enhance my skills and learn new  things \ 0-0 / </p>
    </div>
  )
}
