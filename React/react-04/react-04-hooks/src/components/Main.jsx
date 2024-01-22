import './Main.css'
import GenMxLogo from '../assets/generation_logo.jpg'



const Main = () => {
return (
    <>
    <div className="main--container">
<div className="main--head">
    <a href="https://mexico.generation.org/" target='_blank' rel="noreferrer">
<img className='main--logo' src={ GenMxLogo } alt="logo Gen Mex" />
    </a>
</div>
<h1>React + Vite</h1>
<h2>Astros API</h2>
    </div>
    </>
)
}

export default Main;