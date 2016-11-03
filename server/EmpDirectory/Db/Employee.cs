using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EmpDirectory.Db
{
    public class Employee
    {
        public Guid Id { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Title { get; set; }

        public DateTime? StartDate { get; set; }

        public string MobilePhone { get; set; }
        public string OfficePhone { get; set; }
        public string HomePhone { get; set; }

        public string PrimaryEmail { get; set; }
        public string SecondaryEmail { get; set; }

        public string PictureUrl { get; set; }

        public Guid DepartmentId { get; set; }
        public Department Department { get; set; }

        public Guid OfficeId { get; set; }
        public Office Office { get; set; }
    }
}