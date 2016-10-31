using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace EmpDirectory.Api.Db
{
    public class DataContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Employee>().ToTable("Employee");
            modelBuilder.Entity<Department>().ToTable("Department");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var cs = ConfigurationManager.ConnectionStrings["Default"];
            if (cs == null)
                throw new Exception("Connection string could not be found. Please create a file called CS.config in the root folder and put a connection string inside it.");

            optionsBuilder.UseSqlServer(cs.ConnectionString);
        }
    }
}