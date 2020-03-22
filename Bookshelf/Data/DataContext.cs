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

            builder.Entity<AuthorBook>()
            .HasKey(t => new { t.AuthorId, t.BookId });

            builder.Entity<AuthorBook>()
                .HasOne(sc => sc.Author)
                .WithMany(s => s.AuthorBooks)
                .HasForeignKey(sc => sc.AuthorId);

            builder.Entity<AuthorBook>()
                .HasOne(sc => sc.Book)
                .WithMany(c => c.AuthorBooks)
                .HasForeignKey(sc => sc.BookId);
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
    }
}
