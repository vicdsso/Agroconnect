using Agroconnect_Login.Models;

using Microsoft.Data.SqlClient; 
using System.Runtime.ConstrainedExecution;


namespace Agroconnect_Login.Repositories.ADO.SQLServer
{
    public class PublicacaoDAO
    {
        private readonly string connectionString; 

        public PublicacaoDAO(string connectionString) 
        {
            this.connectionString = connectionString; 
        }

        public List<Publicacao> getAll() // get() retornar todas as publi 
        {
            List<Publicacao> publicacoes = new List<Publicacao>();

            using (SqlConnection connection = new SqlConnection(this.connectionString))
            {

                
                connection.Open();

                using (SqlCommand command = new SqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText = "select id, titulo, descricao from publicacoes;";

                    SqlDataReader dr = command.ExecuteReader();

                    while (dr.Read())
                    {
                        Publicacao publicacao = new Publicacao();

                        publicacao.Id = (int)dr["id"];
                        publicacao.Titulo = dr["titulo"].ToString();
                        publicacao.Descricao = dr["descricao"].ToString();


                        publicacoes.Add(publicacao);
                    }

                }

            }
            return publicacoes;
        }

        public Publicacao getByIdPublicacao(int id) //somente 1 publi
        {
            Publicacao publicacao = new Publicacao();

            using (SqlConnection connection = new SqlConnection(this.connectionString))
            {

                // Abrir conexão do banco de dados
                connection.Open();

                using (SqlCommand command = new SqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText = "select id, titulo, descricao from publicacoes where id=@id;";
                    command.Parameters.Add(new SqlParameter("@id", System.Data.SqlDbType.Int)).Value = id;

                    SqlDataReader dr = command.ExecuteReader();

                    if (dr.Read())
                    {
                        publicacao.Id = (int)dr["id"];
                        publicacao.Titulo = dr["titulo"].ToString();
                        publicacao.Descricao = dr["descricao"].ToString();

                    }
                }
            }
            return publicacao;
        }

        public void update(int id, Publicacao publicacao)
        {
            using (SqlConnection connection = new SqlConnection(this.connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText = "update publicacoes set titulo = @titulo, descricao = @descricao where id=@id;";
                    command.Parameters.Add(new SqlParameter("@titulo", System.Data.SqlDbType.VarChar)).Value = publicacao.Titulo;
                    command.Parameters.Add(new SqlParameter("@descricao", System.Data.SqlDbType.VarChar)).Value = publicacao.Descricao;

                    command.Parameters.Add(new SqlParameter("@id", System.Data.SqlDbType.Int)).Value = id;

                    command.ExecuteNonQuery();
                }
            }
        }

        public void add(Publicacao publicacao)
        {
            using (SqlConnection connection = new SqlConnection(this.connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText = "insert into publicacoes (titulo, descricao) values (@titulo,@descricao); select convert(int,@@identity) as id;;";

                    command.Parameters.Add(new SqlParameter("@titulo", System.Data.SqlDbType.VarChar)).Value = publicacao.Titulo;
                    command.Parameters.Add(new SqlParameter("@descricao", System.Data.SqlDbType.VarChar)).Value = publicacao.Descricao;

                    publicacao.Id = (int)command.ExecuteScalar(); 
                }
            }
        }

        public void delete(int id)
        {
            using (SqlConnection connection = new SqlConnection(this.connectionString))
            {
                // Abrir conexão do banco de dados: 
                connection.Open();

                using (SqlCommand command = new SqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText = "delete from publicacoes where id = @id;";
                    command.Parameters.Add(new SqlParameter("@id", System.Data.SqlDbType.Int)).Value = id;

                    command.ExecuteNonQuery();
                }
            }
        }



    }
}
