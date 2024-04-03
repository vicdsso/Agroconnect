import React, { useEffect, useState } from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Publicacao = () => {
  return (
    <>
      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="https://blog4.mfrural.com.br/wp-content/uploads/2020/08/fazenda-venda3.jpg"                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Sol Poente</p>
                <p className={style["tipo-parceiro"]}>
                  Agricultor|Produto|
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
              <h5>Mel Puro e Natural</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              Se você deseja adquirir nosso mel em barris de 100 kg para sua
              marca, entre em contato conosco para discutir detalhes, preços e
              prazos de entrega. Escolha nosso mel para elevar o sabor de
              seus produtos! 100% puro e natural - Sem aditivos... ou
              conservantes - Colhido e processado com carinho - Sabor
              excepcional e versátil
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://th.bing.com/th/id/R.58daae556f7d140c3cbe3e2e843b28cf?rik=wcX2pClLsE8%2fyA&pid=ImgRaw&r=0" alt=""/>
      
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
                src=" https://revistarpanews.com.br/wp-content/uploads/2020/09/colhedora-de-cana.jpg"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Fazenda Doce Açúcar</p>
                <p className={style["tipo-parceiro"]}>
                  Agricultor|Produto|
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
              <h5>Oferta de Safra de Cana-de-Açúcar</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              Temos o prazer de oferecer nossa safra de cana-de-açúcar de alta
              qualidade diretamente da nossa Fazenda. Nossa plantação é
              cultivada com cuidado e garantindo qualidade. Cada tonelada é
              vendida a um preço justo de R$ 350... Contato: Entre em contato
              conosco pelo e-mail: fazendadoceacucar@gmail.com ou pelo telefone:
              (11) 1234-5678.
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://blog4.mfrural.com.br/wp-content/uploads/2022/09/shutterstock_81418672-1090x660.jpg"
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
