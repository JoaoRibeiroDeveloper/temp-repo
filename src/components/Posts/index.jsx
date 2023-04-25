import P from 'prop-types';
import './style.css';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      /*
            No react podemos criar components (que são pequenos código para separar e usar em outros lugares)
            nesses componentes podemos passar props que propriedadesque envia para o componente passado como atributo
            a key deve ir somente no map do componente não dentro dele
          */
      <PostCard
        key={post.id}
        id={post.id}
        photo={post.photo}
        title={post.title}
        body={post.body}
      />
    ))}
  </div>
);
Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      photo: P.string.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
