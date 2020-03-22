using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookshelf.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<AuthorBook> AuthorBooks { get; set; }
        public Author()
        {
            AuthorBooks = new List<AuthorBook>();
        }
    }
}
