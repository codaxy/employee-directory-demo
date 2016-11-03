using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpDirectory.Db
{
    public class Office
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
    }
}
