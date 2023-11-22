using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Agroconnect_Login.Data;
using Agroconnect_Login.Areas.Identity.Data;
namespace Agroconnect_Login
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
                        var connectionString = builder.Configuration.GetConnectionString("Agroconnect_LoginContextConnection") ?? throw new InvalidOperationException("Connection string 'Agroconnect_LoginContextConnection' not found.");

                                    builder.Services.AddDbContext<Agroconnect_LoginContext>(options =>
                options.UseSqlServer(connectionString));

                                                builder.Services.AddDefaultIdentity<Agroconnect_LoginUser>(options => options.SignIn.RequireConfirmedAccount = false)
                .AddEntityFrameworkStores<Agroconnect_LoginContext>();

            // Add services to the container.
            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
                        app.UseAuthentication();;

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
            app.MapRazorPages();
            app.Run();
        }
    }
}