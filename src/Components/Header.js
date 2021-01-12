function Header(props) {
    return (
    <div>
        <h1>Welcome to your application {props.user}</h1>
    </div>
    );
  }

Header.defaultProps = { user: 'Jeremy'}
  

export default Header