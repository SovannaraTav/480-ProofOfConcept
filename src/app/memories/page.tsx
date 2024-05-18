import "../layout";
import "../globals.css";
import styles from "../styles/MemoriesPage.module.css"
import Image from "next/image";

export default function Memories()
{
    return (
        <div>
            <div>
                <h1 className={styles.h1}>In Loving Memory Of</h1>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Image 
                        src="/chief.jpg"
                        alt="Image of Chief"
                        width={375}
                        height={450}
                    />
                </div>

                <h2 className={styles.h2}>Chief Tav</h2>
                <h3 className={styles.h3}>
                    June 2021 - February 2024 (2 years, 9 months)
                </h3>
                <p className={styles.p}>
                    This page is dedicated to my beloved Chief, a Roborovski dwarf hamster who enjoyed
                    eating food, drinking water, storing food in his cheeks, sleeping for many hours, 
                    exploring his surroundings, burrowing through his home, and exercising on his hamster 
                    wheel. He will always be remembered as a handsome, cute, funny, and quick-moving hamster.
                    Chief, I hope you enjoyed your life as  Roborovski dwarf hamster and enjoyed spending
                    time with my family and I with happy memories!
                </p>
                <p className={styles.p}>🌈🐹❤️ Rest in peace buddy. ❤️🐹🌈</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>

            <div>
                <h2>Photos of Chief</h2>
                <div>
                    <Image
                        src="/chief_photo1.jpg"
                        alt="1st photo of Chief"
                        width={275}
                        height={300} 
                    />

                    <Image
                        className={styles.Image}
                        src="/chief_photo2.jpg"
                        alt="2nd photo of Chief"
                        width={300}
                        height={300} 
                    />

                    <Image
                        src="/chief_photo3.jpg"
                        alt="3rd photo of Chief"
                        width={250}
                        height={300} 
                    />
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>

            <div>
                <h2>Videos of Chief</h2>
                <video controls width={250}>
                    <source src="/chief_video1.mov"/>
                    Your browser does not support the video format. 1st video of Chief.
                </video>
                <video controls height={351} className={styles.video}>
                    <source src="/chief_video2.mov"/>
                    Your browser does not support the video format. 2nd video of Chief.
                </video>
                <video controls width={484}>
                    <source src="/chief_video3.mov"/>
                    Your browser does not support the video format. 3rd Video of Chief.
                </video>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </div>
    );
}