import { createBoard } from '@wixc3/react-board';
import Classnames from 'classnames';

export default createBoard({
    name: 'Header',
    Board: () => <header className="nav-bar">
        <div className="nav-bar">
            <img src="/src/assets/images/logo.png" alt="" className="logo" /></div>
        <div>
            <nav className={Classnames('nav-button', 'btn')}><a href="/home" className="nav-button">Dashboard</a> | <a href="/projects" className="nav-button">Get Reviews</a> | <a href="/about" className="nav-button">Your Requests</a> | </nav>
        </div>
    </header>,
    isSnippet: true,
});
