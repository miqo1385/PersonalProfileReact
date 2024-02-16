import profilePic from './50104AE2-DE48-41E5-9652-A59AB93E2457.jpg'


function Hobbies(){
    return(
        <div className='hobbies'>
            <img className='hobbies-image' src={profilePic} alt='profile picture'></img>
            <h2>Miguel I Quintana Olivares</h2>
            <ul>
                <li>I like to Mountain Bike</li>
                <li>I like Skiing</li>
                <li>I like go to the Gym</li>
            </ul>

        </div>
    );
}

export default Hobbies