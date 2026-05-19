import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Card() {

    const { theme } = useContext(ThemeContext)

    return (

        <div className={`${theme === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-200"
            } w-full border rounded-lg shadow`}>

            <a href="/">
                <img
                    className="p-8 rounded-t-lg"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg"
                    alt="product"
                />
            </a>

            <div className="px-5 pb-5">

                <h5 className="text-xl font-semibold tracking-tight">
                    Apple Watch Series 7
                </h5>

                <div className="flex items-center justify-between mt-5">

                    <span className="text-3xl font-bold">
                        $599
                    </span>

                    <button className="text-white bg-blue-700 px-5 py-2 rounded-lg">
                        Add to cart
                    </button>

                </div>

            </div>

        </div>
    );
}