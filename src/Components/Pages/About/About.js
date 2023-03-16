import gitLogo from '../About/gitLogo.png';

export default function About() {

    return (
        <div className='about-us'>
            <div>Meet our DevTeam!</div>
            <strong>Joseph Rodriguez</strong>
            <p>Full Stack Software Engineer in Progress | Interests - ?, Tech - JavaScript, React...</p>
            <div className='github-link'>
                <a href='https://github.com/jRodriguezIV'>
                <img className='gitLogo' src={gitLogo} alt='Github' />
                </a>
            </div>

            <strong>Shareeka 'Sherry' Epps</strong>
            <p>Full Stack Software Engineer in Progress | Interests - Data Analysis, Tech - JavaScript, React, Human Rights & Everything Adventorous</p>
            <div className='github-link'>
                <a href='https://github.com/shaketastic'>
                <img className='gitLogo' src={gitLogo} alt='Github' />
                </a>
            </div>
            <div className='project'>
                <h3>Project Description</h3>
                <p>We created a Yotube Clone to sharpen our skills and showcase what we hhave learned so far.</p>
            </div>
        </div>
        
    );
}