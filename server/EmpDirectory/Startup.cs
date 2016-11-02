using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Cors;
using System.Web.Http;

[assembly: OwinStartup(typeof(EmpDirectory.Startup))]

namespace EmpDirectory
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            app.UseCors(CorsOptions.AllowAll);
        }
    }
}
