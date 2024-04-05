// Importando React e useState Hook
import React from "react";
import style from "./Home.module.css"

// Componente da Barra de Navegação
const Home = () => {
  return (
    <div className={style["top-bar"]}>
    <ul className={style["menu"]}>
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
   
  );
};
/*
// Componente do Banner
function Banner() {
  return (
    <div>
      <Nav />
      <div className="big-banner">
        <div className="callout large primary">
          <div className="row column text-center">
            <h1>React Blog</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de um Post
function Post({ ptitle, pimg, date, postbody, author, comments }) {
  function tryClick() {
    alert('Testando eventos de clique!');
  }

  return (
    <div className="blog-post">
      <h3 className="ptitle">{ptitle}<small>{date}</small></h3>
      <img className="thumbnail" src={pimg} alt={author} />
      <p>{postbody}</p>
      <div className="callout callout-post">
        <ul className="menu simple">
          <li><a href="#" onClick={tryClick}>Autor: {author}</a></li>
          <li><a href="#">Comentários: {comments}</a></li>
          <li><a href="#">Tags: {h.getTaggedName()}</a></li>
        </ul>
      </div>
    </div>
  );
}

// Componente do Formulário de Adição de Post
function AddPostForm({ addPost }) {
  const [post, setPost] = useState({ title: '', name: '', desc: '', image: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setPost(prevPost => ({ ...prevPost, [name]: value }));
  }

  function createPost(event) {
    event.preventDefault();
    const timestamp = new Date().getTime();
    addPost({ ...post, timestamp });
    setPost({ title: '', name: '', desc: '', image: '' });
  }

  return (
    <div className="callout secondary form-area">
      <h5>Adicione um Post ao Blog React</h5>
      <form className="post-edit" onSubmit={createPost}>
        <label>Título do Post
          <input type="text" name="title" value={post.title} onChange={handleChange} placeholder="Título do Post" required />
        </label>
        <label>Nome do Autor
          <input type="text" name="name" value={post.name} onChange={handleChange} placeholder="Nome Completo" required />
        </label>
        <label>Corpo do Post
          <textarea name="desc" value={post.desc} onChange={handleChange} placeholder="Escreva seu post aqui" required />
        </label>
        <label>URL da Imagem
          <input type="url" name="image" value={post.image} onChange={handleChange} placeholder="URL da Imagem" required />
        </label>
        <button type="submit" className="button">Adicionar Post</button>
      </form>
    </div>
  );
}

// Componente Principal do Aplicativo
function App() {
  const [posts, setPosts] = useState({});

  function addPost(post) {
    setPosts(prevPosts => ({ ...prevPosts, [post.timestamp]: post }));
  }

  function renderPost(key) {
    return <Post key={key} ptitle={posts[key].title} pimg={posts[key].image} date={h.getTime()} postbody={posts[key].desc} author={posts[key].name} comments="0" />;
  }

  return (
    <div>
      <Banner />
      <div className="row medium-8 large-7 columns">
        {}
        <Post ptitle="Flux flack" pimg="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg" date="Nov 2, 2015" postbody={dummyPost} author="Fred Armisen" comments="2" />
        <Post ptitle="Inline Styles Aren't Necessary" pimg="https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg" postbody={dummyPost} date="Aug 15, 2015" author="Amy Schumer" comments="5" />
        <Post ptitle="Webpack and ES6" pimg="https://c2.staticflickr.com/6/5738/23929500196_b6a1ce1dfb_b.jpg" date="Mar 9, 2015" postbody={dummyPost} author="Victoria Bell" comments="3" />
        <Post ptitle="No More Goobers" pimg="https://pixabay.com/static/uploads/photo/2015/09/14/19/15/aerial-landscape-939963_960_720.jpg" date="Jan 11, 2015" postbody={dummyPost} author="Jack Sherlock" comments="7" />
      
        {}
        <div className="list-of-posts">
          {Object.keys(posts).map(renderPost)}
        </div>
        <AddPostForm addPost={addPost} />
      </div>
    </div>
  );
}
*/
export default Home;
