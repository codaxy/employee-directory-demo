using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpDirectory.Controllers
{
    public class DepartmentsController : ApiController
    {
        // GET api/values
        public IEnumerable<Db.Department> Get(string q = null)
        {
            using (var db = new Db.DataContext())
            {
                IQueryable<Db.Department> query = db.Departments;

                if (!String.IsNullOrWhiteSpace(q))
                    query = query.Where(a => a.Name.StartsWith(q));

                return query.ToArray();
            }
        }
    }
}
