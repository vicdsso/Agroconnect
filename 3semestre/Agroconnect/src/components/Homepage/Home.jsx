// Importando React e useState Hook
import React from "react";
import style from "./Home.module.css"

// Componente da Barra de Navegação
const Home = () => {
  
  return (
    <div className={style["home-container"]}>
      <div className={style["banner-container"]}>
        <img src="/img/bannerNote.png" alt="Banner" className={style["banner-image"]} />
        <div className={style["banner-text"]}>
          <h1>Seja bem Vindos ao Agrocconect</h1>
          <h2>Conectando o mundo do agronegocio!</h2>
        </div>
        
        <div className={style["top-bar"]}>
          <img src="/img/logo.png" alt="Logo" className={style["logo"]} />
          <h4>Agrocconect</h4>
          <ul className={style["menu"]}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li className={style["dropdown"]}>
              <a href="#" className={style["dropbtn"]}>Categorias</a>
              <div className={style["dropdown-content"]}>
                <a href="#">Serviços</a>
                <a href="#">Maquinas</a>
                <a href="#">Produtos</a>
              </div>
            </li>
            <li>
            <input type="checkbox" id="search-toggle" class={style["search-toggle"]} />
<div className={style["search-bar"]}>
  <label htmlFor="search-toggle" className={style["search-icon"]}></label>
  <input type="text" placeholder="Pesquisar..." className={style["search-input"]} />
</div>
            </li>
            <li><a href="#">Log in</a></li>
          </ul>
        </div>
      </div>
      <div className={style.cardFundo}>
      <center><h5>Divulgações</h5></center>
      <div className={style["card-container"]}>
        
        <div className={style["card"]}>
          <img src="https://avatars.mds.yandex.net/i?id=addc79487aa87371d1915b3b1e137c6d2a99fb68-9677438-images-thumbs&n=13" alt="Card 1" />
          <h3>Produtos</h3>
        </div>
        <div className={style["card"]}>
          <img src="https://content.assets.pressassociation.io/2017/11/09154445/0ab261b1-5654-4473-9d3c-49f667b74860.jpg" alt="Card 2" />
          <h3>Serviços</h3>
        </div>
        <div className={style["card"]}>
          <img src="https://lubricants.repsol.com/content/dam/repsol-lubricantes/es/distributivas-de-gama/agro/agro-destacado.jpg" alt="Card 3" />
          <h3>Maquinas</h3>
        </div>
        <div className={style["card"]}>
          <img src="https://lista.md/public/uploads/articles/268/tinymce_images_d7375d19bc2d1642270320055dc50807.jpg?1649411551" alt="Card 4" />
          <h3>Gerais</h3>
        </div>
      </div>
    </div>
    </div>
  );
};




/*


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
