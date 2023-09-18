import './LeftCompo.css';

const LeftCompo = ()=>{
    return (
        <div className="left">
            <div>
                <h4>Logo</h4>
            </div>
            <div>
                <h1>Board.</h1>
            </div>
            <div className="social-icons">
                <span>
                <i class="fa-brands fa-square-github"></i>
                </span>
                <span>
                <i class="fa-brands fa-square-twitter"></i>
                </span>
                <span>
                <i class="fa-brands fa-linkedin"></i>
                </span>
                <span>
                <i class="fa-brands fa-discord"></i>
                </span>
            </div>
        </div>
    )
}

export default LeftCompo;