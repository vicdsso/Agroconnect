using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
//using NuGet.Protocol.Core.Types; //TA VERMELHO SUBLINHADO
using AGROCONNECT.Models;
using AGROCONNECT.Repositories.ADO.SQLServer;

namespace AGROCONNECT.Controllers
{
    public class PublicacaoController : Controller
    {


        private readonly Repositories.ADO.SQLServer.PublicacaoDAO repository;


        // objeto configuration => parte do framework que permite ler o
        // arquivo appsettings.json - GetConnectionString => método do framework que permite
        // ler a chave ConnectionStrings deste arquivo.
        public PublicacaoController(IConfiguration configuration)
        {
            this.repository = new Repositories.ADO.SQLServer.PublicacaoDAO(configuration.GetConnectionString(Configurations.Appsettings.getKeyConnectionString()));
            //Configurations.Appsettings.getKeyConnectionString => nossa classe de configuração para trazer a chave que
            //deve ser lida, neste caso: DefaultConnection.
        }

        // GET => getAll: CarrosController
        [HttpGet]
        public IActionResult Index()
        {
            return View(this.repository.getAll());
        }

        // GET => getByIdCarro(id): CarrosController/Edit/5
        [HttpGet]
        //public IActionResult Edit(int id)
        //{
        //   // return View(this.repository.getByIdPublicacao(id));
        //   // return View(this.repository.getByIdCarro(id));
        //}

        // POST : CarrosController/Edit
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, Publicacao publicacao)
        {
            try
            {
                this.repository.update(id, publicacao);
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET : CarrosController/Create
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        // POST : CarrosController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Publicacao publicacao)
        {
            try
            {
                this.repository.add(publicacao);
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET : CarrosController/Details/5
        //[HttpGet]
        //public IActionResult Details(int id)
        //{
        //    //return View(this.repository.getByIdPublicacao(id));
        //    //    return View(this.repository.getByIdCarro(id));
        //}

        // GET : CarrosController/Delete/5
        [HttpGet]
        public IActionResult Delete(int id)
        {
            this.repository.delete(id);
            return RedirectToAction(nameof(Index));
        }

    }
}


