using Bookshelf.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookshelf.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Book>().Property<bool>("IsDeleted");
            builder.Entity<Book>().HasQueryFilter(b => EF.Property<bool>(b, "IsDeleted") == false);
        }

        public DbSet<Book> Books { get; set; }
    }
}
