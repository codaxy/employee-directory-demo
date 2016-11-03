using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpDirectory.Models
{
    public class EmpCard
    {
        public string DepartmentName { get; internal set; }
        public string FirstName { get; internal set; }
        public Guid Id { get; internal set; }
        public string LastName { get; internal set; }
        public string MobilePhone { get; internal set; }
        public string OfficeName { get; internal set; }
        public string PictureUrl { get; internal set; }
        public string PrimaryEmail { get; internal set; }
        public string Title { get; internal set; }
    }
}