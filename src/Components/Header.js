function Header(props) {
    return (
    <header>
        <h1>Welcome back {props.user}</h1>
    </header>
    );
  }

Header.defaultProps = { user: ''}
  

export default Header