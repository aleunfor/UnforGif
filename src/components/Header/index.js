export default function Header() {
    return (
        <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <h1>UnforGif</h1>
            </a>

            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-secondary me-2">Login</button>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </header>
    )
}