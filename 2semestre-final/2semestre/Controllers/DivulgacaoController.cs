﻿using Agroconnect_Login.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Agroconnect_Login.Controllers
{
    public class DivulgacoesController : Controller
    {
       

        public IActionResult Produto()
        {
            return View();
        }

        public IActionResult Maquina()
        {
            return View();
        }

        public IActionResult Servico()
        {
            return View();
        }
    }
}