import gitLogo from '../About/gitLogo.png';

export default function About() {

    return (
        <div className='about-us'>
            <br />
            <h3>Meet Our Amazing Dev Team!</h3>
            <br />
            <h3>Our Mission</h3>
            <p>Our mission is to develop innovative software solutions that simplify the lives of our users. We are passionate about coding and strive to create products that are not only functional but also elegant and user-friendly.</p>
            <hr />
            <h3>Our Team</h3>
            <strong>Joseph Rodriguez</strong>
            <p>Full Stack Software Engineer in Progress | Interests - ?, Tech - JavaScript, React...</p>
            <div className='github-link'>
                <a href='https://github.com/jRodriguezIV'>
                <img className='gitLogo' src={gitLogo} alt='Github' /> 
                </a>
            <hr />
            </div>
            <br />
            <strong>Shareeka 'Sherry' Epps</strong>
            <p>Full Stack Software Engineer in Progress | Interests - Data Analysis, Tech - JavaScript, React, Human Rights & Everything Adventorous</p>
            <div className='github-link'>
                <a href='https://github.com/shaketastic'>
                <img className='gitLogo' src={gitLogo} alt='Github' />
                </a>
            </div>
            <br />
            <hr />
            <div className='contact'>
                <strong>Project Description | Youtube Clone</strong>
                <p>We created this Project to sharpen our skills and showcase what we have learned so far.</p>
                <strong>Contact Us</strong>
                <p>If you have any questions or feedback, please feel free to contact us on [GitHub] We would love to hear from you!</p>
            </div>
        </div>
        
    );
}