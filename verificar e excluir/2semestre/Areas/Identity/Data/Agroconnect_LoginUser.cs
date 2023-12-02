using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Agroconnect_Login.Areas.Identity.Data;


public class Agroconnect_LoginUser : IdentityUser
{
    public string? Nome { get; internal set; }
    public string? Telefone { get; internal set; }
}

