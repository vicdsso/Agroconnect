using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Agroconnect_Login.Models
{
    public class Publicacao
    {

            public int Id { get; set; }

            [Required(ErrorMessage = "Campo Titulo é obrigatório!", AllowEmptyStrings = false)]//troquei 3 - 6 e 100 - 50
            [StringLength(50, MinimumLength = 6, ErrorMessage = "Mínimo de 6 e máximo de 50 caracteres.")]
            public string Titulo { get; set; }

        [Required(ErrorMessage = "Campo Descrição é obrigatório!", AllowEmptyStrings = false)]
        [StringLength(1000, MinimumLength = 50, ErrorMessage = "Mínimo de 50 e máximo de 1000 caracteres.")]
        public string Descricao { get; set; }

           

            public Publicacao()
            {
                this.Id = 0;
                this.Titulo = string.Empty;
            this.Descricao = string.Empty;

            }
        }
    }





