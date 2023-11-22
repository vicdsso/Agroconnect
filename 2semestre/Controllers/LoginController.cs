using Agroconnect_Login.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Agroconnect_Login.Controllers
{
    public class LoginController : Controller
    {
      

        public IActionResult Perfil()
        {
            return View();
        }

        public IActionResult Editar()
        {
            return View();
        }

    }
}