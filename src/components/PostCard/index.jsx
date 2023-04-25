import P from 'prop-types';
import './style.css';
//colocamos Letra maiusculo quando são funcoes contrutoras, classes e componentes
export const PostCard = ({ photo, title, body }) => (
  <div className="post">
    <img src={photo} alt={title} />
    <div className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  id: P.number.isRequired,
  photo: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
};
