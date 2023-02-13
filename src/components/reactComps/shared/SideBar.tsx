import { useState } from "react";
import sideBar from "../../../data/sideBar.json";

const SideBar: React.FC = () => {
	const [priceRange, setPriceRange] = useState("small");
	return (
		<div className="bg-primary px-8 py-2 w-64 divide-y">
			{sideBar.map((item, index) => (
				<div key={index} className="space-y-3 py-4">
					<h2 className="font-semibold text-black text-lg">
						{item.title}
					</h2>
					<div className="flex flex-col space-y-3">
						{item.type === "checkbox" ? (
							<>
								{item.items.map((item, index) => (
									<div
										key={index}
										className="flex items-center"
									>
										<input
											type="checkbox"
											name={item.name}
											id={item.name}
											className="w-4 h-4 rounded border-gray-300 text-yellowPrimary focus:ring-yellowPrimary"
										/>
										<label
											htmlFor={item.name}
											className="ml-2 text-black text-sm"
										>
											{item.name}
										</label>
									</div>
								))}
							</>
						) : (
							<>
								{item.items.map((item, index) => (
									<button
										key={index}
										className="flex items-center bg-white py-3 rounded border justify-center"
										onClick={() =>
											setPriceRange(item.value)
										}
									>
										<label
											htmlFor={item.name}
											className={`ml-2 ${
												priceRange === item.value
													? "text-black"
													: "text-grayLight"
											} text-sm`}
										>
											{item.name}
										</label>
									</button>
								))}
							</>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default SideBar;
