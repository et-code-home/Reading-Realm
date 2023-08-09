import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <p>Join us in the Reading Realm, where every book transforms into a voyage of imagination. Immerse yourself in the world of literature and connect with fellow readers today!</p>
        <Link to='/books'>Get started!</Link>
        </>
        
    );
}

export default Home;