import { Link } from "react-router-dom";
import { getFullDay } from "../common/date";

const AboutUser = ({ className = "", bio = "", social_links = {}, joinedAt }) => {
    const bioText = bio && bio.length ? bio : "Nothing to read here";
    const links = social_links || {};

    return (
        <div className={"md:w-[90%] md:mt-7 " + className}>
            <p className="text-xl leading-7">{ bioText }</p>

            <div className="flex gap-x-7 gap-y-2 flex-wrap my-7 items-center text-slate-800">

                {
                    Object.keys(links).map((key) => {

                        let link = links[key];

                        return link ? (
                            <a href={link} key={key} target="_blank" rel="noopener noreferrer">
                                <i className={"fi " + (key !== 'website' ? "fi-brands-" + key : "fi-rr-globe") + " text-2xl hover:text-black " }></i>
                            </a>
                        ) : null

                    })
                }

            </div>

            <p className="text-xl leading-7 text-slate-800">Joined on {getFullDay(joinedAt)}</p>
        </div>
    )
}

export default AboutUser;