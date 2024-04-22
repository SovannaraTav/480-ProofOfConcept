import Link from "next/link";

function NavigationBarComponent()
{
    return (
        <nav>
            <h1>Navigation Bar</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/things-to-read">Things to Read</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBarComponent;