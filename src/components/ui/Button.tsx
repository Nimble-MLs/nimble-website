import Link from "next/link";

const Button = ({text, path}: {text: string, path: string}) => {
    return (
        <div>
            <Link href={path}>
            <button className="bg-secondary border border-dark px-4 py-2 md:mx-7 md:my-20 my-10 font-switzer md:text-2xl text-lg font-light w-fit">
            {text}
				</button>
            </Link>
        </div>
    );
}

export default Button;