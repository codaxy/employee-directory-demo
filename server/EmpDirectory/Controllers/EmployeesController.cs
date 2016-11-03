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
        public IEnumerable<Models.EmpCard> Query(string q = null)
        {
            using (var db = new Db.DataContext())
            {
                IQueryable<Db.Employee> query = db.Employees;

                if (!String.IsNullOrEmpty(q))
                {
                    var parts = q.Split(new[] { ' ', ',', ';' }, StringSplitOptions.RemoveEmptyEntries);

                    var words = parts.Where(a => !a.StartsWith("#")).ToArray();
                    var hashes = parts.Where(a => a.StartsWith("#") && a.Length > 1).Select(a => a.Substring(1)).ToArray();

                    if (words.Any())
                    {
                        var ftsQuery = FtsQuery(words);
                        query = db.Employees.FromSql("SELECT * FROM Employee WHERE Contains(FTS, {0})", ftsQuery);
                    }

                    if (hashes.Any())
                    {
                        var ftsQuery = FtsQuery(hashes);
                        var deps = db.Departments
                            .FromSql("SELECT * FROM Department WHERE Contains(FTS, {0})", ftsQuery)
                            .Select(a => a.Id)
                            .ToArray();

                        var offices = db.Offices
                            .FromSql("SELECT * FROM Office WHERE Contains(FTS, {0})", ftsQuery)
                            .Select(a => a.Id)
                            .ToArray();

                        query = query.Where(a => deps.Contains(a.DepartmentId) || offices.Contains(a.OfficeId));
                    }
                }

                return query
                    .Select(e => new Models.EmpCard
                    {
                        Id = e.Id,
                        FirstName = e.FirstName,
                        LastName = e.LastName,
                        Title = e.Title,
                        OfficeName = e.Office.Name,
                        DepartmentName = e.Department.Name,
                        MobilePhone = e.MobilePhone,
                        PrimaryEmail = e.PrimaryEmail,
                        PictureUrl = e.PictureUrl
                    })
                    .ToArray();
            }
        }

        private static string FtsQuery(IEnumerable<string> words)
        {
            return string.Join(" AND ", words.Select(a => String.Format("\"{0}*\"", a)));
        }

        public Db.Employee Get(Guid id)
        {
            using (var db = new Db.DataContext())
            {
                return db.Employees
                    .Include(a => a.Department)
                    .Include(a => a.Office)
                    .Single(a => a.Id == id);
            }
        }

        [AcceptVerbs("PATCH")]
        public Db.Employee Patch(Guid id, JObject delta)
        {
            using (var db = new Db.DataContext())
            {
                var record = db.Employees.Single(a => a.Id == id);
                Apply(record, delta);
                db.SaveChanges();
            }

            return Get(id);
        }

        private void Apply(Db.Employee record, JObject delta)
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
            Apply(record, data);
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
