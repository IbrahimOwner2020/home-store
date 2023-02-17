import { AiOutlineSearch } from "react-icons/ai";
import topNav from "../../../data/topNav.json";
import { BiChevronDown } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const TopBar: React.FC = () => {
	return (
		<div className="pt-6 pb-4 px-8 flex items-center border-b">
			<h1 className="text-2xl font-semibold mr-5">Logo</h1>
			<div className="flex items-center justify-between py-2 border rounded-full px-4 border-grayLight2">
				<AiOutlineSearch className="w-6 h-6 text-grayLight2" />
				<input
					type="text"
					className="text-sm border-none py-0 placeholder:text-grayLight2 text-black focus:outline-0 focus:outline-transparent"
					name="search"
					placeholder="Search"
				/>
			</div>
			<nav>
				<ul className="flex items-center divide-x ml-16 divide-grayLight2">
					{topNav.map((item, index) => (
						<li key={index} className="px-3">
							<a
								href={item.link}
								className="text-sm text-black hover:text-grayLight1 flex items-center"
							>
								{item.name}{" "}
								{item.multiple && (
									<BiChevronDown className="w-5 h-5" />
								)}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<div className="ml-auto flex items-center space-x-6">
				<div className="flex items-center space-x-4">
					<button>
						<IoMdNotificationsOutline className="w-6 h-6 text-black" />
					</button>
					<button>
						<BiMessageRoundedDots className="w-6 h-6 text-black" />
					</button>
					<button>
						<HiOutlineShoppingCart className="w-6 h-6 text-black" />
					</button>
				</div>
				<div className="">
					<img
						src="https://picsum.photos/200"
						alt="profile"
						className="w-10 h-10 rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
