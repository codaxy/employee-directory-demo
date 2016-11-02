using EmpDirectory.Util;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
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
        [HttpGet]
        //[Route("employees")]
        public IEnumerable<Db.Employee> Query()
        {
            using (var db = new Db.DataContext())
            {
                return db.Employees.ToArray();
            }
        }


        public Db.Employee Get(Guid id)
        {
            using (var db = new Db.DataContext())
            {
                return db.Employees
                    .Include(a => a.Department)
                    .Single(a => a.Id == id);
            }
        }

        [AcceptVerbs("PATCH")]
        public Db.Employee Patch(Guid id, JObject delta)
        {
            using (var db = new Db.DataContext())
            {
                var record = db.Employees.Single(a => a.Id == id);
                Apply(delta, record);
                db.SaveChanges();
            }

            return Get(id);
        }

        private void Apply(JObject delta, Db.Employee record)
        {
            delta.Remove("department");
            delta.Remove("office");
            JsonPatch.Apply(record, delta, Configuration.Formatters.JsonFormatter.SerializerSettings);
        }

        public Db.Employee Post(Guid id, JObject delta)
        {
            return Patch(id, delta);
        }

        public Db.Employee Put(JObject data)
        {
            var record = new Db.Employee();
            JsonPatch.Apply(record, data, Configuration.Formatters.JsonFormatter.SerializerSettings);
            record.Id = Guid.NewGuid();

            using (var db = new Db.DataContext())
            {
                db.Employees.Add(record);
                db.SaveChanges();
            }

            return Get(record.Id);
        }
        
        public void Delete(int id)
        {
        }
    }
}
