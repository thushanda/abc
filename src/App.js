import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Home from './components/home';

function App() {
  const btn = document.querySelector("#btn");
  const sidebar = document.querySelector(".sidebar")
  const profile = document.querySelector(".profile_img")


  btn.onclick = function(){
    sidebar.classList.toggle("active")
  }



  return (
    <div className="sidebar">
      <div className='show_side'>
        <MenuIcon className='icon_1' id="btn" />
      </div>

      <div className='profile_img'>
        <img className='img' src='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg&uid=R103560205&ga=GA1.2.2111638521.1692885976&semt=sph' />
        <div className='profile_content'>
          <p className='name'>Hello, Thushan</p>
          <p className='job_role'>Manager</p>
        </div>
      </div>

      <ul>
        <li>
          <a href='#'>
            <DashboardOutlinedIcon className='icon'/>
            <span className='links_name'>Dashboard</span>
          </a>
          <span className='tool_tip'>Settings</span>
        </li>
        <li>
          <a href='#'>
            <DashboardOutlinedIcon className='icon'/>
            <span className='links_name'>User</span>
          </a>
          <span className='tool_tip'>Settings</span>
        </li>
        <li>
          <a href='#'>
            <DashboardOutlinedIcon className='icon'/>
            <span className='links_name'>Supplier</span>
          </a>
          <span className='tool_tip'>Settings</span>
        </li>
        <li>
          <a href='#'>
            <DashboardOutlinedIcon className='icon'/>
            <span className='links_name'>Customer</span>
          </a>
          <span className='tool_tip'>Customer</span>
        </li>
        <li>
          <a href='#'>
            <DashboardOutlinedIcon className='icon'/>
            <span className='links_name'>Account</span>
          </a>
          <span className='tool_tip'>Account</span>
        </li>
      </ul>
      <div className='settings'>
        <ul>
          <li>
              <a href='#'>
                <DashboardOutlinedIcon className='icon'/>
                <span className='links_name'>Settings</span>
              </a>
              <span className='tool_tip'>Settings</span>
            </li>
        </ul>
      </div>

      <div className='home_content'>
        <Home/>
      </div>
      
    </div>
  );
}

export default App;
