import {Link} from 'react-router-dom';

function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username"></input>
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email"></input>
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password"></input>
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95">SIGN UP</button>
      </form>
      <div className='flex gap-2 mt-5 ml-28'> 
        <p>Already have an account?</p>
        <Link to = {"/sign-in"}>
          <span className='text-blue-800'>Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
