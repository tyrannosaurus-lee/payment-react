// import logo from './logo.svg';
import './HeaderJSX.css';

function HeaderJSX() { // 함수이름 무조건 대문자
  return (
    <div className="App">
      <header className="sub_header">
        <div className="header">
          <div className="header_inner">
            <a className="top_logo" href="#none">
              <img
                src="https://contents-image.twayair.com/homepage/images/common/ico_tway.svg"
                alt="tway"
              / >
            </a>
          </div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      </header>
    </div>
  );
}

export default HeaderJSX;
