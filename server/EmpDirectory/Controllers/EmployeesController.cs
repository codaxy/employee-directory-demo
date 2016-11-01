using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpDirectory.Controllers
{
    public class EmployeesController : ApiController
    {
        // GET api/values
        public IEnumerable<object> Get()
        {
            using (var db = new Db.DataContext())
            {
                return db.Employees.ToArray();
            }
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
