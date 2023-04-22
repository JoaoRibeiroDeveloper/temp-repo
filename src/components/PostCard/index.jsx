import './style.css';
//colocamos Letra maiusculo quando são funcoes contrutoras, classes e componentes
export const PostCard = ({id, photo, title, body}) => (
    <div className="post">
        <img src={photo} alt={title}/>
        <div className="post-content">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
)