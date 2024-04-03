import React from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*Ideia fazendeiro vendendo uma maquina*/
const Publicacao = () => {
  return (
    <>Maquinas

<section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src=""
                alt="Logo Parceiros"
              />
              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>
                    </p>
                <p className={style["tipo-parceiro"]}>
                  Fazenda|Maquina|
                  <img
                    className={style.pontinhos}
                    src="/img/pontos.png"
                    alt="pontinhos"
                  />
                </p>
              </div>
            </div>
            <hr></hr>

            <center>
              <h5></h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src=""
                alt=""
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />

              <button className={style["btn-saibamais"]} type="button">
                Entrar na publicação
              </button>
              <img
                className={style["curtirFavoritar"]}
                src="/img/favorito.png"
                alt="Favoritar"
              />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src=""
                alt="Logo Parceiros"
              />
              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>
                    </p>
                <p className={style["tipo-parceiro"]}>
                  Empresa|Maquina|
                  <img
                    className={style.pontinhos}
                    src="/img/pontos.png"
                    alt="pontinhos"
                  />
                </p>
              </div>
            </div>
            <hr></hr>

            <center>
              <h5></h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src=""
                alt=""
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />

              <button className={style["btn-saibamais"]} type="button">
                Entrar na publicação
              </button>
              <img
                className={style["curtirFavoritar"]}
                src="/img/favorito.png"
                alt="Favoritar"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="/img/LogoBaldan.png"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Baldan</p>
                <p className={style["tipo-parceiro"]}>
                  Empresa|Maquinas|
                  <img
                    className={style.pontinhos}
                    src="/img/pontos.png"
                    alt="pontinhos"
                  />
                </p>
              </div>
            </div>
            <hr></hr>

            <center>
              <h5>AVOLA - Pulverizador Autopropelido</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              Um pulverizador resistente e versátil com opções de reservatórios
              de 2000 ou 2500 litros e barras de 25 a 30 metros. Equipado com um
              motor de 190 cv e uma transmissão hidrostática bem ajustada, é
              capaz de navegar... em diferentes tipos de terreno e superar
              obstáculos devido ao seu baixo peso. Reservatórios: Disponível em
              opções de 2000 ou 2500 litros. Alcance: Barras de 25 a 30 metros
              para cobertura eficaz. Potência: Motor de 190 cv para desempenho
              superior. Versatilidade: Adapte-se a diversos tipos de terreno com
              sua transmissão hidrostática. Confiabilidade: Supere obstáculos
              com facilidade devido ao seu baixo peso.
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://www.baldan.com.br/uploads/pagina/elemento/campo/2023/04/7ie7DCK5iso4CMe3/00-avola-baldan.webp"
                alt="Pulverizador Autopropelido da Baldan"
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />

              <button className={style["btn-saibamais"]} type="button">
                Entrar na publicação
              </button>
              <img
                className={style["curtirFavoritar"]}
                src="/img/favorito.png"
                alt="Favoritar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Publicacao;
