import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password)
    } 

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
      
"Explore a world of beautiful homes tailored to your unique style and preferences. Whether you're looking for a cozy apartment or a spacious family home, we are here to help you find the perfect space to fit your lifestyle and needs."
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label" >
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Do not have an account? <Link to="/register"><a href="" className=" font-bold text-center w-full">Register</a></Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;