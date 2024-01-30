import "../app/css/nav.css";

function Nav(){
    return <div className="header">
        <div className="header-marquee">
            <div className="marquee">
                &nbsp;
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
                <div className="marquee-item">STAY THIRSTY FOREVER</div>
            </div>
        </div>
        <div className="nav">
            <div className="nav-logo-container">
                <img src="/assets/icons/thirsty.png" alt="Thirsty" />
            </div>
            <div className="nav-content">
                <a href="https://wearthirsty.com/ww">Wearthirsty</a>
                <a href="https://thirstylaboratory.com/">Thirstylabs</a>
                <a href="https://thirstysonics.com/">Thirsty Sonics</a>
                <a href="https://thirstynalia.com/">Thirstynalia</a>
            </div>
            <div className="nav-options">
                {/* <button type="button" className="thirsty-button">Become a memeber</button> */}
                <a href="/login" className="nav-login-btn">Login</a>
            </div>
        </div>
    </div>
}

export default Nav;