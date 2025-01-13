import {
  MdOutlineHub as Logo,
  MdArticle as BlogIcon,
  MdSettings as SettingsIcon,
} from "react-icons/md";
import {
  FaSearch as SearchIcon,
  FaBookmark as BookmarkIcon,
  FaInfo as InfoIcon,
  FaUser as UserIcon,
} from "react-icons/fa";
import { AiFillFire as TrendingIcon } from "react-icons/ai";

//TODO: Make hover-color on Icons DRY

const sidebarMenu = [
  {
    name: "Explore",
    icon: <SearchIcon className="icon hover-color" />,
    view: "", //explore
  },
  {
    name: "Trending",
    icon: <TrendingIcon className="icon hover-color" />,
    view: "", //trending
  },
  {
    name: "Blog",
    icon: <BlogIcon className="icon hover-color" />,
    view: "", //blog
  },
  {
    name: "Bookmarks",
    icon: <BookmarkIcon className="icon hover-color" />,
    view: "", //bookmarks
  },
];

const sidebarGeneral = [
  {
    name: "Settings",
    icon: <SettingsIcon className="icon hover-color" />,
    view: "", //settings
  },
  {
    name: "About",
    icon: <InfoIcon className="icon hover-color" />,
    view: "", //about
  },
];

export default function Sidebar() {
  return (
    <aside>
      <div className="h-[10%] w-full">
        <a href="#" className="flex items-center justify-evenly w-full h-1/2">
          <Logo className="text-accent" size={25} />
          <h3>AI-Hub</h3>
        </a>
      </div>
      <div className="sidebar-container h-1/2">
        <h5 className=" w-full">Menu</h5>
        <ul className="h-[90%]">
          {sidebarMenu.map((item, index) => {
            return (
              <li key={index} className="group">
                <div className="hover-color">{item.icon}</div>
                <h6 className="hover-color">{item.name}</h6>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-container h-2/6">
        <h5>General</h5>
        <ul>
          {sidebarGeneral.map((item, index) => {
            return (
              <li key={index} className="group">
                <div className="hover-color">{item.icon}</div>
                <h6 className="hover-color">{item.name}</h6>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-1/6 w-full flex flex-col justify-around items-center">
        <h6 className="font-thin tracking-wide">Sign in to access more</h6>
      </div>
    </aside>
  );
}
