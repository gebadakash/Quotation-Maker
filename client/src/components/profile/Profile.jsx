import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoCamera } from "react-icons/io5";
import bgPhoto from "../../assets/images/bg-cover.png";
import userPhoto from "../../assets/images/user.png";

const Profile = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">Profile</h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">Profile</li>
          </ol>
        </nav>
      </div>
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img src={bgPhoto} alt="profile cover" className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center" />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img src={userPhoto} alt="profile" />
              <label htmlFor="profile" className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2">
                <IoCamera />
                <input type="file" name="profile" id="profile" className="sr-only" />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">Danish Heilium</h3>
            <p className="font-medium">Ui/Ux Developer</p>
            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">About Me</h4>
              <p className="mt-4.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.</p>
            </div>
            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-black dark:text-white">Follow me on</h4>
              <div className="flex items-center justify-center gap-3.5">
                <a className="hover:text-primary" aria-label="social-icon" href="/profile"><FaFacebookF size={22} /></a>
                <a className="hover:text-primary" aria-label="social-icon" href="/profile"><FaTwitter size={23} /></a>
                <a className="hover:text-primary" aria-label="social-icon" href="/profile"><FaLinkedinIn size={23} /></a>
                <a className="hover:text-primary" aria-label="social-icon" href="/profile"><FaInstagram size={22} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
