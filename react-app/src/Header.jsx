
function Header() {
    const isLogin = true;

    return (
        <header>
            {/*isLogin ? <button>dashboard</button>: <button>Login</button>*/}
            {isLogin ? (
                <div>
                    <button>Dashboard</button>
                     <button>Basket</button>
                </div>
            ) : (
            
            <button>Login</button>
            )}
            {isLogin && <button>Cart</button>}
        </header>
    );
}

export default Header; 