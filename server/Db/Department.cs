using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpDirectory.Api.Db
{
    public class Department
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
    }
}
