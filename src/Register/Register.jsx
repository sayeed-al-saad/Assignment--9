import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        const name = form.get("name");
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result);
            alert('Sign In Succefull')
        } )
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-[1200px] max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? <Link to="/login"><a href="" className="font-bold">Login</a></Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;