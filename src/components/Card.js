
function Card({title,link}) {
    return (
        <div className={"card " +  title} >
                <a href={link}><p>{title}</p></a>
        </div>
    );
}

export default Card;